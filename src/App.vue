<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";

const file = ref<string | null>(null);
const text = ref("");

const toolbar = {
  openFile: {
    title: "打开文件",
    icon: "iconfont icon-dakaiwenjian",
    action: async () => {
      file.value = await open({
        multiple: false,
        directory: false,
        filters: [
          {
            name: "Markdown",
            extensions: ["md", "markdown"],
          },
        ],
      });

      text.value = await invoke("read_file", { path: file.value });
    },
  },
};

const leftToolbar =
  "openFile save | undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code emoji";
const rightToolbar = "preview toc sync-scroll";

const save = async (text: string) => {
  await invoke("save", {
    mdFile: {
      path: file.value,
      content: text,
    },
  });
};
</script>
<template>
  <v-md-editor
    v-model="text"
    height="100vh"
    :include-level="[1, 2, 3]"
    :default-fullscreen="true"
    :toolbar="toolbar"
    :right-toolbar="rightToolbar"
    :left-toolbar="leftToolbar"
    @save="save"
  ></v-md-editor>
</template>
