/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		fontFamily: {
    			sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		keyframes: {
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
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	},
    	colors: {
    		transparent: 'transparent',
    		current: 'currentColor',
    		white: '#ffffff',
    		about: '#D1D1D1',
    		black: '#000000',
    		accent: '#65CED8',
    		background: '#14191C',
    		'main-buttons': '#21333B',
    		neutral: {
    			'0': '#FFFFFF',
    			'100': '#F8F9FC',
    			'200': '#F1F3F9',
    			'300': '#E1E6EF',
    			'700': '#3F444D',
    			'800': '#23272F',
    			'900': '#1B1F27',
    			'1000': '#0A0D14'
    		},
    		primary: {
    			'100': '#F0F5FF',
    			'700': '#2F6FED',
    			'800': '#1D5BD6',
    			'900': '#1E4EAE'
    		},
    		secondary: {
    			'100': '#F8F5FF',
    			'700': '#8B54F7',
    			'800': '#6D35DE',
    			'900': '#5221B5'
    		},
    		success: {
    			'100': '#EDFDF8',
    			'700': '#08875D',
    			'800': '#04724D',
    			'900': '#066042'
    		},
    		warning: {
    			'100': '#FFF8EB',
    			'700': '#B25E09',
    			'800': '#96530F',
    			'900': '#80460D'
    		},
    		danger: {
    			'100': '#FEF1F2',
    			'700': '#E02D3C',
    			'800': '#BA2532',
    			'900': '#981B25'
    		},
    		typography: {
    			'dark-primary': '#1D2433',
    			'dark-secondary': '#4A505C',
    			'dark-tertiary': '#6C707A',
    			'light-primary': '#FFFFFF',
    			'light-secondary': '#C2C2C4',
    			'light-tertiary': '#9D9EA1'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
