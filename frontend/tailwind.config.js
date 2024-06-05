/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/lib/esm/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'ui-sans-serif'],
            },
            fontSize: {
                sm: '0.8rem',
                base: '1rem',
                xl: '1.25rem',
                midxl: '1.35rem',
                '2xl': '1.563rem',
                '3xl': '1.953rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem',
            },
            fontWeight: {
                thin: '100',
                hairline: '100',
                extralight: '200',
                light: '300',
                normal: '400',
                medium: '500',
                semimedium: '550',
                semibold: '600',
                bold: '700',
                extrabold: '800',
                'extra-bold': '800',
                black: '900',
            },
            colors: {
                v2: {
                    ltblue: '#38B6FF',
                    drkblue: '#0B1997',
                },
                primary: {
                    1: '#000000',
                    2: '#FFFFFF',
                    3: '#0B1997',
                    4: '#00528E',
                    5: '#FFFFFF',
                },
                accent: {
                    1: '#51565A',
                    2: '#022860',
                    3: '#F0F0F0',
                    background: '#E2EFF2',
                },
            },
            boxShadow: {
                'inset-lg': 'inset 0 2px 8px regba(0, 0, 0, 0.25)',
            },
        },
    },
    plugins: [require('flowbite/plugin')],
}
