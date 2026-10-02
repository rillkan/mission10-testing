# Mission 10 — CI/CD Starter

A small Express app with Jest tests already written. Your job today
isn't this app — it's building the GitHub Actions pipeline around it.

## Setup

```bash
npm install
npm test
```

You should see 2 passing tests. This is exactly what your CI pipeline
will run automatically on every push.

## What's already here

- `index.js` — two routes: `GET /` and `GET /health`
- `index.test.js` — two Jest tests covering both routes
- `package.json` — `npm test` runs Jest, `npm start` runs the server

## What you'll build during the mission

- `.github/workflows/ci.yml` — runs `npm install` + `npm test` on every
  push and pull request
- A second job that deploys to Render, but only on `main` and only if
  tests pass

## Before you start

1. Create a new, empty repository on GitHub (don't initialize it with a
   README — you already have one).
2. Push this starter there:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
3. Follow the slides from there.
