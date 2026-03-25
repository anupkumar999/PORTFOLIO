# Portfolio Repository - How It Works

This repository contains a personal portfolio website built with modern web technologies. Below is an overview of its architecture, tools, and how everything is connected.

## 🛠 Tech Stack
- **React 18**: The core frontend library used for building the user interface.
- **Tailwind CSS**: A utility-first CSS framework used for rapid and responsive styling.
- **React Icons**: Used for easily embedding popular icons (like GitHub, LinkedIn, etc.) into the components.
- **React Scroll**: Used for smooth scrolling navigation between the different sections of the single-page application.

## 📂 Project Structure
The project is bootstrapped with `create-react-app` and organized as follows:

```
portfolio/
├── public/                 # Static assets (index.html, favicon, etc.)
├── src/                    # Source code for the React app
│   ├── assets/             # Images, PDFs, and other static media
│   ├── components/         # Reusable React components
│   │   ├── NavBar.jsx      # Top navigation bar with smooth scroll links
│   │   ├── Home.jsx        # Landing section with live AI status badge
│   │   ├── About.jsx       # Professional summary with GenAI focus
│   │   ├── Portfolio.jsx   # Projects showcasing GenAI & ML systems
│   │   ├── Experience.jsx  # Career history (JPMC, Pluto7, etc.)
│   │   ├── Certifications.jsx # GCP ML Professional & other credentials
│   │   ├── Contact.jsx     # Netlify-integrated contact form
│   │   └── SocialLinks.jsx # Fixed sidebar with LinkedIn/GitHub links
│   ├── App.js              # Main component that mounts all the sections
│   ├── index.js            # Entry point for React
│   └── index.css           # Global styles and Tailwind directives
├── package.json            # Project dependencies and scripts
└── tailwind.config.js      # Configuration file for Tailwind CSS themes and plugins
```

## ⚙️ How It Works (Component Flow)
1. **Initialization**: When the app starts up, `src/index.js` renders the main `App.js` component into the DOM.
2. **Layout Assembly**: The `App.js` acts as the master layout. It sequentially renders all the components listed in the `src/components/` directory to create a long, scrolling single-page website.
3. **Navigation & Smooth Scrolling**: The `NavBar.jsx` and `SocialLinks.jsx` components stay fixed on the screen. `NavBar.jsx` utilizes `react-scroll` to smoothly jump the user to different component sections (e.g., clicking "Experience" scrolls down to the `Experience.jsx` component).
4. **Styling**: All components are styled using Tailwind CSS utility classes directly within the `.jsx` files. Tailwind scans these files during the build process and generates the necessary CSS in `index.css`.

## 🚀 Running the App Locally
If you want to run the project locally on your machine, follow these steps:

1. Open a terminal and navigate to the project folder:
   ```bash
   cd portfolio
   ```
2. Install dependencies (only needed the first time):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The site will automatically open in your default browser at `http://localhost:3000`.