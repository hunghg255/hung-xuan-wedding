import '@app/styles/globals.css';
import 'antd-css-utilities/utility.min.css';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Shantell_Sans } from 'next/font/google';
import { Toaster } from 'sonner';
import { AppProps } from 'next/app';

const Plum = dynamic(() => import('@app/components/Plum/Plum'), { ssr: false });
const AosComponent = dynamic(() => import('@app/components/AosComponent/AosComponent'), {
  ssr: false,
});

const ShantellSanFont = Shantell_Sans({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Xuân 💗 Hùng</title>
        <meta name='author' content='Xuân 💗 Hùng' />
        <meta name='keywords' content='Xuân 💗 Hùng' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale1,shrink-to-fit=no'
        />

        <meta
          name='description'
          content='A beautiful wedding celebration between Xuân and Hùng, filled with love, joy, and cherished moments.'
        />
        <meta name='rating' content='general' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content={'index,follow'} />
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#476055' />
        <meta name='title' content='Xuân 💗 Hùng' />
        <meta
          name='description'
          content='A beautiful wedding celebration between Xuân and Hùng, filled with love, joy, and cherished moments.'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.hungxuan.us/' />
        <meta property='og:title' content='Xuân 💗 Hùng' />
        <meta
          property='og:description'
          content='A beautiful wedding celebration between Xuân and Hùng, filled with love, joy, and cherished moments.'
        />
        <meta property='og:image' content='https://www.hungxuan.us/og/og1.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://www.hungxuan.us/' />
        <meta property='twitter:title' content='Xuân 💗 Hùng' />
        <meta
          property='twitter:description'
          content='A beautiful wedding celebration between Xuân and Hùng, filled with love, joy, and cherished moments.'
        />
        <meta property='twitter:image' content='https://www.hungxuan.us/og/og1.png' />
      </Head>

      <style jsx global>{`
        :root {
          --fontShantellSan: ${ShantellSanFont.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />

      <Toaster richColors position='bottom-center' duration={1000} />

      {/* <Plum /> */}
      <AosComponent />
    </>
  );
}
