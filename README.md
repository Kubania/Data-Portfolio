# Mercy Kubania: portfolio site

Plain HTML, CSS and JS. No build step, no dependencies.

## Before you publish
1. Put your CV at `assets/Mercy-Kubania-CV.pdf` (create the `assets` folder). The "Download CV" button points there.
2. Confirm your team is fine with the numbers and anonymized descriptions on the page.
3. Open `index.html` in a browser and click through it once.

## Add a personal project
In `index.html`, find the `PERSONAL PROJECTS` comment. Remove `hidden` from that `<section>` and from the nav link marked `data-personal`, then copy the example card and fill it in. Set `data-cats` to one or more of: `analytics`, `ml`, `data-engineering`, `ai`.

## Host it free, with your own domain
**Option A: Cloudflare Pages (recommended)**
1. Put this folder in a GitHub repository.
2. In Cloudflare, go to Workers & Pages, create a Pages project and connect the repo.
3. Build command: leave empty. Output directory: `/`.
4. Add your custom domain under the project's Custom domains tab.

**Option B: GitHub Pages**
1. Push the folder to a GitHub repository.
2. Repo Settings, then Pages, then deploy from the `main` branch, root folder.
3. Add your custom domain in the same Pages settings.

Buy the domain from any registrar. Cloudflare Registrar sells at cost.
