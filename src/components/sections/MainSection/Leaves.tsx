import styles from './MainSection.module.scss';

export default function Leaves() {
  return (
    <>
      <img src={'/leaves/leaf-04.png'} className={styles.leaf04} />
      <img src={'/leaves/leaf-05.png'} className={styles.leaf05} />
      <img src={'/leaves/flower-01.png'} className={styles.flower} />
    </>
  );
}
