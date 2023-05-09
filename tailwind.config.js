/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "slide-left": {
                    "0%": {
                        opacity: 0,
                        right: "2%",
                    },
                    "50%": {
                        opacity: 0.5,
                        right: 0,
                    },
                    "100%": {
                        opacity: 1,
                        right: 0,
                    },
                },
                "slide-right": {
                    "0%": {
                        opacity: 0,
                        left: "2%",
                    },
                    "50%": {
                        opacity: 0.5,
                        left: 0,
                    },
                    "100%": {
                        opacity: 1,
                        left: 0,
                    },
                },
                "slide-up": {
                    "0%": {
                        bottom: -10,
                    },
                    "100%": {
                        bottom: 0,
                    },
                },
            },
            animation: {
                "slide-left": "slide-left 1s ease forwards",
                "slide-right": "slide-right ease forwards 1s",
                "slide-up": "slide-up ease forwards 1s",
            },
            fontFamily: {
                satoshi: ["Satoshi", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                primary: "#224539",
            },
        },
    },
    plugins: [],
};
