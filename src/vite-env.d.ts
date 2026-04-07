/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@kangc/v-md-editor";
declare module "prismjs";
declare module "@kangc/v-md-editor/lib/theme/vuepress.js";
declare module "*.css";
declare module "@kangc/v-md-editor/lib/plugins/katex/npm";
declare module "@kangc/v-md-editor/lib/plugins/mermaid/npm";
declare module "@kangc/v-md-editor/lib/plugins/emoji/index";
declare module "@kangc/v-md-editor/lib/plugins/todo-list/index";
declare module "@kangc/v-md-editor/lib/plugins/highlight-lines/index";
declare module "@kangc/v-md-editor/lib/plugins/copy-code/index";
declare module "@kangc/v-md-editor/lib/plugins/align";
