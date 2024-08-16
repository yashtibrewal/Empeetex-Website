/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main background color
        'bg-light-cream': 'rgb(255, 236, 194)', // Light cream

        // Card background colors
        'card-bg-255-236-194': 'rgb(255, 236, 194)', // Light cream
        'card-bg-f18805': '#f18805', // Orange

        // Card text colors
        'card-text-black': 'black', // Black
        'card-text-white': 'white', // White

        // Highlight colors
        'highlight-rgb-255-0-0': 'rgba(255,0,0,0.6)', // Semi-transparent red
        'highlight-orange': 'orange', // Orange
        'highlight-darkorange': 'darkorange', // Dark orange
        'highlight-rgb-255-166-71': 'rgb(255, 166, 71)', // Light orange

        // Footer colors
        'footer-bg-black': 'black', // Black
        'footer-text-white': 'white', // White

        // Text colors
        'text-blue': 'blue', // Blue
        'text-rgb-166-176-255': 'rgb(166, 176, 255)', // Light blue

        // Block background colors
        'block-bg-rgb-255-99-118': 'rgb(255,99,118)', // Light pink
        'block-bg-rgb-255-165-105': 'rgb(255,165,105)', // Light orange
        'block-bg-rgb-255-197-110': 'rgb(255, 197, 110)', // Light yellow

        // Navigation bar colors
        'nav-bg-rgb-45-42-42': 'rgb(45, 42, 42)', // Dark gray
        'nav-bg-rgb-174-130-82': 'rgb(174, 130, 82)', // Beige

        // Contact section colors
        'contact-bg-rgb-255-226-153': 'rgb(255, 226, 153)', // Light yellow
        'contact-text-blue': 'blue', // Blue

        // Additional colors
        'bg-rgb-255-224-224': 'rgb(255, 224, 224)', // Light pink
        'card-border-orange': 'orange', // Orange
        'shadow-black': '#1C1C1C', // Very dark gray
        'shadow-color': 'black', // Black
        'shadow-color-dark': '#1C1C1C' // Very dark gray
      },
    },
  },
  plugins: [],
};
