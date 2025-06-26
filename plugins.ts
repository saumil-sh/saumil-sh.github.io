// import attributes from "lume/plugins/attributes.ts";
// import code_highlight from "lume/plugins/code_highlight.ts";
// import relations from "lume/plugins/relations.ts";
import metas from "lume/plugins/metas.ts";
// import nav from "lume/plugins/nav.ts";
// import pagefind from "lume/plugins/pagefind.ts";
// import robots from "lume/plugins/robots.ts";
import icons from "lume/plugins/icons.ts";
import katex from "lume/plugins/katex.ts";
// import google_fonts from "lume/plugins/google_fonts.ts";
// import sass from "lume/plugins/sass.ts";
// import purgecss from "lume/plugins/purgecss.ts";
// import base_path from "lume/plugins/base_path.ts";
// import relative_urls from "lume/plugins/relative_urls.ts";
// import slugify_urls from "lume/plugins/slugify_urls.ts";
// import check_urls from "lume/plugins/check_urls.ts";
import { favicon, Options as FaviconOptions } from "lume/plugins/favicon.ts";
// import svgo from "lume/plugins/svgo.ts";
// import picture from "lume/plugins/picture.ts";
// import transform_images from "lume/plugins/transform_images.ts";
// import inline from "lume/plugins/inline.ts";
import { Options as SitemapOptions, sitemap } from "lume/plugins/sitemap.ts";
import brotli from "lume/plugins/brotli.ts";
import gzip from "lume/plugins/gzip.ts";
import { merge } from "lume/core/utils/object.ts";

import "lume/types.ts";

export interface Options {
  sitemap?: Partial<SitemapOptions>;
  favicon?: Partial<FaviconOptions>;
}

export const defaults: Options = {
  favicon: {
    input: "assets/images/favicon.svg",
  },
};

/** Configure the site */
export default function (userOptions?: Options) {
  const options = merge(defaults, userOptions);

  return (site: Lume.Site) => {
    site
        // .use(attributes())
        // .use(code_highlight())
        // .use(relations())
        .use(metas())
        // .use(nav())
        // .use(pagefind())
        // .use(robots())
        .use(icons())
        .use(katex())
        // .use(google_fonts())
        // .use(sass())
        // .use(purgecss())
        // .use(base_path())
        // .use(relative_urls())
        // .use(slugify_urls())
        // .use(check_urls())
        .use(favicon(options.favicon))
        // .use(svgo())
        // .use(picture())
        // .use(transform_images())
        // .use(inline())
        .use(sitemap(options.sitemap))
        .use(brotli())
        .use(gzip())
        .add("assets/css");
  };
}