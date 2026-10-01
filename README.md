# Bulldozer Web

A JavaScript Next.js starter using the App Router.

## Getting started

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```text
public/             Static assets served from the site root
  images/           Images and backgrounds
  icons/            Static icons
src/
  app/              App Router routes and route-specific files
    favicon.ico     Application favicon
    globals.css     Global styles
    layout.js       Root layout and metadata
    page.js         Home page
  components/       Shared UI components
    ui/             Reusable buttons, inputs, and other primitives
    layout/         Shared headers, footers, and navigation
  hooks/            Reusable React hooks
  lib/              Shared utilities
  services/         API clients and external service integrations
  constants/        Shared application constants
jsconfig.json       @/* import alias for src/*
```

Add routes as folders inside `src/app`, each with a `page.js` file.
Add API endpoints as `src/app/api/<endpoint>/route.js` when needed.
Keep route-specific components beside their route; place reusable components in
`src/components`. Existing public assets remain at their current paths.

## Production

```sh
npm run build
npm start
```
