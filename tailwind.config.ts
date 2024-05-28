import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			screens: {
				'2xl': { max: '1535px' },
				// => @media (max-width: 1535px) { ... }

				xl: { max: '1279px' },
				// => @media (max-width: 1279px) { ... }

				lg: { max: '1023px' },
				// => @media (max-width: 1023px) { ... }

				md: { max: '768px' },
				// => @media (max-width: 767px) { ... }

				sm: { max: '639px' },
				// => @media (max-width: 639px) { ... }
			},
			colors: {
				colorGreen: '#73FF4A',
				colorGreenBD: '#52AE32',
				colorGreenLight: '#E9FCE2',
				colorBlackBD: '#2C2B2A',
				colorVK: '#0077FF',
			},
			fontFamily: {
				inter: ['var(--font-inter)'],
				stolzl: ['var(--font-stolzl)'],
			},
		},
	},
	plugins: [],
}
export default config
