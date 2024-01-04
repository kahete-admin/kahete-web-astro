/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors:{
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#ffffff',
			'about': '#D1D1D1',
			'black':'#000000',
			'accent':'#65CED8',
			'background':'#14191C',
			'main-buttons':'#21333B',
			'neutral':{
				0: '#FFFFFF',
				100: '#F8F9FC',
				200: '#F1F3F9',
				300: '#E1E6EF',
				700: '#3F444D',
				800: '#23272F',
				900: '#1B1F27',
				1000: '#0A0D14',
			},
			'primary':{
				100: '#F0F5FF',				
				700: '#2F6FED',
				800: '#1D5BD6',
				900: '#1E4EAE',
			},
			'secondary':{
				100: '#F8F5FF',				
				700: '#8B54F7',
				800: '#6D35DE',
				900: '#5221B5',
			},
			'success':{
				100: '#EDFDF8',				
				700: '#08875D',
				800: '#04724D',
				900: '#066042',
			},
			'warning':{
				100: '#FFF8EB',				
				700: '#B25E09',
				800: '#96530F',
				900: '#80460D',
			},
			'danger':{
				100: '#FEF1F2',				
				700: '#E02D3C',
				800: '#BA2532',
				900: '#981B25',
			},
			'typography':{
				'dark-primary': '#1D2433',				
				'dark-secondary': '#4A505C',
				'dark-tertiary': '#6C707A',
				'light-primary': '#FFFFFF',				
				'light-secondary': '#C2C2C4',
				'light-tertiary': '#9D9EA1',
			},
		}
	},
	plugins: [],
}
