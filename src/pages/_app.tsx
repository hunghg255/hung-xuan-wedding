import '@app/styles/globals.css';
import type { AppProps } from 'next/app';
import 'antd-css-utilities/utility.min.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Plum = dynamic(() => import('@app/components/Plum/Plum'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hùng Xuân</title>
        <meta name='author' content='Hùng Xuân' />
        <meta name='keywords' content='Hùng Xuân' />
        <meta
          name='description'
          content='A beautiful wedding celebration between Hùng and Xuân, filled with love, joy, and cherished moments.'
        />
        <meta name='rating' content='general' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content={'index,follow'} />
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#476055' />
        <meta name='title' content='Hùng Xuân' />
        <meta
          name='description'
          content='A beautiful wedding celebration between Hùng and Xuân, filled with love, joy, and cherished moments.'
        />
        <link rel='shortcut icon' href='https://hunghg255.github.io/together/img/love.png' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale1,shrink-to-fit=no'
        />
      </Head>

      <Component {...pageProps} />

      <Plum />
    </>
  );
}
