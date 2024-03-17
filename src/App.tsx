import { Client } from "appwrite";
import ColorModeProvider from "./context/ColorModeContext";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("65f65aa42c76d0464ce7");

function App() {
  return (
    <ColorModeProvider>
      <></>
    </ColorModeProvider>
  );
}

export default App;
