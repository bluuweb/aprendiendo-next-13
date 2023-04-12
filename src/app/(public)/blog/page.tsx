import Link from "next/link";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return await response.json();
};

const Posts = async () => {
  const posts = await getPosts();
  // console.log(posts);

  return (
    <div>
      <h2 className="text-lg underline">Lista de Posts</h2>

      <ul>
        {posts.map((post: Post) => (
          <li
            key={post.id}
            className="border p-4 rounded shadow-lg mb-4"
          >
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      {/* <ul>
        <li>
          <Link href="/blog/1">Post 1</Link>
        </li>
        <li>
          <Link href="/blog/2">Post 2</Link>
        </li>
        <li>
          <Link href="/blog/3">Post 3</Link>
        </li>
      </ul> */}
    </div>
  );
};
export default Posts;
