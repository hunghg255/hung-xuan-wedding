import styles from './MusicPlayer.module.scss';
import { Alegreya } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import { formatMusicTime } from '@app/utils';
import { IconLink } from '@app/components/icon/IconLink';
import { IconPlay } from '@app/components/icon/IconPlay';
import { IconPause } from '@app/components/icon/IconPause';
import { IconRepeat } from '@app/components/icon/IconRepeat';

const alegreyaFont = Alegreya({ subsets: ['latin'] });

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [paused, setPaused] = useState(true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', (e) => {
        setCurrentTime(audioRef.current?.currentTime || 0);
      });
      audioRef.current.addEventListener('pause', (e) => {
        setPaused(!!audioRef.current?.paused);
      });
      audioRef.current.addEventListener('play', (e) => {
        setInitialized(true);
        setPaused(!!audioRef.current?.paused);
        setDuration(audioRef.current?.duration || 0);
      });
    }
  }, [audioRef.current]);

  useEffect(() => {
    document.body.addEventListener('mouseup', function () {
      if (audioRef.current && !(audioRef.current as any).initialized) {
        (audioRef.current as any).initialized = true;
        return audioRef.current.play();
      }
    });
  }, []);

  const replay = () => {
    (audioRef.current as any).currentTime = 0;
    (audioRef.current as any).play();
  };

  return (
    <div
      className={styles.musicPlayer}
      style={{
        fontFamily: alegreyaFont.style.fontFamily,
      }}
    >
      <audio
        autoPlay={true}
        ref={audioRef}
        src={
          'https://cdn.biihappy.com/ziiweb/wedding-musics/BeautifulInWhite-ShaneFilan-524801.mp3'
        }
      />
      <div className={styles.mobileProgress}>
        <div
          className={styles.progress}
          style={{
            width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
          }}
        />
      </div>
      <div
        className={styles.mobileArtwork}
        style={{
          backgroundImage: `url('/assets/wedding.jpg')`,
        }}
      />
      <div className={styles.track}>
        Beautiful in white
        <div className={styles.mobileTimer}>
          {!audioRef.current?.currentTime ? '--:--' : formatMusicTime(currentTime!)}
          {' / '}
          {duration <= 0 ? '--:--' : formatMusicTime(duration)}
        </div>
      </div>
      <div className={styles.timer}>
        <div className={styles.currentTime}>
          {!audioRef.current?.currentTime ? '--:--' : formatMusicTime(currentTime!)}
        </div>
        <input
          type='range'
          min='1'
          max='100'
          className={styles.slider}
          id='myRange'
          value={duration > 0 ? (currentTime / duration) * 100 : 0}
        />
        <div className={styles.duration}>{duration <= 0 ? '--:--' : formatMusicTime(duration)}</div>
      </div>
      <div className={styles.mobileControls}>
        <div className={styles.control}>
          <a href={'https://www.youtube.com/watch?v=06-XXOTP3Gc'} target={'_blank'}>
            <IconLink className={styles.iconLink} />
          </a>
        </div>
        <div className={styles.control}>
          {paused ? (
            <a
              onClick={(e) => {
                e.preventDefault();
                audioRef.current?.play();
              }}
            >
              <IconPlay className={styles.iconPlay} />
            </a>
          ) : (
            <a
              onClick={(e) => {
                e.preventDefault();
                audioRef.current?.pause();
              }}
            >
              <IconPause className={styles.iconPause} />
            </a>
          )}
        </div>
      </div>
      <div className={styles.controls}>
        <a className={styles.smallBtn} onClick={replay}>
          <IconRepeat className={styles.iconRepeat} />
        </a>
        {paused ? (
          <a
            onClick={(e) => {
              e.preventDefault();
              audioRef.current?.play();
            }}
            className={styles.bigBtn}
          >
            <IconPlay className={styles.iconPlay} />
          </a>
        ) : (
          <a
            onClick={(e) => {
              e.preventDefault();
              audioRef.current?.pause();
            }}
            className={styles.bigBtn}
          >
            <IconPause className={styles.iconPause} />
          </a>
        )}
        <a
          className={styles.smallBtn}
          href={'https://www.youtube.com/watch?v=06-XXOTP3Gc'}
          target={'_blank'}
        >
          <IconLink className={styles.iconLink} />
        </a>
      </div>
    </div>
  );
}
