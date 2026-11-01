import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/index.css";
import "../src/App.css";

export default function WallManagementApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wall Management | Building &amp; Branding</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
