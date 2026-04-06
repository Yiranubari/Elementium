# Elementium

This repository contains the front-end implementation of the Elementium landing page. It was built to match a provided Figma design, focusing on clean code, responsive layouts, and small interactive details.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Docker & Nginx (for production serving)

## Features

- Completely responsive styling that adapts to mobile, tablet, and desktop screens.
- Reusable UI components to keep the codebase clean and maintainable.
- Subtle entrance and hover animations implemented via CSS and Tailwind utility classes.
- Containerized production environment using Docker and Nginx, with support for Single Page Application (SPA) routing.

## Local Development

To run the project locally on your machine:

1. Make sure you have Node.js installed.
2. Install the project dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the localhost URL provided in your terminal.

## Running with Docker

The application includes a production-ready Docker setup using a multi-stage build. It compiles the React application and serves the static files using Nginx.

To run the app using Docker Compose:

1. Guarantee that the Docker daemon is running on your machine.
2. Build and start the container in the background:
   ```bash
   docker compose up --build -d
   ```
3. The application will be available in your browser at `http://localhost:8080`.
4. When you are finished, you can stop the container by running:
   ```bash
   docker compose down
   ```

## Project Structure

The source code is primarily located in the `src` directory:

- `components/`: Contains the main page sections like the Hero, About, Services, and Testimonial sections.
- `components/ui/`: Contains smaller, reusable pieces like the image avatars, read-more links, and decorative elements.
- `index.css`: Holds the global styles, Tailwind imports, and custom animation keyframes.
