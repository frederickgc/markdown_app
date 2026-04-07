import { createApp } from "vue";
import App from "./App.vue";

import VueMarkdownEditor from "@kangc/v-md-editor";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/vuepress.js";
import createKatexPlugin from "@kangc/v-md-editor/lib/plugins/katex/npm";
import createMermaidPlugin from "@kangc/v-md-editor/lib/plugins/mermaid/npm";
import createEmojiPlugin from "@kangc/v-md-editor/lib/plugins/emoji/index";
import createTodoListPlugin from "@kangc/v-md-editor/lib/plugins/todo-list/index";
import createHighlightLinesPlugin from "@kangc/v-md-editor/lib/plugins/highlight-lines/index";
import createCopyCodePlugin from "@kangc/v-md-editor/lib/plugins/copy-code/index";
import createAlignPlugin from "@kangc/v-md-editor/lib/plugins/align";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import "@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css";
import "katex/dist/katex.min.css";
import "@kangc/v-md-editor/lib/plugins/emoji/emoji.css";
import "@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css";
import "@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css";
import "@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css";
import "./assets/iconfont/iconfont.css";

import Prism from "prismjs";

VueMarkdownEditor.use(vuepressTheme, {
  Prism,
});

// katex数学公式
VueMarkdownEditor.use(createKatexPlugin());
// mermaid流程图
VueMarkdownEditor.use(createMermaidPlugin());
// emoji表情
VueMarkdownEditor.use(createEmojiPlugin());
// 待办事项
VueMarkdownEditor.use(createTodoListPlugin());
// 代码高亮行
VueMarkdownEditor.use(createHighlightLinesPlugin());
// 快捷代码复制
VueMarkdownEditor.use(createCopyCodePlugin());
// 内容水平定位
VueMarkdownEditor.use(createAlignPlugin());

createApp(App).use(VueMarkdownEditor).mount("#app");
