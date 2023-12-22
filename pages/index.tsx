import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Layout from "@/Layout"
import { useEffect } from "react";

export default function Main({children} : any) {
  
  useEffect(() => {
    fetch("/api/hello")
    .then(res => res.json())
      .then((res) => console.log("response =>", res))
      .catch((err) => console.log("err =>", err));
  }, []);

 return (
  <>
    <Layout metaTitle="Home" metaDescription={"Ini adalah bagian Home"}>
        <p className="w-full min-h-[100vh]">Home</p>
    </Layout>
  </>
 );
}