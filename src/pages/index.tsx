import MusicPlayer from '@app/components/MusicPlayer';
import Sider from '@app/components/Sider';
import CalendarSection from '@app/components/sections/CalendarSection';
import MainSection from '@app/components/sections/MainSection';
import StorySection from '@app/components/sections/StorySection';
import styles from '@app/styles/Home.module.scss';
import Gift from '@app/components/sections/Gift/Gift';
import Album from '@app/components/sections/Album/Album';

export default function Home() {
  return (
    <div
      style={{
        // backgroundImage: `url('/background/water-color-01.png')`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
      className={styles.home}
    >
      <Sider />

      <div className={styles.content} id='content'>
        <MainSection />
        <CalendarSection />
        <StorySection />
        <Album />
        <Gift />
      </div>

      <div className={styles.figure}>
        <img
          className={styles.bgFigure}
          src={'/figures/wedding-main-02.jpg'}
          style={{
            height: '100vh',
            position: 'absolute',
            left: -200,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 0,
            opacity: 0.24,
          }}
        />
        <div className={styles.imgSmall}>
          <div className={styles.bg}></div>
          <div>
            <img src={'/figures/wedding-main-01.JPG'} />
          </div>
          <img className={styles.markImg} src={'/figures/vectorflower.png'} />
        </div>
        <MusicPlayer />
      </div>
    </div>
  );
}
