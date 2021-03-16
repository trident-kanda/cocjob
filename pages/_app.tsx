import { AppProps } from "next/dist/next-server/lib/router/router";
import "tailwindcss/tailwind.css";
import "../style/global.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
