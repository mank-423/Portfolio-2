module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
      extend: {
          keyframes: {
              wave: {
                  '0%': { transform: 'rotate(0.0deg)' },
                  '15%': { transform: 'rotate(14.0deg)' },
                  '30%': { transform: 'rotate(-8.0deg)' },
                  '40%': { transform: 'rotate(14.0deg)' },
                  '50%': { transform: 'rotate(-4.0deg)' },
                  '60%': { transform: 'rotate(10.0deg)' },
                  '70%': { transform: 'rotate(0.0deg)' },
                  '100%': { transform: 'rotate(0.0deg)' },
              },
              slideInFromLeft: {
                '0%': { transform: 'translateX(-100%)', opacity: '0' },
                '100%': { transform: 'translateX(0)',  opacity: '1' },
              },
              slideInFromBottom: {
                '0%': { transform: 'translateY(100%)', opacity: '0' },
                'to': { transform: 'translateY(0)', opacity: '1' },
              },
          },
          animation: {
            wave: 'wave 1.5s infinite',
            slideInFromLeft: 'slideInFromLeft 1s ease-in-out',
            slideInFromLeftTwo: 'slideInFromLeft 1.5s ease-in-out',
            slideInFromLeftThree: 'slideInFromLeft 1.8s ease-in-out',
            slideInFromBottomOne: 'slideInFromBottom 1s ease-in-out',
            slideInFromBottomTwo: 'slideInFromBottom 0.8s ease-in-out',
          }
      }
  },
  variants: {
      extend: {},
  },
  plugins: [],
}