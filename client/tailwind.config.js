/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    500: '#8B5CF6',
                    600: '#7C3AED',
                    700: '#6D28D9',
                },
                secondary: {
                    500: '#3B82F6',
                    600: '#2563EB',
                },
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)',
                'gradient-secondary': 'linear-gradient(135deg, #14B8A6 0%, #06B6D4 100%)',
            },
        },
    },
    plugins: [],
}
