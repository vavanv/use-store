import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./theme";
import { AppRoutes } from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
