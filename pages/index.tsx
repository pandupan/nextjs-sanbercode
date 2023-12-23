import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Layout from "@/Layout"
import { useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const LayoutComponent = dynamic(() => import("@/Layout"));

export default function Main({children} : any) {
  
  useEffect(() => {
    fetch("/api/hello")
    .then(res => res.json())
      .then((res) => console.log("response =>", res))
      .catch((err) => console.log("err =>", err));
  }, []);

 return (
  <>
    <LayoutComponent metaTitle="Home" metaDescription={"Ini adalah bagian Home"}>
        <div className="flex flex-row">
          <p className="text-6xl p-32">Home</p>
          <Image
            src="/next.png" width={400} height={400} 
            alt="next image" className="object-cover"
          />
        </div>
    </LayoutComponent>
  </>
 );
}