# Elevated Users App

This is a Next.js application designed to display user information fetched from the Elevate API.

## Features

- Displays a list of all users with names and avatars (`/users`). Includes a toggle to switch to the Carousel view.
- Displays a detailed profile page for each user (`/users/[id]`).
- Includes loading states (`loading.tsx`) and error handling (`error.tsx`, `not-found.tsx`) for relevant routes.
- Uses TailwindCSS for styling.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

1.  **Node.js:** This project requires Node.js to run JavaScript on the server and manage packages. We recommend using the latest LTS (Long-Term Support) version.

    - **How to check if installed:** Open your terminal or command prompt and run `node -v`. If it returns a version number (e.g., `v18.18.0`), Node.js is installed.
    - **How to install:** Download the installer from the official [Node.js website](https://nodejs.org/). Installation includes `npm` (Node Package Manager) by default.

2.  **Yarn (Recommended) or npm:** This project uses a package manager to install dependencies. The project seems to be set up with `yarn`, but `npm` (included with Node.js) can also work.
    - **How to check if Yarn installed:** Run `yarn -v`.
    - **How to install Yarn:** If you have Node.js/npm, run `npm install --global yarn` in your terminal.

## Setup Instructions

1.  **Clone the Repository:**
    If you haven't already, get the project code onto your local machine. Replace `<repository-url>` with the actual URL if cloning from a git repository.

    ```bash
    git clone <repository-url>
    cd elevated-users-app
    ```

    (If you already have the code locally, just navigate to the project directory: `cd elevated-users-app`)

2.  **Install Dependencies:**
    Open your terminal in the project's root directory (`elevated-users-app`) and run the installation command using your preferred package manager:

    Using Yarn (recommended):

    ```bash
    yarn install
    ```

    _Or_ using npm:

    ```bash
    npm install
    ```

    This will download and install all the necessary libraries defined in `package.json`.

3.  **Set Up Environment Variables:**
    This application requires credentials to access the Elevate API. These are stored in an environment file that is _not_ committed to version control.

    - Create a new file named `.env.local` in the root of the project directory (`elevated-users-app`).
    - Add the following lines to the `.env.local` file, **replacing the placeholder values (`<...>` ) with your actual Elevate API credentials:**

      ```env
      # Base URL for the Elevate API
      NEXT_PUBLIC_API_BASE_URL=https://interviews-accounts.elevateapp.com/api/ui

      # Authentication credentials (SERVER-SIDE ONLY)
      # These are used by internal API routes, DO NOT prefix with NEXT_PUBLIC_
      API_AUTH_USER_ID=<Your_User_ID>
      API_AUTH_TOKEN=<Your_Auth_Token>
      ```

    - **Important:** The `API_AUTH_USER_ID` and `API_AUTH_TOKEN` are sensitive and used only on the server-side (via an internal API route). The `NEXT_PUBLIC_API_BASE_URL` is safe to expose to the browser.

## Running the Application

1.  **Start the Development Server:**
    Once dependencies are installed and the environment variables are set up, run the following command in your terminal from the project root:

    Using Yarn:

    ```bash
    yarn dev
    ```

    _Or_ using npm:

    ```bash
    npm run dev
    ```

2.  **Access the App:**
    The development server will start, usually on `http://localhost:3000`. Open this URL in your web browser.
    - You should be automatically redirected from the root (`/`) to the user list page (`/users`).
    - You can navigate to `/users/carousel` to see the carousel view.
    - Clicking on a user in the list will take you to their profile page (e.g., `/users/1`).

The application uses Fast Refresh, so changes you make to the code should automatically update in the browser without a full page reload.

## Project Structure

- `app/`: Contains the core application routes using the Next.js App Router.
  - `layout.tsx`: The root layout containing the `<html>`, `<body>` tags and the global sidebar.
  - `page.tsx`: The root page (currently redirects to `/users`).
  - `globals.css`: Global CSS styles.
  - `users/`: Contains pages related to users.
    - `layout.tsx`: Shared layout for `/users` and `/users/carousel`, containing the List/Carousel view toggle.
    - `page.tsx`: The user list page (`/users`).
    - `loading.tsx`: Loading UI for the user list route.
    - `error.tsx`: Error UI for the user list route.
    - `[id]/`: Dynamic route for individual user profiles.
      - `page.tsx`: The user profile page (`/users/:id`).
      - `loading.tsx`, `error.tsx`, `not-found.tsx`: Specific states for the profile route.
    - `carousel/`: Route for the user carousel view.
      - `page.tsx`: The carousel page (`/users/carousel`).
      - `loading.tsx`, `error.tsx`: Specific states for the carousel route.
- `components/`: Contains reusable React components (Sidebar, Avatar, List Item, Profile Card, View Toggle, etc.).
- `lib/`: Contains utility functions, constants, or libraries.
  - `api.ts`: Functions for interacting with the external Elevate API, including consolidated user fetching.
  - `utils.ts`: General utility functions (e.g., `getFullName`).
- `public/`: Static assets served directly (images, fonts, etc.).
- `.env.local`: Local environment variables (ignored by Git).
- `next.config.ts`: Next.js configuration file.
- `tailwind.config.ts`: TailwindCSS configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `package.json`: Project metadata and dependencies.
- `yarn.lock` / `package-lock.json`: Lock file for dependency versions.

## Notes

- **API Credentials:** The Elevate API credentials used in `.env.local` are required for the application to fetch data. Ensure they are correctly set up.
