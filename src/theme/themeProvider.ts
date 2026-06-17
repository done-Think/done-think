import { createTheme, type PaletteMode } from "@mui/material/styles";

const lightPalette = {
  primary: {
    main: "#33fca7",
    dark: "#078c66",
    contrastText: "#050805",
  },
  secondary: {
    main: "#050805",
    contrastText: "#ffffff",
  },
  background: {
    default: "#ffffff",
    paper: "#f7faf8",
  },
  text: {
    primary: "#050805",
    secondary: "#4f635b",
  },
};

const darkPalette = {
  primary: {
    main: "#33fca7",
    dark: "#5dffc0",
    contrastText: "#050805",
  },
  secondary: {
    main: "#f5fff9",
    contrastText: "#050805",
  },
  background: {
    default: "#050805",
    paper: "#101813",
  },
  text: {
    primary: "#f5fff9",
    secondary: "#b9c9c2",
  },
};

const createAppTheme = (mode: PaletteMode) => {
  const palette = mode === "dark" ? darkPalette : lightPalette;

  return createTheme({
  palette: {
    mode,
    ...palette,
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 800,
    },
    h3: {
      fontWeight: 800,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: palette.background.default,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor:
            mode === "dark" ? "rgba(255, 255, 255, 0.04)" : "#ffffff",
          borderRadius: 8,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.primary.main,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.primary.dark,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: palette.primary.dark,
          },
          "& .MuiSvgIcon-root": {
            color: palette.primary.dark,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: palette.text.secondary,
          "&.Mui-focused": {
            color: palette.primary.dark,
          },
        },
      },
    },
  },
  });
};

export default createAppTheme;
