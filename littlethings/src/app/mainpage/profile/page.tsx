import { getPostByUserId } from '../../../../lib/db';

export default async function Profile() {
  const brian = await getPostByUserId(4);
  const sharon = await getPostByUserId(5);

  return (
    <>
      {sharon.map((post) => (
        <div
          key={post.id}
          className="text-black flex flex-col justify-center items-center"
        >
          <div key={post.id}>{post.title}</div>
          <div key={post.id}>{post.content}</div>
        </div>
      ))}
    </>
  );
}
