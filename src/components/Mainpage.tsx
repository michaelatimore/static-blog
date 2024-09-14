import { PostPreview } from "./PostPreview";
import { data, PostData } from "../posts/posts";
import { Post } from "./Post";

type MainpageProps = {
  selectedPost: number;
};

const postData = [
  data.map((post, index) => {
    return <PostPreview key={post.id} post={post} postIndex={index} />;
  }),
  ...data,
];

export function Mainpage({ selectedPost }: MainpageProps) {
  return (
    <main className="container m-0 flex h-[calc(100vh_-_12.5rem)] flex-col overflow-scroll bg-white p-4">
      {selectedPost > 0 ? (
        <Post post={postData[selectedPost] as PostData} />
      ) : (
        (postData[0] as React.ReactNode[])
      )}
    </main>
  );
}
