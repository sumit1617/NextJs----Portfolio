/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        night: "#060912",
        surface: "#0c111d",
        line: "#1a2233",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "76rem",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: 1 }, "50%": { opacity: 0 } },
        drift: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(30px,-20px) scale(1.08)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        drift: "drift 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
