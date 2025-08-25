import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App.jsx";
import { BrowserRouter } from "react-router-dom";
import favicon from "@/assets/icons/cyber.png";

const link = document.createElement("link");
link.rel = "icon";
link.href = favicon;
document.head.appendChild(link);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
