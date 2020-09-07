import { createMuiTheme } from 'material-ui/styles';
import tinycolor from "tinycolor2";

const primary = "#003e52";
const secondary = "#ff8400";

const lightenRate = 2;
const darkenRate = 5;

export default createMuiTheme({
  palette: {
    primary: {
        main: primary,
        light: tinycolor(primary)
          .lighten(lightenRate)
          .toHexString(),
        dark: tinycolor(primary)
          .darken(darkenRate)
          .toHexString()
      },
      secondary: {
        main: secondary,
        light: tinycolor(secondary)
          .lighten(lightenRate)
          .toHexString(),
        dark: tinycolor(secondary)
          .darken(darkenRate)
          .toHexString(),
        contrastText: "#FFFFFF"
      }
  }
});