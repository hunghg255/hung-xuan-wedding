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
      <audio autoPlay={true} ref={audioRef} src={'/assets/music/TangNhau.mp3'} />
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
          backgroundImage: `url('https://img.youtube.com/vi/XTsmH9b2ADY/0.jpg')`,
        }}
      />
      <div className={styles.track}>
        Tặng nhau - Pink Frog x Flower
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
          <a href={'https://www.youtube.com/watch?v=XTsmH9b2ADY'} target={'_blank'}>
            <IconLink className={styles.iconLink} />
          </a>
        </div>
        <div className={styles.control}>
          <a
            onClick={(e) => {
              e.preventDefault();
              if (paused) {
                audioRef.current?.play();
              } else audioRef.current?.pause();
            }}
          >
            {paused ? (
              <IconPlay className={styles.iconPlay} />
            ) : (
              <IconPause className={styles.iconPause} />
            )}
          </a>
        </div>
      </div>
      <div className={styles.controls}>
        <a className={styles.smallBtn} onClick={replay}>
          <IconRepeat className={styles.iconRepeat} />
        </a>
        <a
          className={styles.bigBtn}
          onClick={(e) => {
            e.preventDefault();
            if (paused) {
              audioRef.current?.play();
            } else audioRef.current?.pause();
          }}
        >
          {paused ? (
            <IconPlay className={styles.iconPlay} />
          ) : (
            <IconPause className={styles.iconPause} />
          )}
        </a>
        <a
          className={styles.smallBtn}
          href={'https://www.youtube.com/watch?v=XTsmH9b2ADY'}
          target={'_blank'}
        >
          <IconLink className={styles.iconLink} />
        </a>
      </div>
    </div>
  );
}
