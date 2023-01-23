import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "../src/app/index";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StyledEngineProvider injectFirst>
    <App />
  </StyledEngineProvider>
);
