import type { AppProps } from "next/app";
import GlobalStyle from "@/utils/styledComponents/Global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
