interface Props {
  params: {
    slug: string;
  };
}

const getPost = async (slug: string) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + slug
  );
  return await response.json();
};

const Post = async ({ params }: Props) => {
  const post = await getPost(params.slug);

  console.log(post);
  return (
    <div>
      <h2 className="text-lg underline">
        {post.id} - {post.title}
      </h2>
      <p>{post.body}</p>
    </div>
  );
};
export default Post;
