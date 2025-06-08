import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <SearchProvider>
    <AuthProvider>
        <App />
    </AuthProvider>
      </SearchProvider>
  </BrowserRouter>
);
