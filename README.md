# Project README

## Overview

This project is a robust web application framework, built with Atomic Design, Next.js with React, and Material-UI as the core design system. It integrates Husky with Conventional Commits and Standard Version for streamlined version control and release management, while leveraging Storybook for a component-driven development approach.

## Key Features

- Material-UI: Implements Material-UI as the primary design system, providing a comprehensive suite of UI tools for a cohesive and accessible interface.
- Atomic Design: Adopts Atomic Design methodology for systematic organization and reusability of UI components.
- Next.js + React: Combines the server-side rendering capabilities of Next.js with the powerful UI management of React.
- Husky & Conventional Commits: Enforces standard commit messages and automates the process of version control and changelog generation.
- Standard Version: Manages versioning and changelog documentation efficiently.
- Storybook: Offers a sandbox to build and test UI components in isolation, enhancing the development workflow.

## Scripts

- `dev`: Starts the development server.
- `build`: Creates an optimized production build.
- `start`: Starts a production server.
- `release:minor/major/patch`: Bumps version numbers accordingly with automatic CHANGELOG updates.
- `prepare`: Sets up Husky for commit hooks.
- `lint`: Runs ESLint for code quality checks.
- `format`: Formats code using Prettier.
- `storybook`: Launches Storybook for component development and testing.
- `build-storybook`: Builds a static version of Storybook.

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up Husky with `npm run prepare`.
4. Start the development server with `npm run dev`.
