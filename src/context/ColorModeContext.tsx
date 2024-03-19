import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface IColorModeContext {
  toggleColorMode: () => void;
}

const ColorModeContext = createContext<IColorModeContext | undefined>(undefined);

export default function ColorModeProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useColorMode() {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }

  return context;
}
