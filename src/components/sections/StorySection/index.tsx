import styles from './StorySection.module.scss';
import { Alegreya } from 'next/font/google';
import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { IconHeartFill } from '@app/components/icon/IconHeartFill';

const alegreyaFont = Alegreya({ subsets: ['latin'] });
export default function StorySection() {
  return (
    <div
      id='story'
      className={styles.storySection}
      style={{
        fontFamily: alegreyaFont.style.fontFamily,
      }}
    >
      <div className={styles.content}>
        <div className={styles.title}>
          Lịch trình Hôn lễ
          <img src={'/leaves/leaf-01.png'} className={styles.leaf} />
        </div>
        <VerticalTimeline layout={'1-column-left'}>
          <VerticalTimelineElement
            position={'right'}
            className='vertical-timeline-element--work'
            date='17h00, ngày 16 tháng 01 năm 2024'
            iconStyle={{ backgroundColor: '#362222', color: 'white' }}
            icon={<IconHeartFill />}
          >
            <h3 className='vertical-timeline-element-title'>Đón khách & chụp ảnh</h3>
            {/*<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
            {/*<p>*/}
            {/*  Viết gì đó sến sẩm*/}
            {/*</p>*/}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position={'right'}
            className='vertical-timeline-element--work'
            date='18h00, ngày 16 tháng 01 năm 2024'
            iconStyle={{ backgroundColor: '#362222', color: 'white' }}
            icon={<IconHeartFill />}
          >
            <h3 className='vertical-timeline-element-title'>Làm lễ và khai tiệc</h3>
            {/*<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
            {/*<p>*/}
            {/*  Viết gì đó sến sẩm*/}
            {/*</p>*/}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position={'right'}
            className='vertical-timeline-element--work'
            date='19h00, ngày 16 tháng 01 năm 2024'
            iconStyle={{ backgroundColor: '#362222', color: 'white' }}
            icon={<IconHeartFill />}
          >
            <h3 className='vertical-timeline-element-title'>Giao lưu và chia sẻ</h3>
            {/*<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
            {/*<p>*/}
            {/*  Viết gì đó sến sẩm*/}
            {/*</p>*/}
          </VerticalTimelineElement>
          <VerticalTimelineElement
            position={'right'}
            className='vertical-timeline-element--work'
            date='20h00, ngày 16 tháng 01 năm 2024'
            iconStyle={{ backgroundColor: '#362222', color: 'white' }}
            icon={<IconHeartFill />}
          >
            <h3 className='vertical-timeline-element-title'>Kết thúc chương trình</h3>
            {/*<h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>*/}
            {/*<p>*/}
            {/*  Viết gì đó sến sẩm*/}
            {/*</p>*/}
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}
