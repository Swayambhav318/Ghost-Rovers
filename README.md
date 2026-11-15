# Ghost Rovers 🚀
**Team Earthlings · NASA Space Apps Challenge**

> **Play it:** https://ghost-rovers.netlify.app — use the **For judges** tab on the home page to try every feature without signing in.
>
> This public copy has the Firebase settings and tester accounts removed. To run your own copy with sign-in and cloud saves, add your Firebase web app settings to `js/firebase.js` (see “Firebase setup” below). Without them, the game still works and saves progress on the device.

A story-driven space game for ages 10–14 about the machines NASA left on the Moon, Mars and Venus, in orbit around Earth and the Sun, and in deep space.

- 5 destinations, 25 machines, each telling its own story in short logs
- Wake-up missions: after reading a machine's story, make 3 Mission Control decisions (75 in total, each labelled **Real event** or **Training simulation**). Mars rovers add a 4th step: plan a rover drive around boulders and soft sand with delayed commands
- Messages: once a machine is awake, send it one of 6 questions. The message travels at the real speed of light (Moon about 1 second, Mars minutes, Voyager 1 about a day each way) and the reply is written from that machine's real facts
- Left behind: a “Then & now” card on every machine (what it was, what’s left of it today, what’s happening to it, and its legacy), a hardware graveyard page listing all 25 machines by status, and a final Mission Debrief where players vote on what should happen to the machines left behind
- Sky finder (phones only): point your phone at the sky to find where the Moon, Mars, Venus or the Voyager, Pioneer and New Horizons probes are right now
- Low-poly 3D destinations (Three.js): spin the Moon, Mars and Venus, see satellites and telescopes on their orbits around Earth, and the planets circling the Sun out to the heliopause. Machine pins follow the planets as they turn; hover a pin to preview it, click it to choose it. If 3D can't load, a flat map is shown instead
- NASA photos loaded live from the NASA Image and Video Library
- 25 machines, each with 5–6 story logs, 5 Tech Lab items and 3 “Did you know?” facts
- 260 quiz questions: every machine has its own 10-question bank (5 picked per quiz), and every answer is on that machine’s page. Each world quiz (10 questions) mixes questions from the machine quizzes with 1–2 world questions, and unlocks once all of that world’s machine quizzes are done
- On laptops, a low-poly 3D model of each machine sits beside its story. Click a Tech Lab item and the model turns to show where that part is
- A scrollable NASA photo viewer (up to 7 photos with captions) on each machine page and in the map side panel
- A Stardust economy: earn it, spend it on destinations and 50:50 lifelines, and climb 5 ranks. Destinations open in order: complete one (every machine woken, every quiz taken) before unlocking the next. Each quiz pays for its first try, for beating your best, and for up to 3 replays
- 16 badges plus a phone-only bonus badge (Sky Spotter), and confetti
- Firebase sign-in (email + password); Stardust and progress save to the cloud. Guests can still play, with progress saved on the device

## Run it in VS Code
1. Unzip the folder and open it in VS Code (**File → Open Folder…**).
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` → **Open with Live Server**.
4. Your browser opens the site at `http://127.0.0.1:5500`.

You need an internet connection for the photos and fonts. Everything else works offline.

