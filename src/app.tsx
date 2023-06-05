import { useEditor, Extensions } from "@tiptap/react";
import { Editor } from "@/components/editor";
import starter from "@tiptap/starter-kit";
import { Box } from "@chakra-ui/react";
import {
  TextIndentExtension,
  FontSizeExtension,
  YoutubeExtension,
  ImageExtension,
  VideoExtension,
} from "@chakra-editor/extensions";
import {
  YoutubeModal,
  ImageModal,
  VideoModal,
  Loader,
} from "@chakra-editor/components";

const extensions: Extensions = [
  TextIndentExtension,
  FontSizeExtension,
  YoutubeExtension,
  ImageExtension,
  VideoExtension,
  starter,
];

function App() {
  const editor = useEditor({
    extensions: extensions,
    autofocus: true,
    onUpdate({ editor }) {
      localStorage.setItem("content", editor.getHTML());
    },
  });

  if (!editor) return <Loader />;

  return (
    <Box>
      <Editor
        editor={editor}
        toolbarProps={{
          buttons: [
            "heading",
            "bold",
            "italic",
            "underline",
            "table",
            ["image", "youtube", "video", "undo", "redo", { ml: "auto" }],
          ],
          className: "toolbar",
        }}
        maxW="2xl"
        mx="auto"
        shadow="xl"
        rounded="xl"
      >
        <YoutubeModal editor={editor} />
        <ImageModal editor={editor} />
        <VideoModal editor={editor} />
      </Editor>
    </Box>
  );
}
{
}

export default App;
