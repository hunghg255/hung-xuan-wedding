import { IconLetter } from '@app/components/icon/IconLetter';
import styles from './Sider.module.scss';
import { IconCalender } from '@app/components/icon/IconCalender';
import { IconHeart } from '@app/components/icon/IconHeart';
import { IconPencil } from '@app/components/icon/IconPencil';
import { IconAlbum } from '@app/components/icon/IconAlbum';
import { IconGift } from '@app/components/icon/IconGift';

export default function Sider() {
  return (
    <div className={styles.sider}>
      <a className={styles.item} href='#header'>
        <IconLetter />
      </a>
      <a className={styles.item} href='#calendar'>
        <IconCalender />
      </a>
      <a className={styles.item} href='#story'>
        <IconHeart />
      </a>
      <a className={styles.item} href='#album'>
        <IconAlbum />
      </a>
      <a className={styles.item} href='#gift'>
        <IconGift />
      </a>
    </div>
  );
}
