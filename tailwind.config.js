/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                'other': {'min': '340px', 'max': '1260px'}
            },
            colors: {
                darkbg : '#1e293b',
                blue: {
                    850: '#7dd3fc'
                }
            }
        },
    },
    plugns: []
}