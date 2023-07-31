/** @type {import('next').NextConfig} */
import slug from "rehype-slug";
import mdx from "@next/mdx";
import tableOfContents from "remark-toc";

const nextConfig = {
  pageExtensions: ["mdx", "tsx"],
  reactStrictMode: true,
};

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [slug],
    remarkPlugins: [tableOfContents],
  },
});
export default withMDX(nextConfig);