import "tailwindcss/tailwind.css";
import "../app/firepadUserList.css";
import "../app/firePadExt.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
