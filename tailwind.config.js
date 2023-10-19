/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/views/**/*.pug'],
  theme: {
    extend: {
      colors:{
      'teal': '#238189',
      'moonstone': '#3FA8B3',
      'cream': '#E8F3EE',
      'rosa': '#FD9879',
      'wheat': '#F5DFBD'
    },
    },
  },
  plugins: [],
}

