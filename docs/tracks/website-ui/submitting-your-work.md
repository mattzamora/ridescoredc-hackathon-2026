# Submitting Your Work

*Every topic page says what to hand in; this page covers how.*

<span class="alert">Submissions close at 4:00.</span> Demos run 4:15–5:15, two minutes per team. Every team must hit **both** of these by 4:00:

<div class="must-do">
<div class="must-do-card">
<span class="must-do-num">1</span>

**Two slides in the shared demo deck**

Use our template and add two slides to the Website section of the [RideScore DC Demo Deck](https://docs.google.com/presentation/d/1ic9nFhiB6mftG0uKtgwuIJ0GgWwcM-_T/edit?usp=sharing&ouid=115249639562160932471&rtpof=true&sd=true). You'll present them for two minutes to the reviewer panel. See [Presenting](/presenting).
</div>
<div class="must-do-card">
<span class="must-do-num">2</span>

**One submission form per team**

The [Website/UI Submission Form](https://forms.cloud.microsoft/r/ghpNKYPvgr) holds all your links: GitHub, your team's Google Drive folder, demo video and any notes. Put every supporting file in **one folder**, created inside the [Website/UI hand-in folder](https://drive.google.com/drive/folders/1n4fRuS5yiRNWO8Tfr6MA1l56i626spuh?usp=sharing). The team representative fills it in for the whole team.
</div>
</div>

**Checklist for 4:00**

- [ ] **Two slides** in the [demo deck](https://docs.google.com/presentation/d/1ic9nFhiB6mftG0uKtgwuIJ0GgWwcM-_T/edit?usp=sharing&ouid=115249639562160932471&rtpof=true&sd=true), in the Website section **(required)**
- [ ] **The [submission form](https://forms.cloud.microsoft/r/ghpNKYPvgr)**, one per team, starting your description with your topic number and ending with your AI-use note **(required)**
- [ ] **Checked** against your topic's **Done when** list, on your local copy of the site
- [ ] **GitHub**, if relevant: a pull request against `develop` from a branch of your fork, or a public repository for AI-generated code
- [ ] **One Google Drive folder** for your team, inside the [Website/UI hand-in folder](https://drive.google.com/drive/folders/1n4fRuS5yiRNWO8Tfr6MA1l56i626spuh?usp=sharing), holding every supporting file, checked in a private browser window
- [ ] **Your video**, if you made one, linked on the form

## 1. Get your work ready

The form asks which outputs you're submitting; pick every one that applies.

| Output on the form | What it is | Where it goes |
|---|---|---|
| **GitHub Pull Request** | Code: a fix, a feature, or a proof of concept | A pull request against the `develop` branch of [ridescoredc-website](https://github.com/civictechdc/ridescoredc-website). A draft pull request is fine. See [Technical guides](/tracks/website-ui/making-changes). |
| **Plan, notes, or concept work** | Designs, plans, specs, notes, screenshots | Your team's folder inside the [Website/UI hand-in folder](https://drive.google.com/drive/folders/1n4fRuS5yiRNWO8Tfr6MA1l56i626spuh?usp=sharing). **Required** for every plan or design submission. |
| **Team video or demo** | A short recording of your work | A YouTube, Loom or similar video link. |

Many teams have more than one: a pull request plus a video, or a plan plus a folder of sketches.

### Your team's Drive folder

Every team puts all its supporting materials in **one Google Drive folder**, created inside the shared **[Website/UI hand-in folder](https://drive.google.com/drive/folders/1n4fRuS5yiRNWO8Tfr6MA1l56i626spuh?usp=sharing)**. Reviewers find every team's work in one place.

1. Open the [Website/UI hand-in folder](https://drive.google.com/drive/folders/1n4fRuS5yiRNWO8Tfr6MA1l56i626spuh?usp=sharing).
2. Click **New → New folder** and name it with your topic number and team name, for example `Topic 5 – Team Snap`. One folder per team.
3. Put everything in it: documents, exported Figma frames, photos of sketches, screenshots, and large files such as videos or `.pmtiles`.
4. **Add a README** (a short document or text file) that says what each file is, and lists any links that live outside the folder, such as your Figma file or GitHub repository.
5. **Check it works:** copy *your team's folder's* link (not the hand-in folder's), open a private or incognito browser window, and paste it. You should see the files without signing in. If you see "Request access", click **Share**, set **General access** to **Anyone with the link** as **Viewer**, and check again. Do the same for any Figma file you link to.
6. Paste your team's folder link into the form.

The form asks whether you did step 5. Reviewers can't see work behind a "Request access" page.

## 2. Say how you used AI

AI tools are encouraged on this track. With only two or three hours of building, a coding assistant, a design assistant or a chat assistant can be the difference between an idea and a working change. Use them for drafting code, exploring the codebase, writing tests, generating mock-ups, or structuring a plan.

You stay responsible for what you submit. Read every line of code before it goes in a pull request, run it, and check every factual claim in a document against the repository or a source.

Write a short attestation at the end of your description on the form, and copy it into your pull request description or your folder's README. A few sentences is enough:

```text
AI use. We used <<tool>> to <<what it did, for example: draft the legend
and explain the snapping code>>. We reviewed and tested all generated code
ourselves, and <<what you changed or rejected>>.
```

If you didn't use AI, write "No AI tools were used."

## 3. Present

Add your two slides to the shared demo deck by 4:00 (required) and present for two minutes to the reviewer panel from 4:15. The [Presenting](/presenting) page has the template and tips. Put your topic number and team names on the first slide.

## What happens next

Mentors use each topic's **Done when** list to give feedback at the 1:45 check-in, and a committee of reviewers gives feedback on your two-minute slide presentation. This is a collaborative hackathon, not a competition, so there is no ranking. Unfinished is fine: say what doesn't work yet, and we can plan what to build next. Connect with us at [Civic Tech DC](https://www.civictechdc.org) any time to keep the work going. Code that is ready may be merged into `develop`. Plans and designs give the next volunteers a head start.
