---
aside: false
---

# Infrastructure guide

*Every part of the site, who owns it, and where it runs on your laptop.*

![How data reaches the map on your laptop. Road and crash data from Open Data DC go through the ridescoredc-models pipeline, which publishes a data package and a serving bundle. npm run data loads both into the database (Docker container db) as the data and serving schemas; npm run migrate creates the survey tables (app schema). The tile server Martin (Docker container martin) reads the serving schema; the survey API (Docker container fastapi) writes to the app schema. nginx (Docker container nginx) is the front door: it hands back the page files, sends /tiles/ to Martin and /api/ to the survey API. In the browser, the map page draws map tiles with scores, and the survey page draws street tiles without scores and sends POST /api/submissions.](/images/infrastructure-overview.png)

*Box colors show who owns each part; the legend is at the top.* [Open the diagram full size](../../images/infrastructure-overview.png){target="_blank"}

## Names you'll see

| Name | What it is |
|---|---|
| **Docker container** | One program running in its own sealed box on your laptop. `docker compose up` starts all four from `docker-compose.yml`. |
| **Tile** | One small square of the map at one zoom level. The browser fetches only the tiles it is showing. |
| **nginx** | A web server. The single front door that every request reaches first. |
| **Martin** | A tile server from the MapLibre project. Cuts database rows into tiles. |
| **FastAPI** | A Python library for writing APIs. The survey API is built with it. |
| **PostgreSQL + PostGIS** | The database, plus the extension that lets it store streets as shapes. |
| **Schema** | A named area inside the database: `data`, `serving` and `app`. |
| **MapLibre** | An open-source map library that draws the tiles in your browser. |
| **GeoParquet** | A compact file format for tables of map data. |
| **Migration** | A numbered file that creates or changes database tables. |

