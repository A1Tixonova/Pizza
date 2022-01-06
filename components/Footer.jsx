import styles from '../styles/Footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/qwe.jpg" layout="fill" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            aliquam.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND THIS ON THE MAP</h1>
          <p className={styles.text}>
            156415. ROands 9123
            <br /> EQWEQWe
            <br /> Phone numba
          </p>
          <p className={styles.text}>
            156415. ROands 9123
            <br /> EQWEQWe
            <br /> Phone numba
          </p>
          <p className={styles.text}>
            156415. ROands 9123
            <br /> EQWEQWe
            <br /> Phone numba
          </p>
          <p className={styles.text}>
            156415. ROands 9123
            <br /> EQWEQWe
            <br /> Phone numba
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Working Hours</h1>
          <p className={styles.text}>
            Monday until friday
            <br /> 9 - 12
          </p>
          <p className={styles.text}>
            sat - sun
            <br /> 12 - 24
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
