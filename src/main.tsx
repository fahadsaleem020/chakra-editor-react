import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import Editor from "@/editor";
import React from "react";
import { EditorProvider } from "@chakra-editor/provider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <EditorProvider>
        <Editor />
      </EditorProvider>
    </ChakraProvider>
  </React.StrictMode>
);
