# Ethan Short's Portfolio Website

A modern, responsive portfolio website built with React, Vite, HTML5, and CSS3.

## Features

- 🎨 Modern, responsive design
- ⚡ Built with Vite for fast development and builds
- ⚛️ React components for reusability
- 📱 Mobile-friendly navigation
- 🎯 Smooth scrolling between sections
- 📧 Contact form functionality
- 💼 Projects showcase
- 🎓 About section with skills

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations
- **JavaScript (ES6+)** - Programming language

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/emshort.net.git
cd emshort.net
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will open automatically at `http://localhost:3000`

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navigation.jsx & .css
│   │   ├── Hero.jsx & .css
│   │   ├── Projects.jsx & .css
│   │   ├── About.jsx & .css
│   │   └── Contact.jsx & .css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
└── package.json
```

## Customization

### Update Personal Information
- Edit hero title and subtitle in [src/components/Hero.jsx](src/components/Hero.jsx)
- Update About section in [src/components/About.jsx](src/components/About.jsx)
- Modify contact email in [src/components/Contact.jsx](src/components/Contact.jsx)

### Update Projects
Edit the `projectData` array in [src/components/Projects.jsx](src/components/Projects.jsx) with your projects.

### Modify Colors
Update the color scheme in CSS files:
- Primary color: `#3498db`
- Secondary color: `#2c3e50`
- Gradient: `#667eea` to `#764ba2`

## Deployment

### Deploy to GitHub Pages
1. Update `vite.config.js` with your repository name
2. Build the project: `npm run build`
3. Push the `dist/` folder to GitHub Pages branch

### Deploy to Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy on each push

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command to `npm run build`
3. Set publish directory to `dist`

## Contributing

Feel free to fork this project and customize it for your own portfolio!

## License

This project is open source and available under the MIT License.

## Contact

Email: your.email@example.com

---

Made with ❤️ by Ethan Short
