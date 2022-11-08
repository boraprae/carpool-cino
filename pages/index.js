import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>Hello Next!</h1>
      <button onClick={() => router.push("/offerDetail")}>Detail</button>
    </div>
  );
}
