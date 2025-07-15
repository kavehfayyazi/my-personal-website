# my-personal-website

A lightning-fast, playful portfolio built with Vite, React, & Tailwind.

> **Full-Stack Demo:**
> Features a REST API in [self-destructing-note-api](https://github.com/kavehfayyazi/self-destructing-note-api) for one-time notes.

<p align="center"> 
    <img src="https://img.shields.io/badge/react-v19.1.0-brightgreen.svg" alt="Vite badge" /> 
    <img src="https://img.shields.io/badge/vite-v6.3.5-brightgreen" alt="Vite badge" /> 
    <img src="https://img.shields.io/badge/tailwindcss-v4.1.10-brightgreen" alt="Tailwind CSS badge" /> 
    <img src="https://img.shields.io/badge/react--router-v7.6.3-brightgreen" alt="React Router badge" /> 
</p>

## Features

- **Client-Side Routing**

  Smooth, nested navigation by React Router.

- **Utility-First Styling**

  Tailwind CSS for convenient UI development.

- **Component Animations**

  Performant animations with React Motion library.

## Tech Stack

- React **v19.1.0**

- Vite **v6.3.5**

- Tailwind CSS **v4.1.10**

- React Router **v7.6.3**

## Usage

### Prerequisites
- Node.js version 16 or higher.
- MongoDB connection URI

### Installation


1. Clone the repository:
    
    ```bash
    git clone https://github.com/kavehfayyazi/my-personal-website.git
    cd my-personal-website
    ```
    
2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up environment variable by creating a .env file in the root directory and add:

    ```bash
    VITE_API_URL=your-api-url
    ```

4. Run the development server:
    ```bash
    npm run dev
    # or npm start
    ```

The API will be available at ``` http://localhost:5000/ ```

## Project Structure
```
my-personal-website/
├── public/               # static assets
├── src/                  # React components
│   ├── assets/           # images and fonts
│   ├── components/       # reusable UI components
│   ├── layouts/          # layout wrappers
│   ├── pages/            # Route-level views
│   ├── App.jsx           # root component with router
│   ├── index.css         # global styles and Tailwind directives
│   └── main.jsx          # initializes App into the DOM
├── index.html            # HTML template
├── package.json          # project metadata
├── package-lock.json     # dependency tree
├── vite.config.js        # Vite build/dev server configurations
└── eslint.config.js      # ESLint rules and plugin settings
```

## Contributing

1. **Fork** this repository.

2. **Clone** your fork locally:

    ```bash
    git clone https://github.com/<your-username>/my-personal-website.git
    cd my-personal-website
    ```

3. **Create** a new branch:

    ```bash
    git checkout -b feature/your-feature
    ```

4. **Commit** your changes:

    ```bash
    git commit -m "Add feature-name."
    ```

5. **Push** to the branch

    ```bash
    git push origin feature/feature-name
    ```

6. **Open** a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

- Creator: kavehfayyazi
- Email: [kfayyazi@andrew.cmu.edu](mailto:kfayyazi@andrew.cmu.edu)
- Github: [@kavehfayyazi](https://github.com/kavehfayyazi)