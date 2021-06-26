import { createMuiTheme } from "@material-ui/core";
import { primaryColor, secondaryColor } from "./colors";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor
        },
        secondary: {
            main: secondaryColor
        }
    }
})