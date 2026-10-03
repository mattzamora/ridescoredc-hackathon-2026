# Topic 1: Landing page design mockup

<Badge type="tip" text="Beginner" /> <Badge type="info" text="Design/Concept" />

<div class="glance">

| | |
|---|---|
| **Expected stack** | <span class="chip">An AI design tool</span> <span class="or">or</span> [Front-End](/tracks/website-ui/frontend-guide) (optional, to build it in the real site) |
| **Setup before Saturday** | None for the AI route; about 10 minutes for Front-End. If your AI tool makes code, check it can save to GitHub on a free plan |
| **Building time** | 2–3 hours on the day |
| **Good fit if…** | You like page design, layout and navigation, or trying AI app builders, and don't need to touch the codebase |
| **What you can share** | Usually a Drive folder of screenshots and notes, plus a GitHub repo if your AI tool made code |

</div>


*Related: [Topic 2: Build an in-app guided tour](/tracks/website-ui/topics/02-in-app-guided-tour) · [Submitting your work](/tracks/website-ui/submitting-your-work)*

## Problem statement

The site opens straight onto a map. A first-time visitor doesn't see what RideScore DC is, who runs it, or that there's a survey where they can share their own rides. There's no home page, no menu, and no way to get from the map to the survey. People who can't find their way around in the first minute rarely come back.

RideScore DC needs a **front door**: a landing page that looks professional, says in a sentence what the project is, and sends visitors to the map or the survey. In this topic you design that page with an AI design or app-building tool, and explain your design choices.

### Why it matters

First impressions decide whether anyone uses RideScore DC at all. A clear, good-looking front page makes the project feel trustworthy and finished, and gives every other page a home to link back to. It's also where visitors find the survey, which is how riders' own experience gets into the map.

### Who it's for

- **New riders and people thinking about biking**, who want a starting point, not a data tool.
- **Experienced commuters**, who need a quick way to the map and a reason to contribute.
- **Advocates, planners and journalists**, who need to know in seconds what the project is and who runs it.
- Most will arrive **on a phone**, from a link someone shared.

### How it connects

- Sends visitors to the **map** and the **survey**, the two pages the rest of this track improves.
- **Topic 2** builds a guided tour of the map. Your page can have a "Take the tour" button that starts it.

### Example ideas

- A one-screen hero with a short line about the project and two clear buttons: *Explore the map* and *Share a ride*.
- A simple top menu shared by every page: Map · Survey · About · Get involved.
- An "About" strip: who runs it (Civic Tech DC), where the data comes from, how to join.
- A layout borrowed from another region's bike map, credited to its source.

## 1. Tools and set up (before Saturday)

