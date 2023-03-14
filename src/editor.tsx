import { ImageExtension, VideoExtension, YoutubeExtension, FontSizeExtension, TextIndentExtension } from "@chakra-editor/extensions";
import { Toolbar } from "@chakra-editor/toolbar";
import {
  YoutubeModal,
  ImageModal,
  VideoModal,
  Loader,
  Watch
} from "@chakra-editor/components";
import {
  useEditor,
  Extensions,
  EditorContent,
  generateHTML
} from "@tiptap/react";
import starter from "@tiptap/starter-kit";
import { Box } from "@chakra-ui/react";
import parse from "html-react-parser"

const extensions: Extensions = [starter, TextIndentExtension, FontSizeExtension, YoutubeExtension, ImageExtension, VideoExtension];

function Editor() {
  const editor = useEditor({
    extensions: extensions,
    autofocus: true,
    onUpdate({ editor }) {
      localStorage.setItem("content", editor.getHTML())
    },
  })

  if (!editor) return <Loader />;
  return (
    <Box>
      <Toolbar
        editor={editor}
        buttons={[
          "bold",
          "italic",
          "underline",
          "heading",
          "highlightcolor",
          "fontcolor",
          "table",
          ["image", "youtube", "video", { p: "2", ml: "auto" }],
        ]}
        gap="2"
        p="2"
        alignItems={"center"}
        shadow="lg"
      />
      <EditorContent editor={editor} />
      <ImageModal editor={editor} />
      <YoutubeModal editor={editor} />
      <VideoModal editor={editor} />
      <Watch extensions={extensions}>
        {({ type, content, attrs }) => {
          switch (type) {
            case "paragraph":
              return <p>{parse(generateHTML(content, extensions))}</p>;
            case "image":
              return <img {...attrs} />
            case "video":
              return <video controls {...attrs} />
          }
        }}
      </Watch>
    </Box>
  );
}

export default Editor;
