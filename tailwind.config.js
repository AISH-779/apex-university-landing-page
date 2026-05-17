/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1437",
          light: "#162050",
        },
        gold: {
          DEFAULT: "#D4A843",
          light: "#F0C060",
        },
        cream: "#FAF7F2",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulseSlow 8s ease-in-out infinite",
        "blink": "blink 2s infinite",
        "scroll-down": "scrollDown 2s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease both",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        pulseSlow: { "0%,100%": { transform: "scale(1)", opacity: "0.6" }, "50%": { transform: "scale(1.1)", opacity: "1" } },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0.3" } },
        scrollDown: { "0%": { transform: "scaleY(0)", transformOrigin: "top" }, "50%": { transform: "scaleY(1)", transformOrigin: "top" }, "51%": { transform: "scaleY(1)", transformOrigin: "bottom" }, "100%": { transform: "scaleY(0)", transformOrigin: "bottom" } },
        fadeUp: { "from": { opacity: "0", transform: "translateY(24px)" }, "to": { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
};