## Firebase setup (one time)
In the [Firebase console](https://console.firebase.google.com/) → project **ghost-rovers**:
1. **Authentication → Sign-in method → Email/Password → Enable** (leave "Email link" off). No email verification is used.
2. **Authentication → Settings → Authorized domains:** `localhost` is there by default. Add `127.0.0.1` (Live Server) and your hosting domain, e.g. `username.github.io`.
3. **Realtime Database → Rules:** paste the contents of `database.rules.json` and click **Publish**. Each player can then only read and write their own save, and the Mission Debrief votes (at `votes/{uid}`) can be counted by signed-in players. This replaces the temporary test rules, which expire on 2026-12-14.

Saves live in the Realtime Database at `users/{uid}`, with `stardust`, `lifetime`, `email`, `progress` and `updatedAt`. The database address is set in `js/firebase.js` (`databaseURL`).

**Test account:** any email whose SHA-256 fingerprint is listed in `TESTER_HASHES` (in `js/data.js`) is topped up to 2,000 Stardust every time it signs in. It also gets **Tester tools** on the Badges page: +1000 Stardust, unlock all worlds, unlock all world quizzes, wake all machines, and reset. Firebase passwords must be at least 6 characters.

The site must be opened through Live Server or a hosted link (not by double-clicking `index.html`), because the Firebase code loads as a JavaScript module.

## Put it online for free
**GitHub Pages**
1. Create a new repository on GitHub and upload all the files (keep the folder structure).
2. Go to **Settings → Pages**, choose **Deploy from a branch**, then **main** / **root**, and save.
3. After a minute your site is live at `https://<username>.github.io/<repo-name>/`.

**Netlify:** drag the whole folder onto https://app.netlify.com/drop.

## Files
```
index.html        page shell (header, footer, script tags)
css/style.css     all styling
js/data.js        worlds, badges, ranks, Stardust settings, test account
js/machines/      one file per world: each machine's story, Tech Lab, facts, stats and quiz
js/world-quiz.js  the 1–2 extra world questions mixed into each world quiz
js/app.js         game logic: maps, story pages, quizzes, rewards, saving, sign-in
js/firebase.js    Firebase config, sign-in and cloud saves
js/scene3d.js     low-poly 3D planets and orbits (loads Three.js from a CDN)
js/model3d.js     low-poly 3D machine models; the MODELS list maps each Tech Lab item to a part
js/legacy.js      Then & now text, Left Behind page numbers and the Mission Debrief
js/missions.js    wake-up missions (decisions and rover-driving maps) and each machine's "best day" log
js/comms.js       light-time distances, message replies and sky positions
js/tech-more.js   longer “what is it used for?” text shown when a Tech Lab item is clicked
images/           site logo and favicon
database.rules.json  security rules to paste into Realtime Database → Rules
```

## Change things
- **Stardust amounts / world prices:** edit `ECONOMY` (including `QUIZ.machine` and `QUIZ.world`) and the `cost` values in `WORLDS` in `js/data.js`.
- **Add a question:** in `js/machines/<world>.js`, add a line to that machine's `quiz` list:
  `["Question?", ["Correct answer", "Wrong", "Wrong", "Wrong"], "Explanation"]`
  The correct answer always goes **first**; the game shuffles the answers. Make sure the answer is written somewhere on that machine's page (logs, Tech Lab, facts, science or stats).
- **Use your own photo:** put a picture in an `images/` folder and set `img: "images/name.jpg"` on that machine in `js/data.js`.
- **A photo looks wrong?** Change that machine's `q` (search words) or `must` (a word the photo title must contain).
- **Edit a wake-up mission:** in `js/missions.js`, each machine has a list of steps. Decisions have 3 choices `[text, true/false, why]`. Rover maps use `S` start, `F` target, `R` boulder, `s` soft sand, `.` open ground.
- **Sky finder:** needs HTTPS (Netlify is fine) plus motion and location permission on the phone. The location stays on the phone.
- **Challenge page (`#/challenge`):** edit the `CHALLENGE` list in `js/legacy.js` so each `need` is a line from the official challenge text.
- **Data & methods page (`#/data`):** sources and accuracy notes live in `DATA_SOURCES` and `DATA_SIMULATED` in `js/legacy.js`.
- **Listen:** machine pages and message replies have a Listen button that reads the text aloud with the browser’s built-in voice (Indian English when the device has it).
- **Judge tour:** entering judge mode starts a 6-stop guided tour (also from “Take the 3-minute tour” on the home page). Stops live in `TOUR` in `js/app.js`.
- **Judge mode:** the “For judges” tab on the right of the home page reloads the site as “Judge” with 2000 Stardust and every tester tool, no sign-in needed. Judges can also sign in or create an account while in judge mode: they keep every tester tool, and their judge progress saves separately at `users/{uid}/judge`. Click the tab again (“Exit judge mode”) to go back to the normal site, where that account is a normal player (tester tools only for the accounts in `TESTER_HASHES`).
- **Reset progress:** use the button in the footer.

## Sources
Mission facts come from NASA mission pages (science.nasa.gov, jpl.nasa.gov, nssdc.gsfc.nasa.gov). Photos come from images.nasa.gov. NASA imagery is generally not copyrighted. Check NASA's media guidelines before reusing it elsewhere.
