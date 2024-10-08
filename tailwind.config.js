/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                "spin-slow":
                    "spin 10s cubic-bezier(0.49, -0.53, 0.02, 1.56) infinite",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            colors: {
                primary: "hsl(var(--primary-background))",
                secondary: "hsl(var(--primary-foreground))",
                accent: "hsl(var(--accent-background))",
                destructive: "hsl(var(--destructive-background))",
            },
            fontSize: {
                xxs: ["10px", "14px"],
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
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
