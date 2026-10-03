# Topic 2: Build an in-app guided tour

<Badge type="warning" text="Intermediate" /> <Badge type="info" text="Feature" />

<div class="glance">

| | |
|---|---|
| **Expected stack** | [Front-End](/tracks/website-ui/frontend-guide) |
| **Setup before Saturday** | About 10 minutes (the [Front-End guide](/tracks/website-ui/frontend-guide)) |
| **Building time** | 2–3 hours on the day |
| **Good fit if…** | You like JavaScript, interactive UI and animation, and want to work with a real map |
| **What you can share** | Usually a pull request, plus a short screen recording |

</div>


*Related: [Topic 1: Landing page design mockup](/tracks/website-ui/topics/01-landing-page-design-mockup) · [Topic 8: Split the page code into files](/tracks/website-ui/topics/08-split-the-page-code) · [Submitting your work](/tracks/website-ui/submitting-your-work)*

## Problem statement

The map has useful features that a first-time visitor never finds. The **Settings** button hides a Custom mode with sliders that reweight the score. **Accidents** shows crash locations, but only once you zoom in close. Clicking a street opens a popup with its details, and nothing says you can. The **DC Bike Safety** button opens the data sources. The survey, on its own page, has its own tools: **Paint**, **Unpaint** and **Rate**.

RideScore DC needs a **guided tour**: a few short steps that point at each feature in turn, move the map to show it working, and get out of the way. In this topic you build that tour.

### Why it matters

Features nobody finds might as well not exist. A tour turns a map that looks like a finished verdict into something people explore: change the weights, check the crashes, open a street. That's how visitors start to understand, and question, what they see.

### Who it's for

- **First-time visitors**, who land on the map from a shared link and don't know where to start.
- **Returning visitors**, who want a quick reminder of one feature without sitting through the whole tour.
- **Keyboard and screen-reader users**, who need the tour to work without a mouse.

### How it connects

- **Topic 1's** landing page can have a "Take the tour" button that starts your tour.
- **Topic 8** splits the map page's code into files, and Topics 3–6 edit the map or survey pages. Keep your tour in its own file to avoid clashing with them.

### Example ideas

- A "?" button that starts a five-step tour: Settings → Custom mode → Accidents → click a street → the data sources.
- A step that flies the map to an example block and opens its popup.
- Short contextual help: a small "?" next to one control that explains just that control.
- The tour starts on its own on someone's first visit only.

## 1. Tools and set up (before Saturday)

