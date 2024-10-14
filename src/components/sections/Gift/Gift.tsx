import React from 'react';
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
          <div
            style={{
              border: '2px dashed #ddd',
              padding: '10px',
              margin: '10px',
              borderRadius: '10px',
              backgroundColor: 'white',
            }}
          >
            <img src='/qr/qr-xuan.png' alt='bni' />
            <p>Vietinbank - 107872465857</p>
            <p>Ngô Thị Xuân</p>
          </div>
          <div
            style={{
              border: '2px dashed #ddd',
              padding: '10px',
              margin: '10px',
              borderRadius: '10px',
              backgroundColor: 'white',
            }}
          >
            <img src='/qr/qr-hung.jpg' alt='bni' />
            <p>Tpbank - 00002608430</p>
            <p>Hoàng Gia Hùng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
