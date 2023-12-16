import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Layout from "@/Layout"

export default function Main({children} : any) {
 return (
  <>
    <Layout>
        <p className="w-full min-h-[100vh]">Home</p>
    </Layout>
  </>
 );
}