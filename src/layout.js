import React from "react";
import { Block } from "baseui/block";
import Head from "next/head";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function Layout({ children, currentTheme, toggleTheme }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Block
        minHeight="100vh"
        backgroundColor={currentTheme.colors.backgroundColor}
      >
        <Header currentTheme={currentTheme} toggleTheme={() => toggleTheme()} />
        <Block minHeight={`calc(100vh - 100px)`}>{children}</Block>
        <Footer />
      </Block>
    </>
  );
}
