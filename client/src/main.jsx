import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SearchProvider from "./context/SearchContext.jsx";
import { AuthProvider } from "./context/AuthContext"; // ✅ import the provider
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      {" "}
      {/* ✅ Wrap App in AuthProvider */}
      <SearchProvider>
        <App />
      </SearchProvider>
    </AuthProvider>
  </BrowserRouter>
);
