import styles from './CalendarSection.module.scss';
import { Alegreya } from 'next/font/google';
import Countdown from 'react-countdown';
import { useEffect, useState } from 'react';

const alegreyaFont = Alegreya({ subsets: ['latin'] });

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
        <br />
        <br />
        <div className={styles.title}>Nhà Trai</div>
        <div className={styles.opening}>
          Hôn lễ sẽ được tổ chức vào{' '}
          <span className={styles.specific}>13 giờ, ngày 27 tháng 10 năm 2024.</span>
        </div>
        {client && <Countdown date={new Date('2024-10-27T13:00:00+07:00')} renderer={renderer} />}

        <div className={styles.location}>
          Buổi lễ được cử hành tại{' '}
          <a
            href={`https://maps.app.goo.gl/8Wf681b1DGE8su3MA`}
            className={styles.address}
            target={'_blank'}
          >
            Xóm Giếng, Thôn Hương Sơn, Xã Hoà Sơn, Hiệp Hoà, Bắc Giang
          </a>
          .
        </div>

        <div>
          <p>QR Địa điểm</p>
          <a
            href={`https://maps.app.goo.gl/8Wf681b1DGE8su3MA`}
            className={styles.address}
            target={'_blank'}
          >
            <img
              src='/qr/address-hung.png'
              style={{
                width: 152,
                height: 152,
              }}
            />
          </a>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.title}>Nhà Gái</div>

        <div className={styles.opening}>
          Hôn lễ sẽ được tổ chức vào{' '}
          <span className={styles.specific}>11h30 giờ, ngày 27 tháng 10 năm 2024.</span>
        </div>
        {client && <Countdown date={new Date('2024-10-27T11:30:00+07:00')} renderer={renderer} />}
        <div className={styles.location}>
          Buổi lễ được cử hành tại{' '}
          <a
            href={`https://maps.app.goo.gl/9w7YTb6yGpb1rntw7`}
            className={styles.address}
            target={'_blank'}
          >
            Xóm Chỗ, Thôn Đông Lâm, Xã Hương Lâm, Hiệp Hoà, Bắc Giang
          </a>
          .
        </div>

        <div>
          <p>QR Địa điểm</p>
          <a href={`https://maps.app.goo.gl/9w7YTb6yGpb1rntw7`} target={'_blank'}>
            <img
              src='/qr/address-xuan.png'
              style={{
                width: 152,
                height: 152,
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
