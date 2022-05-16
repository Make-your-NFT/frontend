import Layout from "@components/layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Main from "./main";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Make Yout NFT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Main />
    </Layout>
  );
};

export default Home;
