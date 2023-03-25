import {
  ImageExtension,
  VideoExtension,
  YoutubeExtension,
  FontSizeExtension,
  TextIndentExtension,
} from "@chakra-editor/extensions";
import {
  YoutubeModal,
  ImageModal,
  VideoModal,
  Loader,
} from "@chakra-editor/components";
import { useEditor, Extensions, EditorContent } from "@tiptap/react";
import starter from "@tiptap/starter-kit";
import { Box } from "@chakra-ui/react";
import { Editor } from "@/editor";

const extensions: Extensions = [
  starter,
  TextIndentExtension,
  FontSizeExtension,
  YoutubeExtension,
  ImageExtension,
  VideoExtension,
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
            "bold",
            "italic",
            "underline",
            "heading",
            "table",
            ["image", "youtube", "video", "undo", "redo", { ml: "auto" }],
          ],
        }}
        maxW="2xl"
        mx="auto"
        shadow="xl"
        rounded="xl"
      >
        <ImageModal editor={editor} />
        <YoutubeModal editor={editor} />
        <VideoModal editor={editor} />
      </Editor>

      <EditorContent editor={editor} />
    </Box>
  );
}
{
}

export default App;

{
  /* <Box className="ProseMirror">
    <Watch extensions={extensions}>
      {({ type, content, attrs }) => {
        switch (type) {
          case "heading":
            return (
              <Heading as={`h${attrs?.level}` as any}>
                {parse(generateHTML(content, extensions))}
              </Heading>
            );
          case "paragraph":
            return <p>{parse(generateHTML(content, extensions))}</p>;
          case "image":
            return <img {...attrs} />;
        }
      }}
    </Watch>
  </Box> */
}
