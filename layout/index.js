import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Latihan Next Js</title>
        <meta name="Deskripsi" content="Belajar Next Js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
