import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Signup from "./signup";
import Login from "./login";
import Dashboard from "@/pages/dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Rental App</title>
        <meta name="description" content="Book Rental Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Signup />
        <Login />
        <Dashboard />
      </div>
    </>
  );
}
