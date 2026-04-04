# My Portfolio Site

This folder contains a simple static portfolio website. I updated the project so it's easy to run locally and publish to GitHub Pages.

If you have no development experience, follow the short guide below.

## What was changed

- `src/components/header.html` and `src/components/footer.html` are now HTML fragments injected into the page.
- `src/scripts/script.js` loads those fragments and renders projects from `src/data/projects.json` safely.
- `build.js` copies `src` into `dist` (works on Windows and other OSes).
- `package.json` scripts: `npm run build` creates `dist`; `npm run deploy` publishes `dist` with `gh-pages`.
- GitHub Actions workflow in `.github/workflows/pages.yml` builds and publishes `dist` on pushes to `main`.

## Run locally (two options)

Option A — Easiest (no installs):

1. Open the `src` folder in File Explorer.
2. Double-click `index.html` to open it in your browser.

Note: Some browsers prevent local file fetches. If the projects list is empty, use Option B.

Option B — Recommended (runs a local server):

1. Install Node.js from https://nodejs.org/ (choose LTS).
2. Open PowerShell and change to this project folder, e.g.:

```powershell
cd "C:\Users\hyk68ey\OneDrive - Colruyt Group NV\Documents\Data Engineer\Portfolio\my-portfolio-site"
```

3. Install dependencies:

```powershell
npm install
```

4. Start the local server (this opens the site in a browser):

```powershell
npm run start
```

5. To build files for publishing:

```powershell
npm run build
```

This creates a `dist` folder ready for deployment.

## Deploy to GitHub Pages

1. Push this repository to GitHub (default branch should be `main`).
2. The workflow `.github/workflows/pages.yml` will automatically build and publish `dist` on pushes to `main`.

Manual deploy from your computer:

```powershell
npm run deploy
```

## Personalize the site

- Edit `src/components/header.html` and `src/components/footer.html` to add your name and social links.
- Edit `src/data/projects.json` to add your projects (fields: `title`, `description`, `technologies`, `liveDemo`, `repository`).
- Update `src/styles/main.css` for look-and-feel changes.

If you'd like, I can replace the placeholders with your real details, add screenshots for projects, and improve styling for mobile. Tell me which and I'll update the files here.