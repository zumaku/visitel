import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                'poppins': ['Poppins-Regular', 'sans-serif'],
                'telkombatik': ['TelkomselBatikSans-Bold', 'serif']
            },
            colors: {
                primary: {
                    100: '#FDEAE9',
                    200: '#FCE0DE',
                    300: '#F9BEBB',
                    DEFAULT: '#EC2D23',
                    400: '#D42920',
                    500: '#BD241C',
                    600: '#B1221A',
                    700: '#8E1B15',
                    800: '#6A1410',
                    900: '#53100C',
                },
                secondary: {
                    100: '#F1F1F1',
                    200: '#E9E9EA',
                    300: '#D2D2D3',
                    DEFAULT: '#6E6F71',
                    400: '#636466',
                    500: '#58595A',
                    600: '#535355',
                    700: '#424344',
                    800: '#313233',
                    900: '#272728',
                },
                tertiary: {
                    100: '#EDEEF0',
                    200: '#E4E6E8',
                    300: '#C8CBCF',
                    DEFAULT: '#4E5764',
                    400: '#464E5A',
                    500: '#3E4650',
                    600: '#3B414B',
                    700: '#2F343C',
                    800: '#23272D',
                    900: '#1B1E23',
                },
                disable: '#E5E5E5'
            },
            backgroundImage: {
                'hero-login': "url('/img/hero_logo.png')",
            }
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            sl: "930px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },

    plugins: [forms],
};
