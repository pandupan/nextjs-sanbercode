import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/Layout"));

const DetailNotes = ({notes}) => {
  console.log("detail notes =>", notes);
  return (
    <LayoutComponent
      metaTitle="Detail Notes"
      metaDescription={"Ini adalah bagian Detail Notes"}
    >
      <div className="w-full min-h-full">
        <p>Judul : {notes.data.title}</p>
        <p>Desc : {notes.data.description}</p>
      </div>
    </LayoutComponent>
  );
};

export default DetailNotes;

export async function getStaticPaths() {
  const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
  const notes = await res.json();

  const paths = notes.data.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));
  console.log(paths)

  return {
    paths,
    fallback: true, // false or "blocking"
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await fetch(
    `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`
  );
  const notes = await res.json();
  return { props: { notes }, revalidate: 10 };
}