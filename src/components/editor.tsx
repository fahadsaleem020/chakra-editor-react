import { EditorComponent } from "@chakra-editor/types";
import { Toolbar } from "@chakra-editor/toolbar";
import { EditorContent } from "@tiptap/react";
import { Box } from "@chakra-ui/react";

const Editor: EditorComponent = ({
  editor,
  toolbarProps,
  editorContent,
  children,
  ...editorProps
}) => {
  return (
    <Box {...editorProps}>
      <Toolbar editor={editor} {...toolbarProps} />
      <Box {...editorContent}>
        <EditorContent editor={editor} />
      </Box>
      {children}
    </Box>
  );
};

export { Editor };
