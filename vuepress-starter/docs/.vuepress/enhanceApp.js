import { defineClientAppEnhance } from "@vuepress/client";
import Foo from "./components/Foo.vue";

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component("Foo", Foo);
});
