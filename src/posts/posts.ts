import postsJson from "./posts.json";

export type PostData = {
  metadata: Metadata;
  html: TrustedHTML;
  id: string;
};

type Metadata = {
  published: boolean;
  title: string;
  description: string;
  date: string;
  slug: string;
  tags?: string[];
  imageUrl?: string;
  author?: string;
  authorImageUrl?: string;
};

export const data: PostData[] = postsJson;
