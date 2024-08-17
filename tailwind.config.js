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
        'bg-light-cream': '#ffecd2', // Light cream

        // Card background colors
        'card-bg-f18805': '#f18805', // Orange

        // Highlight colors
        'highlight-rgb-255-0-0': '#ff0000', // Semi-transparent red
        'highlight-darkorange': 'darkorange', // Dark orange
        'highlight-rgb-255-166-71': '#ffaa47', // Light orange

        // Footer colors
        'footer-bg-black': 'black', // Black
        'footer-text-white': 'white', // White

        // Text colors
        'text-blue': 'blue', // Blue
        'text-rgb-166-176-255': '#a6b0ff', // Light blue

        // Block background colors
        'block-bg-rgb-255-99-118': '#ff6376', // Light pink
        'block-bg-rgb-255-165-105': '#ffa569', // Light orange
        'block-bg-rgb-255-197-110': '#ffc56e', // Light yellow

        // Navigation bar colors
        'nav-bg-rgb-45-42-42': '#2d2a2a', // Dark gray
        'biege': '#ae8252', // Beige

        // Contact section colors
        'contact-bg-rgb-255-226-153': '#ffe299', // Light yellow

        // Additional colors
        'bg-rgb-255-224-224': '#ffe0e0', // Light pink
        'shadow-black': '#1c1c1c', // Very dark gray
        'shadow-color-dark': '#1c1c1c' // Very dark gray
      },
    },
  },
  plugins: [],
};