| Tool | Why | Get it |
|---|---|---|
| Git | Download the code and make a branch | [git-scm.com](https://git-scm.com/downloads) |
| Node.js 20 or newer | Runs the development server (`npm run dev`) | [nodejs.org](https://nodejs.org) |
| A code editor | Edit the map page | [VS Code](https://code.visualstudio.com) |
| A GitHub account | Open a pull request | [github.com/signup](https://github.com/signup) |
| Optional: a tour library | Highlights and step boxes, ready-made | [Driver.js](https://driverjs.com) (MIT licence), or write your own |

<span class="alert">Do this ahead of time.</span> Follow the [Front-End Developer Guide](/tracks/website-ui/frontend-guide). Windows users start with [Windows WSL](/tracks/website-ui/windows-wsl). You're ready when `http://localhost:5173` shows the map with colored streets.

### If something goes wrong

| Symptom | Fix |
|---|---|
| Your library loads, but nothing happens | Check the browser console (press F12). The page has no build step, so load the library with a `<script>` tag, the way the page already loads MapLibre. |
| A highlighted button sits behind the map | The tour's overlay needs a higher `z-index` than the map's controls and panels. |
| The tour restarts on every page load | Your "already seen it" check isn't saving. Look at `localStorage` in the browser's Application tab (F12). |

## 2. Know before you start

- **Where the map page lives.** Everything is in `frontend/index.html`. The buttons have IDs you can point at: `#settingsBtn`, `#imageryBtn`, `#accidentsBtn` and `#logo-box` (the "DC Bike Safety" button). The settings panel is `#settings-panel`, and Custom mode is `#mode-custom`.
- **The page has no build step.** Files in `frontend/` are served exactly as written, and scripts load with plain `<script>` tags (MapLibre comes from a CDN). Put your tour in its own file, such as `frontend/src/shared/tour.js`, and add one `<script>` tag. That keeps your change small and easy to merge.
- **Popups only open on a click.** The street popup is built inside `map.on('click', 'update_score', ...)`. A tour can't "click" a street, so to open one, move that popup-building code into a function you can also call from the tour.
- **Moving the map.** `map.flyTo({ center, zoom })` animates the map to a spot. Crashes appear only from zoom 15, the map's starting zoom, so stay at 15 or closer for the Accidents step.
- **Keep it optional.** A tour that can't be skipped is worse than no tour. Always show Skip, and let people restart it.

## 3. The challenge

### Core goal (2–3 hours)

Build a guided tour of the map page that:

1. Starts from a button, not by itself (for now).
2. Has four to six steps, each pointing at one feature with a sentence of text.
3. Includes at least one step that moves the map, such as flying to an example block and opening its popup.
4. Can be skipped at any step, and restarted.
5. Keeps the text in one easy-to-edit list, so it can be rewritten later.

### Approaches

- Click through the map yourself first, and list the features you'd want a new visitor to find.
- Try a library like Driver.js for the highlights and step boxes, or write your own with a dimmed overlay and a positioned box. Either is fine.
- Build the steps first with plain text, then add the map movement.

### Stretch goals

- Start the tour on someone's first visit only, and remember that they've seen it (`localStorage`).
- A shorter tour for the survey page: Paint, Unpaint and Rate.
- Contextual help: a small "?" on one control instead of the whole tour.
- Respect people who turn off animation (`prefers-reduced-motion`): jump instead of fly.

## 4. Done when

::: tip Guideposts, not requirements
Use this list to tell when you have something worth showing, not as a test to pass. Change the scope, combine topics, or stop at whatever you finish: half-built with good notes is a great result, because this is a collaborative event, not a competition.
:::

- [ ] The tour runs start to finish on your local map page, with no errors in the browser console (press F12).
- [ ] Each step points at the right feature, on a laptop and on a 375 px wide screen.
- [ ] At least one step moves the map and shows the result.
- [ ] Skip and restart both work, and so does the keyboard (Tab, Enter, Esc).
- [ ] The tour lives in its own file, and its text is in one place.

## 5. Hand in

Share whatever you got to:

- **Code:** a pull request against `develop` (a draft is fine), with a short screen recording or GIF of the tour.
- **Anything else:** your team's folder in the [Website/UI hand-in folder](https://drive.google.com/drive/folders/1n4fRuS5yiRNWO8Tfr6MA1l56i626spuh?usp=sharing). See [Your team's Drive folder](/tracks/website-ui/submitting-your-work#your-team-s-drive-folder).
- **The [submission form](/tracks/website-ui/submitting-your-work)**, one per team.
- **Two slides** in the demo deck for the 4:15 demos (required).
- **Optional:** a short video link, on the form.

Nothing here is mandatory on the day. If you run short on time, share what you have and tell a mentor, because unfinished work with good notes still helps the next volunteer.

## Resources

- **Background pack:** [download topic-02-in-app-guided-tour.zip](/downloads/website-ui/topic-02-in-app-guided-tour.zip), notes on how the map page works today: its controls, the Settings panel, popups, and the MapLibre events behind them. Intended more for use with an AI assistant, for rapid comprehension of the code: give it the Markdown files (Word versions are included too). Checked against today’s code; each section is marked as built, partly built, or an idea. Want everything? Grab [all notes across topics](/downloads/website-ui/all-notes-across-topics.zip) (just in case 😄).
- [The map on the dev site](https://dev.ridescoredc.com/) · [The survey](https://dev.ridescoredc.com/survey/) · [Website repository](https://github.com/civictechdc/ridescoredc-website)
- [Driver.js](https://driverjs.com) · [MapLibre: flyTo](https://maplibre.org/maplibre-gl-js/docs/API/classes/Map/#flyto)
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) · [MDN: prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
