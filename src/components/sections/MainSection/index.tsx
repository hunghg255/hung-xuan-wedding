import styles from './MainSection.module.scss';
import localFont from 'next/font/local';
import { Alegreya } from 'next/font/google';
import Leaves from '@app/components/sections/MainSection/Leaves';
import { IconHeartFill } from '@app/components/icon/IconHeartFill';

const TanPearlFont = localFont({
  src: '../../../assets/fonts/TAN-MIGNON.otf',
});
const TanMonCheriFont = localFont({
  src: '../../../assets/fonts/TAN-MON-CHERI.otf',
});

const alegreyaFont = Alegreya({ subsets: ['latin'] });

export default function MainSection() {
  return (
    <div className={styles.mainSection} id='header'>
      <Leaves />
      <div className={styles.mobileFigure}>
        <div>
          <div className={styles.bg}></div>
          <div className={styles.figure}>
            <img src={'/assets/img1.png'} />
          </div>
          <img className={styles.markImg} src={'/figures/vectorflower.png'} />
        </div>
      </div>
      <div
        className={styles.welcomeText}
        style={{
          fontFamily: alegreyaFont.style.fontFamily,
        }}
      >
        <div className={styles.welcome}>Trân trọng kính mời</div>
        <div className={styles.guest}>{'Quý Khách'}</div>
      </div>
      <div className={styles.title} style={{ fontFamily: alegreyaFont.style.fontFamily }}>
        Tới dự tiệc mừng lễ thành hôn cùng gia đình chúng tôi
      </div>
      <div
        className={styles.names}
        style={{
          fontFamily: TanMonCheriFont.style.fontFamily,
        }}
      >
        <div
          style={{
            fontWeight: 500,
          }}
          className={styles.bride}
        >
          Ngô Xuân
        </div>
        <IconHeartFill className={styles.iconHeart} />
        <div
          className={styles.groom}
          style={{
            fontWeight: 500,
          }}
        >
          Gia Hùng
        </div>
      </div>
      {/*<div className={styles.shortStory} style={{fontFamily: alegreyaFont.style.fontFamily}}>*/}
      {/*  Một câu chuyện được viết lên bằng âm nhạc, tình yêu và tuổi trẻ. Viết vài câu vào dây dài dài sao cho nó dài được*/}
      {/*  khoảng 2 dòng là vừa đẹp...*/}
      {/*</div>*/}

      <div style={{ zIndex: 99999 }} className={'flex justify-between'}>
        <div className={'flex-grow-1'}>
          <h2
            style={{
              fontFamily: alegreyaFont.style.fontFamily,
            }}
          >
            Nhà trai:
          </h2>
          <h3
            style={{
              fontFamily: alegreyaFont.style.fontFamily,
              fontWeight: 500,
            }}
          >
            Ông: Hoàng Gia Lý
          </h3>
          <h3
            style={{
              fontFamily: alegreyaFont.style.fontFamily,
              fontWeight: 500,
            }}
          >
            Bà: Nguyễn Thị Tuyên
          </h3>
        </div>
        <div className={'flex-grow-1'}>
          <h2
            style={{
              fontFamily: alegreyaFont.style.fontFamily,
            }}
          >
            Nhà gái:
          </h2>
          <h3
            style={{
              fontFamily: alegreyaFont.style.fontFamily,
              fontWeight: 500,
            }}
          >
            Ông: Ngô Văn Vụ
          </h3>
          <h3
            style={{
              fontFamily: alegreyaFont.style.fontFamily,
              fontWeight: 500,
            }}
          >
            Bà: Phùng Thị Mỹ
          </h3>
        </div>
      </div>

      {/*<div className={styles.cta}>*/}
      {/*  <a className={styles.button} style={{*/}
      {/*    fontFamily: alegreyaFont.style.fontFamily*/}
      {/*  }}>*/}
      {/*    <span className={styles.text}>*/}
      {/*      Lịch trình*/}
      {/*    </span>*/}
      {/*    <span className={styles.date}>*/}
      {/*      Jan 4th, 2024*/}
      {/*    </span>*/}
      {/*  </a>*/}
      {/*</div>*/}
    </div>
  );
}
