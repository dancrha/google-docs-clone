import "@/styles/globals.css";
import { Button, Icon } from "@material-tailwind/react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />

      <Component {...pageProps} />
    </>
  );
}
