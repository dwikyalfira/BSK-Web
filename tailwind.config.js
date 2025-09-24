/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'Inter',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'Roboto',
  				'sans-serif'
  			],
  			display: [
  				'Cal Sans',
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'Fira Code',
  				'Consolas',
  				'monospace'
  			]
  		},
      fontSize: {
        // Material Design 3 Type Scale
        'display-lg': ['57px', '64px'],
        'display-md': ['45px', '52px'],
        'display-sm': ['36px', '44px'],
        'headline-lg': ['32px', '40px'],
        'headline-md': ['28px', '36px'],
        'headline-sm': ['24px', '32px'],
        'title-lg': ['22px', '28px'],
        'title-md': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'title-sm': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'body-lg': ['16px', '24px'],
        'body-md': ['14px', '20px'],
        'body-sm': ['12px', '16px'],
        'label-lg': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'label-md': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'label-sm': ['11px', { lineHeight: '16px', fontWeight: '500' }],
      },
  		spacing: {
  			'18': '4.5rem',
  			'72': '18rem',
  			'84': '21rem',
  			'96': '24rem',
  			'128': '32rem'
  		},
  		borderRadius: {
        'none': '0',
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '28px',
        'full': '9999px',
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
        primary: 'hsl(var(--primary))',
        'on-primary': 'hsl(var(--on-primary))',
        'primary-container': 'hsl(var(--primary-container))',
        'on-primary-container': 'hsl(var(--on-primary-container))',
        secondary: 'hsl(var(--secondary))',
        'on-secondary': 'hsl(var(--on-secondary))',
        'secondary-container': 'hsl(var(--secondary-container))',
        'on-secondary-container': 'hsl(var(--on-secondary-container))',
        tertiary: 'hsl(var(--tertiary))',
        'on-tertiary': 'hsl(var(--on-tertiary))',
        'tertiary-container': 'hsl(var(--tertiary-container))',
        'on-tertiary-container': 'hsl(var(--on-tertiary-container))',
        error: 'hsl(var(--error))',
        'on-error': 'hsl(var(--on-error))',
        'error-container': 'hsl(var(--error-container))',
        'on-error-container': 'hsl(var(--on-error-container))',
        'surface-dim': 'hsl(var(--surface-dim))',
        surface: 'hsl(var(--surface))',
        'surface-bright': 'hsl(var(--surface-bright))',
        'surface-container-lowest': 'hsl(var(--surface-container-lowest))',
        'surface-container-low': 'hsl(var(--surface-container-low))',
        'surface-container': 'hsl(var(--surface-container))',
        'surface-container-high': 'hsl(var(--surface-container-high))',
        'surface-container-highest': 'hsl(var(--surface-container-highest))',
        'on-surface': 'hsl(var(--on-surface))',
        'on-surface-variant': 'hsl(var(--on-surface-variant))',
        outline: 'hsl(var(--outline))',
        'outline-variant': 'hsl(var(--outline-variant))',
        // Shadcn UI compatibility
  			muted: {
  				DEFAULT: 'hsl(var(--surface-container))',
  				foreground: 'hsl(var(--on-surface-variant))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--on-primary))'
  			},
  			border: 'hsl(var(--outline))',
  			ring: 'hsl(var(--primary))',
  			card: {
  				DEFAULT: 'hsl(var(--surface-container-lowest))',
  				foreground: 'hsl(var(--on-surface))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--surface-container))',
  				foreground: 'hsl(var(--on-surface))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary-container))',
  				foreground: 'hsl(var(--on-secondary-container))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--secondary-container))',
  				foreground: 'hsl(var(--on-secondary-container))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--error-container))',
  				foreground: 'hsl(var(--on-error-container))'
  			},
  			input: 'hsl(var(--surface-container-high))',
  		},
  		boxShadow: {
        // Material Design 3 Elevation
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.3), 0 1px 3px 1px rgb(0 0 0 / 0.15)',
        'md': '0 1px 2px 0 rgb(0 0 0 / 0.3), 0 2px 6px 2px rgb(0 0 0 / 0.15)',
        'lg': '0 2px 4px -1px rgb(0 0 0 / 0.2), 0 4px 5px 0 rgb(0 0 0 / 0.14), 0 1px 10px 0 rgb(0 0 0 / 0.12)',
        'xl': '0 4px 8px -2px rgb(0 0 0 / 0.2), 0 6px 12px 0 rgb(0 0 0 / 0.14), 0 2px 20px 0 rgb(0 0 0 / 0.12)',
        '2xl': '0 8px 16px -4px rgb(0 0 0 / 0.2), 0 12px 24px 0 rgb(0 0 0 / 0.14), 0 4px 40px 0 rgb(0 0 0 / 0.12)',
  		},
  		keyframes: {
  			'fade-in': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'slide-up': {
  				'0%': {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
  			'scale-in': {
  				'0%': {
  					transform: 'scale(0.95)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: '1'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'fade-in': 'fade-in 0.6s ease-out',
  			'slide-up': 'slide-up 0.4s ease-out',
  			'scale-in': 'scale-in 0.3s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")]
}