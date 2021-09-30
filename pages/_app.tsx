import "tailwindcss/tailwind.css";
import "./firepadUserList.css";
import "./firePadExt.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
