import { CssBaseline, ThemeProvider } from "@mui/material";
import type { PaletteMode } from "@mui/material/styles";
import { useMemo, useState } from "react";
import App from "./App.tsx";
import createAppTheme from "./theme/themeProvider.ts";

export default function Root() {
  const [mode, setMode] = useState<PaletteMode>("dark");
  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App
        mode={mode}
        onToggleMode={() =>
          setMode((currentMode) =>
            currentMode === "light" ? "dark" : "light"
          )
        }
      />
    </ThemeProvider>
  );
}
