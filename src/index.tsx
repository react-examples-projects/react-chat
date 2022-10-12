import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";

import "normalize.css";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colorScheme: "dark",
      }}
      withGlobalStyles
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);
