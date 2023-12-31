/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            "2xl": { max: "1600px" },
            xl: { max: "1365px" },
            lg: { max: "1023px" },
            md: { max: "767px" },
            sm: { max: "479px" },
        },
        extend: {},
    },
    plugins: [
        plugin(({ addBase, theme }) => {
            addBase({
                "*, *:before, *:after": {
                    "-webkitTapHighlightColor": "transparent",
                },
                "#root": {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                },
                body: {
                    fontFamily: '"Inter", sans-serif',
                    minWidth: "360px",
                    lineHeight: "normal",
                },
                main: {
                    flex: "1 1 auto",
                },
                ".container": {
                    maxWidth: "1764px",
                    margin: "0 auto",
                    padding: "0 10px",
                },
                ".scroll-bar": { overflowY: "auto" },
                ".scroll-bar::-webkit-scrollbar": {
                    backgroundColor: "rgba(208,213,221,0.18)",
                    width: "3px",
                },
                ".scroll-bar::-webkit-scrollbar-button": {
                    display: "none",
                },
                ".scroll-bar::-webkit-scrollbar-thumb": {
                    backgroundColor: "#FFCD36",
                },
                ".scroll-bar::-webkit-scrollbar-track": {
                    backgroundColor: "rgba(208,213,221,0.18)",
                },
                ".scroll-bar::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#FFCD36",
                },
                ".scrollbar-hide::-webkit-scrollbar": {
                    display: "none",
                },
                "@media (max-width: 1365px)": {
                    ".scroll-bar::-webkit-scrollbar": {
                        width: "2px",
                    },
                },
            });
        }),
    ],
};
