module.exports = {
    mode: 'jit',

    purge: [
        './*/*.vue',
        './dist/*.html'
    ],

    theme: {
        colors: {
            'bodyColor': '#edf1f5',
            'white': '#FFFFFF',
            'black': '#000000',
            'yellow': '#fbbf24',
            'green': '#00A9A0',
            'lemon-green': '#36BD51',
            'blue': '#5F96E7',
            'gray': '#4B5563',
            'orange': '#FB9B6F'
        },

        extend: {
            transitionTimingFunction: {
                'menu-transition': 'cubic-bezier(.75,.01,.27,1)'
            }
        },

        container: {
            padding: {
                DEFAULT: '1rem'
            },

            center: true
        }
    }
}