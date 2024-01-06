import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import styles from './index.module.scss';
import { Alegreya } from 'next/font/google';
const alegreyaFont = Alegreya({ subsets: ['latin'] });

const photoImages = [
  '/album/1.jpg',
  '/album/2.jpg',
  '/album/3.jpg',
  '/album/4.jpg',
  '/album/5.jpg',
  '/album/6.jpg',
  '/album/7.jpg',
  '/album/1.jpg',
  '/album/2.jpg',
  '/album/3.jpg',
  '/album/4.jpg',
  '/album/5.jpg',
  '/album/6.jpg',
  '/album/7.jpg',
  '/album/1.jpg',
  '/album/2.jpg',
  '/album/3.jpg',
  '/album/4.jpg',
  '/album/5.jpg',
  '/album/6.jpg',
  '/album/7.jpg',
];

const Album = () => {
  return (
    <div
      id='album'
      className={styles.containerAlbum}
      style={{
        fontFamily: alegreyaFont.style.fontFamily,
      }}
    >
      <div className={styles.content}>
        <div className={styles.title}>Album ảnh</div>

        <PhotoProvider
          speed={() => 800}
          easing={(type) =>
            type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
          }
        >
          <div className={styles.list}>
            {photoImages.map((item, index) => (
              <PhotoView key={index} src={item} overlay={<div>{item}</div>}>
                <img src={item} />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default Album;
