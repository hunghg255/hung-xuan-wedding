import React, { useEffect, useRef, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import styles from './index.module.scss';
import { Alegreya } from 'next/font/google';
const alegreyaFont = Alegreya({ subsets: ['latin'] });

import { ColumnsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/columns.css';
import Image from 'next/image';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
  return `https://hungxuan.us/_next/image?url=${encodeURIComponent(`/album/${asset}`)}&w=${width}&q=75`;
}

const photos = [
  {
    asset: '2.jpg',
    width: 1707,
    height: 2560,
    alt: 'Hiking boots',
  },
  {
    asset: '3.jpg',
    width: 1703,
    height: 2560,
    alt: 'Purple petaled flowers near a mountain',
  },
  {
    asset: '4.jpg',
    width: 1707,
    height: 2560,
    alt: 'A person pointing at a beige map',
  },
  {
    asset: '5.jpg',
    width: 1707,
    height: 2560,
    alt: 'Two hikers walking toward a snow-covered mountain',
  },
  {
    asset: '6.jpg',
    width: 2560,
    height: 1707,
    alt: 'A silver and black coffee mug on a brown wooden table',
  },
  {
    asset: '7.jpg',
    width: 1707,
    height: 2560,
    alt: "A worm's eye view of trees at night",
  },
  {
    asset: '8.jpg',
    width: 1707,
    height: 2560,
    alt: 'A pine tree forest near a mountain at sunset',
  },
  {
    asset: '9.jpg',
    width: 1707,
    height: 2560,
    alt: 'Silhouette photo of three hikers near tall trees',
  },
  {
    asset: '10.jpg',
    width: 1707,
    height: 2560,
    alt: 'A person sitting near a bonfire surrounded by trees',
  },
  {
    asset: '11.jpg',
    width: 1707,
    height: 2560,
    alt: 'Green moss on gray rocks in a river',
  },
  {
    asset: '12.jpg',
    width: 1707,
    height: 2560,
    alt: 'Landscape photography of mountains',
  },
  {
    asset: '13.jpg',
    width: 1707,
    height: 2560,
    alt: 'A pathway between green trees during daytime',
  },
  {
    asset: '14.jpg',
    width: 1707,
    height: 2560,
    alt: 'A man wearing a black jacket and backpack standing on a grass field during sunset',
  },
  {
    asset: '15.jpg',
    width: 1707,
    height: 2560,
    alt: 'Green pine trees under white clouds during the daytime',
  },
  {
    asset: '17.jpg',
    width: 1707,
    height: 2560,
    alt: 'A tall mountain with a waterfall running down its side',
  },
  {
    asset: '18.jpg',
    width: 1707,
    height: 2560,
    alt: 'Blue mountains',
  },
  {
    asset: '19.jpg',
    width: 1707,
    height: 2560,
    alt: 'Green trees on a brown mountain under a blue sky during the daytime',
  },
  {
    asset: '20.jpg',
    width: 1707,
    height: 2560,
    alt: 'A red flower on a green grass field during the daytime',
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: assetLink(asset, width),
      asset,
      alt,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: assetLink(asset, breakpoint),
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    }) as any,
);

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

        <PhotoProvider>
          {/* <div className={styles.list}>
            {photoImages.map((item, index) => (
              <LazyImage key={index} src={item} delay={index * 50} />
            ))}
          </div> */}
          <ColumnsPhotoAlbum
            photos={photos}
            columns={(containerWidth) => {
              if (containerWidth <= 475) return 2;

              return 3;
            }}
            render={{
              image: ({ src, alt, ...props }, ctx) => {
                return (
                  <PhotoView
                    src={`/album/${ctx.photo.asset}`}
                    overlay={<div>{`/album/${ctx.photo.asset}`}</div>}
                  >
                    <div data-aos='zoom-in' className='aos-animate-hide'>
                      <img src={src} alt={alt} {...props} />
                    </div>
                  </PhotoView>
                );
              },
            }}
          />
        </PhotoProvider>
      </div>
    </div>
  );
};

export default Album;