More terms are in the track [glossary](/tracks/website-ui#glossary).

## The short version

- **Two journeys share one database.** Road data and scores travel *down* from a published release to the map. A rider's survey answer travels *up* from the survey page to the database.
- **Four programs, one front door.** nginx receives every request and passes it on: pages come from the `frontend/` folder, `/tiles/` goes to the tile server, `/api/` goes to the survey API.
- **The pages and the survey API are separate.** The survey page is a plain file that nginx hands back as-is. Saving an answer is the job of separate Python code, `api/main.py`, which only answers addresses starting `/api/`.
- **The map never calls the API.** Streets, scores and crashes all arrive as map tiles from the tile server.
- **Scores are never computed here.** They come from the `ridescoredc-models` repository, ready-made.

## Who owns what

| Color | Owner | Parts |
|---|---|---|
| <span class="swatch sw-web"></span>Teal | **Website repository** (`ridescoredc-website`): our code | The pages in `frontend/`, the survey API in `api/main.py`, the survey-table migrations in `api/migrations/`, the data loader (`npm run data`), and the settings for nginx (`nginx/`) and the tile server (`martin.yaml`) |
| <span class="swatch sw-mod"></span>Orange | **Models repository** (`ridescoredc-models`) | The score pipeline, and the two files it publishes: the **data package** (roads, crashes, scores) and the **serving bundle** (SQL deciding what a map may show) |
| <span class="swatch sw-oss"></span>Purple | **Open-source programs** we run but didn't write | nginx (web server), Martin (tile server, from the MapLibre project) |
| <span class="swatch sw-db"></span>Blue | **The database** | PostgreSQL with PostGIS, holding three schemas: `data`, `serving` and `app` |
| <span class="swatch sw-odc"></span>Grey | **Public data** | Open Data DC: road blocks, crashes and the DC boundary |

## Road data and scores → the map

1. **Open Data DC** publishes road blocks, crashes and the DC boundary.
2. **The score pipeline** in `ridescoredc-models` joins them and computes a score for every block.
3. It **publishes two files on GitHub Releases**: the data package (GeoParquet) and the serving bundle (SQL).
4. **`npm run data`** downloads both, loads them into the database, and restarts the tile server, which only reads the database when it starts.
5. **The database** keeps them as two schemas: `data` (roads, crashes, scores) and `serving` (the views and functions the map may read). Both are replaced on every load.
6. **The tile server, Martin,** turns the `serving` views into map tiles. When you move the Custom sliders, the map page sends the new weights with each tile request and Martin recomputes the scores.
7. **nginx** passes `/tiles/` requests to Martin and the tiles back to your browser.
8. **The map page** (`frontend/index.html`) draws them as colored streets with MapLibre.

## A survey answer → the database

1. **The survey page** (`frontend/survey/index.html`) is handed back by nginx as a file. It also loads street tiles from Martin, **without scores**, so riders give their own view first.
2. When the rider presses Submit, the page sends **`POST /api/submissions`**.
3. **nginx** passes anything under `/api/` to the survey API.
4. **The survey API** (`api/main.py`, Python with FastAPI) checks the answer and saves it.
5. **The database** keeps it in the `app` schema. Survey answers exist nowhere else, so this schema is never replaced. Its tables are created by **migrations** in `api/migrations/`, run with `npm run migrate`.

## Ports on your laptop

With the **Full Stack setup**, `npm run stack` runs `docker compose up`, which starts the four programs as Docker containers named in `docker-compose.yml`:

| Program | Docker container | On your laptop | Notes |
|---|---|---|---|
| nginx, the front door | `nginx` | **<http://localhost:8000>** | The whole site: `/` (map), `/survey/`, `/tiles/…`, `/api/…`, and `/health` |
| Martin, the tile server | `martin` | not published | Listens on port 3000 inside Docker only. Reach it through <http://localhost:8000/tiles/> |
| The survey API | `fastapi` | not published | Listens on port 8000 inside Docker only. Reach it through <http://localhost:8000/api/>; <http://localhost:8000/health> checks it can reach the database |
| PostgreSQL + PostGIS | `db` | **localhost:5432** | For `psql` and the data loader. Change it with `DB_PORT` in `.env` if 5432 is taken. Its files live in `./pg_data` |

Both nginx and the survey API use the number 8000, but only nginx's is on your laptop. The API's is inside Docker's own network, so `localhost:8000` always means nginx.

With the **Front-End setup**, `npm run dev` starts Vite instead, at **<http://localhost:5173>**. It serves the pages from your `frontend/` folder and forwards `/tiles/` and `/api/` to the shared staging server, dev.ridescoredc.com. Nothing else runs on your laptop: no Docker, no database. A survey you submit lands on the staging server as test data. To point Vite at your own Full Stack setup instead, set `VITE_UPSTREAM=http://localhost:8000` in `.env`.

## The commands

`npm run` commands are short names for what's underneath. You can always use the `docker compose` commands directly too.

| Command | What it runs | Where |
|---|---|---|
| `npm run stack` | Checks your settings files, then `docker compose up` | Starts all four Docker containers |
| `npm run stack:down` | `docker compose down` | Stops them |
| `npm run restart` | `docker compose restart` (add `-- martin` for one) | Restarts containers |
| `npm run stack:logs` | `docker compose logs -f` | Shows the containers' logs |
| `npm run data` | Downloads the latest release and loads it into `db` | On your machine; needs the stack running |
| `npm run migrate` | Creates and updates the survey tables in `db` | On your machine; needs the stack running |
| `npm run setup` | `npm run data`, then `npm run migrate` | On your machine; needs the stack running |
| `npm run dev` | Vite, the Front-End setup | On your machine; no Docker |

The settings check in `npm run stack` warns you when a setting is in a file that never reads it. Without it, a misplaced line, such as `DB_PORT` in the wrong file, is silently ignored.

## On a new machine

Nobody needs to share a database file. After cloning the website repository and following the [Front-End guide](/tracks/website-ui/frontend-guide):

1. **`cp api/.env.example api/.env`** creates the settings the containers read.
2. **`npm run stack`** starts the four containers. The first time, Docker downloads the images, and the database container creates an empty database.
3. **`npm run setup`**, in a second terminal while the stack keeps running, loads the published road data and creates the survey tables.
4. Open **<http://localhost:8000>**.

Steps 2 and 3 download from the internet, so do them before the event if you can. A new database starts with no survey answers; only road data, crashes and scores are published. The [Full Stack guide](/tracks/website-ui/full-stack-guide) has every step in detail, including Windows.

## Staging and production

The same four programs run on two servers, as system services rather than Docker containers. nginx also handles https there, redirecting `http://` to `https://`.

| Site | Address | Runs the branch |
|---|---|---|
| Staging | <https://dev.ridescoredc.com> | `develop` |
| Production | <https://ridescoredc.com> | `main` |

A merge to either branch runs the automatic checks (linter, tests, migrations), then deploys: it pulls the new code, applies any new migrations, and restarts the survey API and Martin. Pages in `frontend/` change as soon as the code is pulled. A deploy never changes the road data; that's loaded separately. See [Technical guides](/tracks/website-ui/making-changes) for opening a pull request.

## If something looks wrong

| You see | Likely cause | Try |
|---|---|---|
| `npm run stack` says a port is in use | Something else has 5432 or 8000 | Set `DB_PORT` in `.env`; for 8000, stop whatever is using it |
| The map at `localhost:8000` shows no colored streets | No data loaded yet, or Martin started before it was | `npm run setup`, or `npm run restart -- martin` |
| Submitting the survey returns 503 | No road data is loaded | `npm run data` |
| Submitting the survey returns 500 after you added a field | The column doesn't exist yet | Write a migration, then `npm run migrate` |

More in [Technical guides: troubleshooting](/tracks/website-ui/making-changes#troubleshooting-a-change).

## Related pages

- [How the site works](/tracks/website-ui/how-the-site-works): the four programs and the three schemas in more depth
- [The data](/tracks/website-ui/the-data): every column in the published data
- [Repository layout](/tracks/website-ui/repository-layout): where each file lives
