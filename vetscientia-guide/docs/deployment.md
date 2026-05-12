# Development Setup

This repo contains a Vite/React frontend and an Express/MongoDB backend managed with npm workspaces.

[Repo URL](https://github.com/CPSECapstone/VS-Frontend){ target="_blank" rel="noopener" }

## Prerequisites

- Node.js and npm installed. Use a current Node LTS version if you do not have a project-specific version from the team.
- Git installed.
- Access to the project environment variables from Confluence.
- Access to a MongoDB database for backend development.

## Install Dependencies

From the repo root, install all workspace dependencies:

```sh
npm install
```

This installs dependencies for the root package, `frontend`, and `backend` workspaces.

## Environment Variables

Create environment files locally. Do not commit them.

### Frontend

Create `frontend/.env`.

The frontend reads the backend URL from:

```sh
VITE_APP_BASE_URL=http://localhost:4000
```

If this variable is omitted, the frontend code falls back to `http://localhost:4000`.

### Backend

Create `backend/.env`.

At minimum, local backend development needs values for:

```sh
MONGODB_URI=your_mongodb_connection_string
SECRET_KEY=your_local_jwt_or_session_secret
PORT=4000
SERVER_URL=http://localhost:4000
FRONTEND_URL=http://localhost:3000
```

Some routes also use email, Stripe, AWS S3, and CloudFront settings. Get the complete required values from the team secrets source before testing those flows.

## Run Locally

Start the backend from the repo root:

```sh
npm run start:backend
```

The backend runs on `http://localhost:4000` by default. API docs are available at `http://localhost:4000/api-docs` when the server is running.

In a second terminal, start the frontend from the repo root:

```sh
npm run start:frontend
```

The frontend runs on `http://localhost:3000`.

## Useful Commands

Run frontend checks:

```sh
npm run lint:frontend
npm run test:frontend
```

Run backend checks:

```sh
npm run lint:backend
npm run test:backend
```

Run all checks:

```sh
npm run lint:all
npm run test:all
```

Format both workspaces:

```sh
npm run format:all
```

Build the frontend:

```sh
npm -w frontend run build
```

## Troubleshooting

- If the frontend cannot reach the API, confirm `VITE_APP_BASE_URL` points to the backend and that the backend is running.
- If the backend starts but cannot serve data, confirm `MONGODB_URI` is valid and reachable.
- If auth or session-related routes fail, confirm `SECRET_KEY` is set.
- If email, billing, file upload, simulation asset, or CloudFront routes fail, confirm the related service credentials are present in `backend/.env`.
