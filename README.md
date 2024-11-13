# My Shop App

Welcome to **My Shop App**, a simple shopping application built with React, TypeScript, Vite, and styled-components.

## 📋 Prerequisites

Make sure you have the following tools installed on your computer:

- Node.js (>= 14.x.x)
- npm

## 🚀 Getting Started

To run the project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd my-shop-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Rename .env.example to .env

4. **Run the Development Server**

   Start the app in development mode:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

## 📜 Available Scripts

### 🛠️ Run Build

To create a production build:

```bash
npm run build
```

### 👀 Preview Production Build

To preview the production build:

```bash
npm run preview
```

### 🧹 Run Linter

To lint the codebase using ESLint:

```bash
npm run lint
```

### 📖 Run Storybook

To start Storybook for component development:

```bash
npm run storybook
```

- Storybook will be available at `http://localhost:6006`.

To build Storybook:

```bash
npm run build-storybook
```

### 🧪 Run Tests

To execute the tests using Jest:

```bash
npm run test
```

To generate a test report, set `collectCoverage` to `true` in `jest.config.cjs`.

To run tests in watch mode:

```bash
npm run test:watch
```

### ✨ Run Prettier

To format code using Prettier:

```bash
npm run prettier
```

## Project Structure

The following is an overview of the project structure:

- **src/** - Contains all the source code for the app.
  - **components/** - Reusable components used throughout the app.
  - **pages/** - Page components representing different routes in the app.
  - **styles/** - Global styles and theme configurations, including **theme**.
  - **services/** - Contains services for handling API calls and business logic.
  - **hooks/** - Custom React hooks used throughout the app.
  - **mocks/** - Files with mocks for tests.
  - **context/** - Context APIs for managing global state in the app.
- **storybook/** - Configuration for Storybook.

## Design System

The design system includes the following components to ensure a consistent look and feel throughout the application:

- **Typography**: Defines font styles, sizes, and weights for consistent text appearance.
- **Base Button**: A reusable button component that serves as the foundation for all buttons.
- **Sidebar**: A sidebar component used for navigation.
- **Header**: A header component for displaying  navigation elements and logo
- Card: A reusable card component used by eg. ProductCard

Besides base comopnents, I have layer of components built out of these basic building blocks. Structure of components is inspired by Atomic Design Pattern, but I lacked comonents for all layers \:D. \


Most of these components are styled via styled-components. They are used as presentational compone

## State Management

For simplicity, this project uses Context API for state management. Specifically, `ProductContext` and `CartContext` are used to manage product and cart state respectively. This approach is suitable for smaller applications where the state requirements are not overly complex.

For more complex projects, I would recommend using the Redux pattern combined with Sagas for advanced side effects handling, or even better, using **React Query** for managing server state, which is efficient and powerful for managing asynchronous data and caching while persisting client state within context API or redux. 

## Considerations
- **Only one endpoint**: When visiting product detail page without navigating from product list page, all products are fetched.  
- **Bloated components folder**: base components are in the same folder as more complex ones. Consider separating components by layers
- **Pagination**: Product list could be paginated since in real life we'd have more products.
- **State management**: Having context API as a main state management tool can be naive as project complexity can grow really big really fast.
- **I18n**: Internationalization should exist

## Technologies Used

- **React**: Frontend library for building user interfaces
- **TypeScript**: Type checking for JavaScript.
- **Vite**: Lightning-fast build tool for modern web development.
- **Styled Components**: CSS-in-JS for styling components.
- **Storybook**: Tool for UI development.
- **Jest & Testing Library**: Unit and integration testing.
- **ESLint & Prettier**: Linting and code formatting.
- **Tests and stories in same folder with component**: I tried both. Maybe after this project I appreciate more keeping them in a separate folder. Maybe not. I don't know, looks kinda bloated.
- **Testing services**: Could've done that with msw. 

