/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: 'tw-',
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
      },
      fontSize: {
        'sm': ['var(--font-size-sm)', 'var(--font-size-body-2-line-height)'],
        'xs': ['var(--font-size-xs)', 'var(--font-size-subtext-line-height)'],
        'header-1': ['var(--font-size-header-1)', { lineHeight: 'var(--font-size-header-1-line-height)', fontWeight: '700' }],
        'header-2': ['var(--font-size-header-2)', { lineHeight: 'var(--font-size-header-2-line-height)', fontWeight: '700' }],
        'header-3': ['var(--font-size-header-3)', { lineHeight: 'var(--font-size-header-3-line-height)', fontWeight: '700' }],
        'subhead-1': ['var(--font-size-subhead-1)', 'var(--font-size-subhead-1-line-height)'],
        'subhead-2': ['var(--font-size-subhead-2)', 'var(--font-size-subhead-2-line-height)'],
        'body-1': ['var(--font-size-body-1)', 'var(--font-size-body-1-line-height)'],
        'body-2': ['var(--font-size-body-2)', 'var(--font-size-body-2-line-height)'],
        'subtext': ['var(--font-size-subtext)', 'var(--font-size-subtext-line-height)'],
        'ui-14': '14px',
        'ui-16': '16px',
        'ui-18': '18px',
        'ui-24': '24px',
      },
      colors: {
        ul: {
          primary: {
            DEFAULT: 'hsl(var(--color-ul-primary-blue) / <alpha-value>)',
            blue: 'hsl(var(--color-ul-primary-blue) / <alpha-value>)',
            'blue-darker': 'hsl(var(--color-ul-primary-blue-darker) / <alpha-value>)',
            red: 'hsl(var(--color-ul-primary-red) / <alpha-value>)',
          },
          secondary: {
            blue: 'hsl(var(--color-ul-secondary-blue) / <alpha-value>)',
          },
          gray: {
            100: 'hsl(var(--color-ul-gray-100) / <alpha-value>)',
            200: 'hsl(var(--color-ul-gray-200) / <alpha-value>)',
            300: 'hsl(var(--color-ul-gray-300) / <alpha-value>)',
            400: 'hsl(var(--color-ul-gray-400) / <alpha-value>)',
            450: 'hsl(var(--color-ul-gray-450) / <alpha-value>)',
            500: 'hsl(var(--color-ul-gray-500) / <alpha-value>)',
          },
          placeholder: 'hsl(var(--color-ul-placeholder) / <alpha-value>)',
          'ethica-green': 'hsl(var(--color-ul-ethica-green) / <alpha-value>)',
          'text-black': 'hsl(var(--color-ul-primary-black) / <alpha-value>)',
          green: 'hsl(var(--color-ul-green) / <alpha-value>)',
          'gray-blue': 'hsl(var(--color-ul-gray-blue) / <alpha-value>)',
          'dark-blue': 'hsl(var(--color-ul-dark-blue) / <alpha-value>)',
          'light-blue': 'hsl(var(--color-ul-light-blue) / <alpha-value>)',
          orange: 'hsl(var(--color-ul-orange) / <alpha-value>)',
          'red-darker': 'hsl(var(--color-ul-primary-red-darker) / <alpha-value>)',
          divider: 'hsl(var(--color-ul-divider) / <alpha-value>)',
          'divider-light': 'hsl(var(--color-ul-divider-light) / <alpha-value>)',
        },
        mirr: {
          'gray-100': 'hsl(var(--color-mirr-gray-100) / <alpha-value>)',
          'gray-200': 'hsl(var(--color-mirr-gray-200) / <alpha-value>)',
          'gray-300': 'hsl(var(--color-mirr-gray-300) / <alpha-value>)',
          'gray-400': 'hsl(var(--color-mirr-gray-400) / <alpha-value>)',
          'gray-500': 'hsl(var(--color-mirr-gray-500) / <alpha-value>)',
          'gray-600': 'hsl(var(--color-mirr-gray-600) / <alpha-value>)',
          'agreement-reached': 'hsl(var(--color-mirr-agreement-reached) / <alpha-value>)',
          'in-progress': 'hsl(var(--color-mirr-in-progress) / <alpha-value>)',
          'conditional-agreement': 'hsl(var(--color-mirr-conditional-agreement) / <alpha-value>)',
          'not-reviewed': 'hsl(var(--color-mirr-not-reviewed) / <alpha-value>)',
          'awaiting-sign-off': 'hsl(var(--color-mirr-awaiting-sign-off) / <alpha-value>)',
          link: 'hsl(var(--color-mirr-link) / <alpha-value>)',
        },
        hub: {
          primary: 'hsl(var(--color-hub-primary) / <alpha-value>)',
          secondary: 'hsl(var(--color-hub-secondary) / <alpha-value>)',
          tertiary: 'hsl(var(--color-hub-tertiary) / <alpha-value>)',
          info: 'hsl(var(--color-hub-info) / <alpha-value>)',
          warning: 'hsl(var(--color-hub-warning) / <alpha-value>)',
          danger: 'hsl(var(--color-hub-danger) / <alpha-value>)',
          accent: 'hsl(var(--color-hub-accent) / <alpha-value>)',
        },
        'ul-primary-black': 'hsl(var(--color-ul-primary-black) / <alpha-value>)',
        'brand-bg-active': '#E8F1FC',
        'brand-icon-inactive': '#4D4F59',
        'brand-border-sidebar': '#EDEDF2',
        'brand-input-bg': 'rgb(237, 237, 242)',
        'brand-input-icon': '#707178',
        blue: {
          DEFAULT: 'hsl(var(--color-ul-primary-blue) / <alpha-value>)',
          darker: 'hsl(var(--color-ul-primary-blue-darker) / <alpha-value>)',
        },
        red: {
          DEFAULT: 'hsl(var(--color-ul-primary-red) / <alpha-value>)',
        },
        black: {
          DEFAULT: 'hsl(var(--color-ul-primary-black) / <alpha-value>)',
          secondary: 'hsl(var(--color-ul-secondary-black) / <alpha-value>)',
        },
        gray: {
          100: 'hsl(var(--color-ul-gray-100) / <alpha-value>)',
          200: 'hsl(var(--color-ul-gray-200) / <alpha-value>)',
          300: 'hsl(var(--color-ul-gray-300) / <alpha-value>)',
          400: 'hsl(var(--color-ul-gray-400) / <alpha-value>)',
        },
        cat: {
          '0': '# placeholder_cat_0',
          '1': '# placeholder_cat_1',
        },
        seq: {
          '0': '# placeholder_seq_0',
          '1': '# placeholder_seq_1',
        },
        textColor: 'hsl(var(--color-ul-primary-black) / <alpha-value>)',
        placeholderColor: 'hsl(var(--color-ul-placeholder) / <alpha-value>)',
      },
      zIndex: {
        'modal-backdrop': 'var(--z-index-modal-backdrop)',
        tooltip: 'var(--z-index-tooltip)',
        'mirr-tenure-page': 'var(--z-index-mirr-tenure-page)',
      },
      borderColor: theme => ({
        ...theme('colors'),
        DEFAULT: 'hsl(var(--color-ul-gray-300) / <alpha-value>)',
      }),
      height: {
        '16': '4rem',
        'sidebar-icon': '24px',
        'logo': '40px',
      },
      width: {
        'logo': '20px',
        'sidebar': '120px',
      },
      spacing: {
        'sidebar': '120px',
        'header': '4rem',
      }
    },
  },
  plugins: [],
} 