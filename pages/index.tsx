import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Layout() {
 return (
  <div>
   <Head>
    <title>Latihan Next Js</title>
    <meta
     name="Deskripsi"
     content="Belajar Next Js"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <Header />
   <div className="w-full min-h-[100vh] flex justify-center items-center text-6xl p-32 ">
   <p>Isi Konten</p>
   </div>
   <Footer />
  </div>
 );
}