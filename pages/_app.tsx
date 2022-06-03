import "../styles/globals.css";
import "components/slider/customSlider.css";

import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { RecoilRoot } from "recoil";

const getLibrary = (provider: any) => new Web3Provider(provider);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Web3ReactProvider>
  );
}

export default MyApp;
