import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import r2wc from "@r2wc/react-to-web-component";
import "./index.css";
import App from "./App.tsx";

// const wcChecklist = r2wc(App, { props: { items: "json" } });
// customElements.define("r2w-app", wcChecklist);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
