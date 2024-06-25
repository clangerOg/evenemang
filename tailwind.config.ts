import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        primary: colors.zinc,
        accent: colors.blue,
        border: colors.zinc[200],
        background: colors.white,
        foreground: colors.zinc[800],
        "card-bg": colors.zinc[50],
        muted: colors.zinc[300],
        "muted-foreground": colors.zinc[500],
        destructive: colors.red[500],
        "destructive-foreground": colors.red[300],
      },
    },
  },
  plugins: [],
} satisfies Config;
