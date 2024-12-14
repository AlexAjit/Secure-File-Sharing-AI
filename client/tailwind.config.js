// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Include your React files for Tailwind
//   ],
//   theme: {
//     extend: {
//       colors: {
//         darkGray: '#2F2F2F', // Charcoal for background
//         white: '#FFFFFF', // Text, icons
//         blue: '#007BFF', // "View All" buttons
//         lightBlue: '#00A9FF', // File owner icons
//       },
//     },
//   },
//   plugins: [],
// };

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'secure-primary': '#3B82F6',
//         'secure-secondary': '#10B981',
//         'secure-dark': '#1F2937',
//         'secure-light': '#F3F4F6'
//       },
//       boxShadow: {
//         'secure': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//       }
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms')
//   ],
// }

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkGray': '#333333',
        'charcoal': '#1A1A1A',
        'blue': '#007BFF',
        'lightBlue': '#66B0FF', // Assuming this is lighter shade of blue
      },
    },
  },
  plugins: [],
}