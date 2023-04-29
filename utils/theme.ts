import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0F1A4E",
        },
        secondary: {
            main: "#2C2C2C",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#070812"
        }

    },

});

export default theme;
