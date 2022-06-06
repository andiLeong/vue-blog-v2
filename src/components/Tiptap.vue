<template>
  <div v-if="editor" class="flex flex-1 flex-wrap mt-2 mb-6">
    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        bold
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        italic
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        strike
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
      >
        code
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().unsetAllMarks().run()"
      >
        clear marks
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().clearNodes().run()"
      >
        clear nodes
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
      >
        paragraph
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        h1
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        h2
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        h3
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
      >
        h4
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
      >
        h5
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
      >
        h6
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        bullet list
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        ordered list
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
      >
        code block
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        blockquote
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().setHorizontalRule().run()"
      >
        horizontal rule
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().setHardBreak().run()"
      >
        hard break
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().undo().run()"
      >
        undo
      </button>
    </div>

    <div class="mr-1 mt-2">
      <button
        type="button"
        class="go-back-btn"
        @click="editor.chain().focus().redo().run()"
      >
        redo
      </button>
    </div>
  </div>

  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

export default {
  components: {
    EditorContent,
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },

  watch: {
    modelValue(value) {
      // HTML
      const isSame = this.editor.getHTML() === value;

      // JSON
      // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return;
      }

      this.editor.commands.setContent(value, false);
    },
  },

  data() {
    return {
      editor: null,
    };
  },

  mounted() {
    this.editor = new Editor({
      // element: document.querySelector('.element'),
      extensions: [StarterKit],

      editorProps: {
        attributes: {
          class:
            'h-96 overflow-scroll dark:bg-white focus:ring-1 focus:border-sky-500 focus:ring-sky-500 px-4 py-2 border border-gray-300 rounded border-2 shawdow prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
        },
      },

      content: this.modelValue,
      onUpdate: () => {

          let html = this.editor.getHTML();
          if (html === '<p></p>') html = ''

        // HTML
        this.$emit('update:modelValue', html);

        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      },
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style>
/* .ProseMirror:focus {
  outline: none;
}
.ProseMirror {        
  min-height: 100px;
  max-height: 100px;
  overflow: scroll;
} */
</style>
