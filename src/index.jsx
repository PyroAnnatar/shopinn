import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalProvider } from "./context/GlobalState";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
);
