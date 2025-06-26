import lume from "lume/mod.ts";
import plugins from "./plugins.ts";

const site = lume({
  src: "./src",
  cssFile: "./assets/css/style.css",
  jsFile: "./assets/js/script.js",
  location: new URL("https://saumil-sh.github.io/"),
});

// ignore README, CHANGELOG, and LICENSE files
site.ignore("README.md", "CHANGELOG.md", "LICENSE");

// use plugins from plugins.ts
site.use(plugins());

export default site;
