import { BrowserRouter } from "react-router-dom";
import ColorModeProvider from "./context/ColorModeContext";
import { Routes } from "./navigation";

function App() {
  return (
    <BrowserRouter>
      <ColorModeProvider>
        <Routes />
      </ColorModeProvider>
    </BrowserRouter>
  );
}

export default App;
