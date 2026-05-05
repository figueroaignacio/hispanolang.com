import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";
import { allDocs } from "content-collections";

export async function getDocContent(slug: string) {
  const doc = allDocs.find((d) => d.slug === slug);

  if (!doc) {
    return null;
  }

  const { content } = await compileMDX({
    source: doc.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
    },
  });

  return content;
}

export function getDocSlugs(): string[] {
  return allDocs
    .sort((a, b) => a.order - b.order)
    .map((doc) => doc.slug);
}

export function getDocSections(): { id: string; title: string }[] {
  return allDocs
    .sort((a, b) => a.order - b.order)
    .map((doc) => ({ id: doc.slug, title: doc.title }));
}
