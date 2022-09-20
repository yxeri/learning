import React from 'react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  /**
   * Usage of any Recoil hooks have to be done within RecoilRoot
   */
  return <RecoilRoot><Component {...pageProps} /></RecoilRoot>;
}

export default MyApp;
