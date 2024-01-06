import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import styles from './index.module.scss';
import { Alegreya } from 'next/font/google';
const alegreyaFont = Alegreya({ subsets: ['latin'] });

const Gift = () => {
  return (
    <div
      id='gift'
      className={styles.containerAlbum}
      style={{
        fontFamily: alegreyaFont.style.fontFamily,
      }}
    >
      <div className={styles.content}>
        <div className={styles.title}>Gift</div>

        <div className={styles.qr}>
          <div>
            <img src='/qr/hung.png' alt='bni' />
            <p>123456789</p>
            <p>Ngo Thi Xuan</p>
          </div>
          <div>
            <img src='/qr/hung.png' alt='bni' />
            <p>123456789</p>
            <p>Hoang Gia Hung</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
