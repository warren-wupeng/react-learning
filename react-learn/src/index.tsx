import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Alert } from "./Alert";

const root = createRoot(document.getElementById("root") as HTMLElement);

function App() {
  return (
    <div className="App">
      <h1>Hello, React 18!</h1>
      <Alert
        type="information"
        heading="Success"
        closeable
        onClose={() => console.log("close")}
      >
        Everything is working fine.
      </Alert>
    </div>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
