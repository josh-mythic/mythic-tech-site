const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': "linear-gradient(to bottom, theme('colors.neutral.950 / 0%'), theme('colors.neutral.950 / 100%')), url('/images/noise.png')"
      },
      colors: {
        neutral: colors.neutral,
        primary: '#E7E0CD',
        primary_accent: '#434039',
        secondary: '#797469',
        secondary_accent: '#B8AC9C',
        tertiary: '#AD765D',
        quaternary: '#434039',
      },
      fontFamily: {
        sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans],
        heading: ['Oswald', 'sans-serif'],
      }
    }
  },
  daisyui: {
    themes: [
        'lofi',
        'cupcake',
        {
            mythic: {
                primary: '#E7E0CD',
                'primary-content': '#B8AC9C',
                secondary: '#434039',
                'secondary-content': '#797469',
                info: '#AD765D',
                'info-content': '#E7E0CD',
                header: '#E7E0CD',
                'header-content': '#E7E0CD',
                // add more custom colors as needed...
            }
        }
    ]
  },
  plugins: [require('daisyui')]
};