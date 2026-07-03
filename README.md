# Post Manager

Small React + Vite app to create, edit and delete posts stored in `localStorage`.

## Features

- Create / Read / Update / Delete posts
- Client-side validation for posts
- Pagination and search
- Dark mode (preference persists)
- 10 seed posts included

## Run locally

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Notes
- The app stores posts in `localStorage` under the `posts` key. Seed data is present on first load.
- Dark mode preference is persisted to `localStorage` (key `pm-dark`).

## Submission checklist
- [x] Running React app
- [x] At least 10 seed posts (see `src/utils/seedData.js`)
- [x] Form validation (see `src/utils/validators.js`)
- [x] Pagination and search
- [x] README with instructions

Replace the screenshots/recording in this README before final submission if required.

