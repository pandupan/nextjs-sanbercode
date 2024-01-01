import Layout from "@/Layout";

export default function Post({ posts }) {
  console.log(posts);
  return (
    <>
      <Layout>
        <p className="text-center text-4xl my-12">Post</p>
        <div className="flex flex-wrap flex-row gap-2 justify-center">
          {posts.map((item) => (
            <div
              key={item.id}
              className="flex-wrap gap-4 text-2xl flex py-4 border-2 rounded-3xl my-4 px-4 w-[300px] justify-center"
            >
              <p className="bg-gray-200 text-center text-gray-800 p-2 rounded-xl text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return { props: { posts } };
}
