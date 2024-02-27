/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        // ## Activate the custom colors as needed
        // 'custom-50': '#d0ebf4',
        'custom-100': '#3771C8', //this is light blue
        // 'custom-200': '#90bccc',
        // 'custom-300': '#60b3d7',
        // 'custom-400': '#2fade2', //checking from online picker
        'custom-500': '#304E7B', //this is sky blue
        // 'custom-600': '#1780a6',
        // 'custom-700': '#0096c5', //this is dark blue
        // 'custom-800': '#0f4b6f',
        // 'custom-900': '#08293d',
      },
    },
	},
	plugins: [],
}
