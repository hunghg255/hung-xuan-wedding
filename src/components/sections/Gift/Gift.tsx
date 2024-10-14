import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { Alegreya } from 'next/font/google';
import useCopied from '@app/hooks/useCopied';
const alegreyaFont = Alegreya({ subsets: ['latin'] });

import styles from './index.module.scss';
import { toast } from 'sonner';

const Gift = () => {
  const { copyToClipboard } = useCopied();

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
            onClick={async () => {
              copyToClipboard('107872465857');
              toast.success('Đã sao chép số tài khoản');
            }}
          >
            <p>Cô dâu</p>
            <img src='/qr/qr-xuan.png' alt='bni' />
            <p>Vietinbank - 107872465857</p>
            <p>NGÔ THỊ XUÂN</p>
          </div>
          <div
            style={{
              border: '2px dashed #ddd',
              padding: '10px',
              margin: '10px',
              borderRadius: '10px',
              backgroundColor: 'white',
            }}
            onClick={async () => {
              copyToClipboard('00002608430');
              toast.success('Đã sao chép số tài khoản');
            }}
          >
            <p>Chú rể</p>
            <img src='/qr/qr-hung.jpg' alt='bni' />
            <p>Tpbank - 00002608430</p>
            <p>HOÀNG GIA HÙNG</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
