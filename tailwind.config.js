const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        enable: false,
        content: ["./src/**/*.svelte", "./src/**/*.html", './content/**/*.md'],
        options: {
            whitelist: ['html', 'body'],
        },
    },
    darkMode: false,
    theme: {
        colors: {
            gray: colors.coolGray,
        },
        extend: {
            colors: {
                brand: {
                    black: '#000000',
                    white: '#FFFFFF',
                    green: {
                        DEFAULT: '#084945',
                        dark: '#07403C',
                    },
                    greenBright: '#6EEFE6',
                    greenPastel: '#D1FAF7',
                    greenLight: '#EDFDFC',
                    yellow: '#E9A135',
                    yellowBright: '#EFBB6E',
                    yellowPastel: '#FAEAD1',
                    yellowLight: '#FDF6ED',
                    funcRed: '#E93559',
                    funcLime: '#5FE935',
                    funcPurple: '#2B0849'
                },
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["active"],
        },
    },
    plugins: [
        require('tailwindcss/colors')
    ]
}