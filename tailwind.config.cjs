const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontSize: {
			'xs': '.75rem',
			'sm': '.875rem',
			'tiny': '.875rem',
			'base': '1rem',
			'lg': '1.125rem',
			'xl': '1.2rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.2rem',
			'5xl': '2.55rem',
			'6xl': '3rem',
		},
		extend: {
			fontFamily: {
				'poppins': ['Poppins', 'sans-serif']
			},
			colors: {
				'purple': '#474FCE',
				'light-purple': '#E6E8F9',
				'light-blue': '#F0FAFE',
				'blue': '#A9E5FE',
				'light-grey': '#F6F6F6',
				'grey': '#DFDBE1',
			},
			width: {
				'card-half': 'calc( 50% - 1rem )',
				'mobile-menu': 'calc( 100% - 8rem )'
			},
			height: {
				'1/2-5': 'calc(50% - 5rem)',
				'mobile': 'calc(100vh - 5rem)',
				'dots-line': 'calc(100% + 6rem)',
				'120': '30rem',
			},
			maxHeight: {
				'1.25': '125%',
			},
			dropShadow: {
				'card': '0 0 5px rgba(6, 6, 6, 0.09)',
			},
			translate: {
				'150': '150%',
			},
			screens: {
				'xs': 'min-width: 400px',
			},
			inset: {
				'2/5': '40%',
			}
		}
	},

	plugins: []
};
module.exports = {
	important: true,
}
module.exports = config;
