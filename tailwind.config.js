/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            "2xl": { max: "1700px" },
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
                "@media (max-width: 1365px)": {
                    body: {
                        minWidth: "1365px",
                    },
                },
                "@media (max-width: 479px)": {
                    body: {
                        minWidth: "360px",
                    },
                },
            });
        }),
    ],
};
