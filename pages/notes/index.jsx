import { useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const LayoutComponent = dynamic(() => import("@/Layout"));

export default function Notes({notes}) {

  console.log('notes =>', notes)

  console.log(notes.data)

 return (
  <>
    <LayoutComponent metaTitle="Notes" metaDescription={"Ini adalah bagian Notes"}>
      {notes.data.map((item, key)=>(
        <div className="flex justify-center items-center w-full h-full gap-4" key={key}>
            <Link href={`/notes/${item.id}`} className="w-full justify-center items-center flex flex-wrap">
              <div className="w-[500px] h-[300px] justify-center items-center flex flex-wrap bg-sky-400 rounded-xl my-10">
                {item.title}
              </div>
            </Link>
          </div>
      ))}
    </LayoutComponent>
  </>
 );
}

export async function getStaticProps() {
  const res = await fetch('https://paace-f178cafcae7b.nevacloud.io/api/notes')
  const notes = await res.json()
  return { props: { notes }, revalidate: 10 }
}