| Tool | Why | Get it |
|---|---|---|
| An AI design or app-building tool | Turn your ideas into a clickable mock-up fast | [Figma Make](https://www.figma.com/make/), [Lovable](https://lovable.dev), [Replit](https://replit.com), [v0](https://v0.app), [Claude](https://claude.ai), or another you like |
| A GitHub account | Keep the code your AI tool generates | [github.com/signup](https://github.com/signup) |
| Google Drive | Share your screenshots and notes | [drive.google.com](https://drive.google.com) |
| Optional: the Front-End setup | Build the page inside the real site instead | [Front-End Developer Guide](/tracks/website-ui/frontend-guide) |

<span class="alert">Check this before Saturday.</span> If your AI tool makes code, check that it can **save (push) that code to GitHub on the plan you have**. Some tools only sync to GitHub on paid plans, or limit how much you can make for free. Try a tiny test project and check the code appears on GitHub, so there are no payment surprises on the day.

### If something goes wrong

| Symptom | Fix |
|---|---|
| Your tool won't push to GitHub without upgrading | Download or copy the code and upload it to a new GitHub repository by hand, or switch to a tool that exports for free. |
| You run out of free generations mid-afternoon | Save screenshots as you go, so you always have something to hand in. |
| The repository is private | Make it public, because reviewers can't open a private one. Check the link in a private browser window. |

## 2. Know before you start

- **Start from what the project says about itself.** Civic Tech DC's [RideScore DC project page](https://www.civictechdc.org/projects/ridescoredc.html) has the basic language: what the project rates and who it's for (everyday cyclists, advocates, researchers, people weighing infrastructure priorities). Use it for your one-line description.
- **Look at what other regions do.** Design ideas from other bike-safety projects are very welcome. For example:
    - [Montgomery County's Bicycle Stress Map](https://mcatlas.org/bikestress/), next door in Maryland
    - [Ottawa's Cycling Level of Traffic Stress Map](https://maps.bikeottawa.ca/lts/)
    - [BikeMaps.org](https://bikemaps.org/), where riders report near misses and hazards
    - [PeopleForBikes City Ratings](https://cityratings.peopleforbikes.org/)
    - [Vision Zero DC](https://visionzero.dc.gov/)
- **Know what the site has today.** The [map](https://dev.ridescoredc.com/) colors streets by a safety score, with Settings, Imagery and Accidents buttons. The [survey](https://dev.ridescoredc.com/survey/) is a separate page where a rider paints a route and rates it. Neither page links to the other.

::: tip Tip for AI users
AI tools work well with images. Screenshot pages and details you like (including the sites above). Give them to your AI tool with your written prompt, and say what you like about each one.
:::

## 3. The challenge

### Core goal (2–3 hours)

Design a landing page for RideScore DC with an AI tool, and explain your design choices. It should:

1. Say what RideScore DC is and who runs it, in one or two plain sentences.
2. Send visitors to the map and to the survey, with clear calls to action.
3. Have simple navigation that every page could share.
4. Bring in at least one design idea from another region's bike-safety work.
5. Work on a phone-sized screen.

### Approaches

- Gather inspiration first (15 minutes): screenshots of landing pages and bike-safety sites you like.
- Write a short brief for your AI tool: the audience, the five points above, and your inspiration images. Work in small steps; they go better than one giant prompt.
- Walk through it as a new visitor would: can you get to the map and to the survey in one tap each?
- **Optional:** if you're comfortable with the code, build the page for real in `frontend/` (a new folder such as `frontend/about/`) and open a pull request. See [Add a new page](/tracks/website-ui/making-changes#add-a-new-page).

### Stretch goals

- Simple illustrations, or a header image of DC streets.
- Versions for two different visitors, for example a new rider and a planner.

## 4. Done when

::: tip Guideposts, not requirements
Use this list to tell when you have something worth showing, not as a test to pass. Change the scope, combine topics, or stop at whatever you finish: half-built with good notes is a great result, because this is a collaborative event, not a competition.
:::

- [ ] Your landing page covers all five points of the core goal.
- [ ] Each section has a short note on the **value it adds or the intention behind it**.
- [ ] It uses at least one idea from another region, credited to its source.
- [ ] If your AI tool made code, the GitHub repository is public, so others can open it.

## 5. Hand in

Share whatever you got to:

- **Code:** a public GitHub repository from your AI tool, or a pull request against `develop` if you built inside the site.
- **Anything else:** a shared Google Drive folder, or a link to a document.
- **The [submission form](/tracks/website-ui/submitting-your-work)**, one per team.
- **Two slides** in the demo deck for the 4:15 demos (required).
- **Optional:** a short video link, on the form.

Two things that help others understand your design: a short note beside each screenshot on the intention behind it, and, if your AI tool generated code, a link to that repository.

Nothing here is mandatory on the day. If you run short on time, share what you have and tell a mentor, because unfinished work with good notes still helps the next volunteer.

## Resources

- [RideScore DC on Civic Tech DC](https://www.civictechdc.org/projects/ridescoredc.html) · [The map](https://dev.ridescoredc.com/) · [The survey](https://dev.ridescoredc.com/survey/)
- [Montgomery County Bicycle Stress Map](https://mcatlas.org/bikestress/) · [Ottawa Cycling LTS Map](https://maps.bikeottawa.ca/lts/) · [BikeMaps.org](https://bikemaps.org/) · [PeopleForBikes City Ratings](https://cityratings.peopleforbikes.org/) · [Vision Zero DC](https://visionzero.dc.gov/)
