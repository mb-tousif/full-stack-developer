import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <Meta />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
