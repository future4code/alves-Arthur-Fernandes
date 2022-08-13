import { createTheme } from '@mui/material/styles';
import { neutralColor, neutralSecondaryColor, secondaryColor} from './colors';


export const themeIn = createTheme({
  palette: {
    primary: {
        main: secondaryColor,
      contrastText: "#373737",
    },
    text:{
        primary:"#000000",
        secondary:"#6F6F6F",
    },
    secondary: {
        main:neutralSecondaryColor,
        contrastText: "#4088CB",
    },
    typography:{
        FontFace:"IBM Plex Sans"
    }

  },
});
// export const themeOut = createTheme({
//     palette: {
//       primary: {
        // main:neutralSecondaryColor,
        // contrastText: "#4088CB",
//       },
//       text:{
//         primary:"#000000",
//         secondary:"#6F6F6F"
//       },
//       secondary: {
//         main: neutralColor,
//         contrastText: secondaryColor,
//       },
  
//     },
//   });