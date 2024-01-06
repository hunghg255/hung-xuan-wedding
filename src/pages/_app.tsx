import '@app/styles/globals.css';
import type { AppProps } from 'next/app';
import 'antd-css-utilities/utility.min.css';
import { GlobalScrollbar } from 'mac-scrollbar';
import 'mac-scrollbar/dist/mac-scrollbar.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hung Xuan Wedding</title>
        <meta name='author' content='Hung Xuan Wedding' />
        <meta name='keywords' content='Hung Xuan Wedding' />
        <meta name='description' content='Hung Xuan Wedding' />
        <meta name='rating' content='general' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content={'index,follow'} />
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#476055' />
        <meta name='title' content='Hung Xuan Wedding' />
        <meta name='description' content='Hung Xuan Wedding' />
        <link rel='shortcut icon' href='https://hunghg255.github.io/together/img/love.png' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale1,shrink-to-fit=no'
        />
      </Head>

      <Component {...pageProps} />
      <GlobalScrollbar />
    </>
  );
}
