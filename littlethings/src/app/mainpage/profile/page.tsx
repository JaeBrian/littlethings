import { getPostByUserId } from '../../../../lib/db';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

export default async function Profile() {
  const sharon = await getPostByUserId(5);
  console.log('here', sharon);

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
