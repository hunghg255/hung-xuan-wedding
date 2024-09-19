import React, { useEffect, useRef, useState } from 'react';
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

const useIntersectionObserver = (options: any) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref: any = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

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
          easing={(type) =>
            type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)'
          }
        >
          <div className={styles.list}>
            {photoImages.map((item, index) => (
              <LazyImage key={index} src={item} delay={index * 50} />
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};

const LazyImage = ({ src, delay }: any) => {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  const [hasLoaded, setHasLoaded] = useState(false);

  if (isIntersecting && !hasLoaded) {
    setHasLoaded(true);
  }

  return (
    <div
      ref={ref}
      className={`${styles.lazyImage} ${hasLoaded ? styles.visible : ''}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {hasLoaded ? (
        <PhotoView src={src} overlay={<div>{src}</div>}>
          <img src={src} alt='' />
        </PhotoView>
      ) : (
        <div style={{ height: '200px', backgroundColor: '#f0f0f0' }}></div> // Placeholder
      )}
    </div>
  );
};
export default Album;
