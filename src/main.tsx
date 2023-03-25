import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "@/app";
import React from "react";
import { EditorProvider } from "@chakra-editor/provider";
import "@/css/editor.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <EditorProvider>
        <App />
      </EditorProvider>
    </ChakraProvider>
  </React.StrictMode>
);
