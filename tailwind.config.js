/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            colors: {
                primary: "hsl(var(--primary-background))",
                secondary: "hsl(var(--primary-foreground))",
                accent: "hsl(var(--accent-background))",
                destructive: "hsl(var(--destructive-background))",
            },
        },
    },
    plugins: [
        daisyui,
        function ({ addUtilities }) {
            const newUtilities = {
                ".scrollbar-hide": {
                    /* IE and Edge */
                    "-ms-overflow-style": "none",
                    /* Firefox */
                    "scrollbar-width": "none",
                    /* Safari and Chrome */
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                },
            };
            addUtilities(newUtilities);
        },
    ],
};
