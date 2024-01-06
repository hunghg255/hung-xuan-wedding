import styles from './CalendarSection.module.scss';
import { Alegreya } from 'next/font/google';
import Countdown from 'react-countdown';
import { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';

const alegreyaFont = Alegreya({ subsets: ['latin'] });

const Map = dynamic(
  () => import('@app/components/Map'), // replace '@components/map' with your component's location
  { ssr: false }, // This line is important. It's what prevents server-side render
);

export default function CalendarSection() {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return <div>Đám cưới đã diễn ra...</div>;
    } else {
      // Render a countdown
      return (
        <div className={styles.dateSection}>
          <div className={styles.pock}>
            <div className={styles.number}>{days}</div>
            <div className={styles.unit}>ngày</div>
          </div>
          <div className={styles.pock}>
            <div className={styles.number}>{hours}</div>
            <div className={styles.unit}>giờ</div>
          </div>
          <div className={styles.pock}>
            <div className={styles.number}>{days}</div>
            <div className={styles.unit}>ngày</div>
          </div>
          <div className={styles.pock}>
            <div className={styles.number}>{minutes}</div>
            <div className={styles.unit}>phút</div>
          </div>
          <div className={styles.pock}>
            <div className={styles.number}>{seconds}</div>
            <div className={styles.unit}>giây</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      id='calendar'
      className={styles.calendarSection}
      style={{
        fontFamily: alegreyaFont.style.fontFamily,
      }}
    >
      <div className={styles.content}>
        <div className={styles.title}>Lịch Trình & Địa Điểm</div>
        <div className={styles.opening}>
          Hôn lễ sẽ được tổ chức vào{' '}
          <span className={styles.specific}>17 giờ, ngày 01 tháng 08 năm 2024.</span>
        </div>
        {client && <Countdown date={new Date('2024-08-01T17:00:00+07:00')} renderer={renderer} />}
        <div className={styles.location}>
          Buổi lễ được cử hành tại{' '}
          <a
            href={`https://www.google.com/maps/place/21%C2%B022'07.0%22N+105%C2%B055'32.7%22E/@21.3686216,105.9231864,17z/data=!3m1!4b1!4m7!1m2!10m1!1e2!3m3!8m2!3d21.3686216!4d105.9257613?entry=ttu`}
            className={styles.address}
            target={'_blank'}
          >
            Thôn Hương Sơn, Xã Hoà Sơn, Hiệp Hoà, Bắc Giang
          </a>
          .
        </div>
        <div
          style={{
            width: '100%',
            height: 400,
          }}
        >
          <Map />
        </div>
      </div>
    </div>
  );
}
