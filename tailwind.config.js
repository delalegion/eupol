/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#CAE84A',
        'secondary': '#489BE8',
        'tertiary': '#EA2C23',
        'dark': {
          '50': '#16181C',
          '100': '#212429',
          '150': '#495057',
          '200': '#ACB5BD',
          '250': '#DDE2E5',
          '300': '#F8F9FA'
        }
      },
      fontSize: {
        'h1': ['var(--fs-h1)', {
          lineHeight: "var(--lh-h1)",
          letterSpacing: "var(--ls-5)"
        }],
        'h2': ['var(--fs-h2)', {
          lineHeight: "var(--lh-h2)",
          letterSpacing: "var(--ls-4)"
        }],
        'h3': ['var(--fs-h3)', {
          lineHeight: "var(--lh-h3)",
          letterSpacing: "var(--ls-3)"
        }],
        'h4': ['var(--fs-h4)', {
          lineHeight: "var(--lh-h4)",
          letterSpacing: "var(--ls-2)"
        }],
        'h5': ['var(--fs-h5)', {
          lineHeight: "var(--lh-h5)",
          letterSpacing: "var(--ls-2)"
        }],
        'p1': ['var(--fs-body1)', {
          lineHeight: "var(--lh-body1)",
          letterSpacing: "var(--ls-2)"
        }],
        'p2': ['var(--fs-body2)', {
          lineHeight: "var(--lh-body2)",
          letterSpacing: "var(--ls-2)"
        }],
        'button': ['var(--fs-button)', {
          lineHeight: "var(--lh-button)",
          letterSpacing: "var(--ls-2)"
        }],
        'caption': ['var(--fs-caption)', {
          lineHeight: "var(--lh-caption)",
          letterSpacing: "var(--ls-2)"
        }],
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

