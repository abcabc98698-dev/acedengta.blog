import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "@/config/site";

export async function GET(context) {
  const blog = await getCollection('post');
  const sortedPosts = blog.sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );

  return rss({
    title: siteConfig.meta.title || siteConfig.title,
    description: siteConfig.meta.description,
    site: context.site || siteConfig.url,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>zh-CN</language>`,
  });
}
