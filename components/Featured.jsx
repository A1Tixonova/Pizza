import styles from '../styles/Featured.module.css';
import Image from 'next/image';
import { useState } from 'react';

const Featured = () => {
  const images = ['/img/qwe.jpg'];
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === 'l') {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === 'r') {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: '0' }}
        onClick={() => handleArrow('1')}
      >
        <Image src="/img/qwe.jpg" layout="fill" objectFit="contain" />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, index) => (
          <div className={styles.imgContainer} key={index}>
            <Image src={img} layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: '0' }}
        onClick={() => handleArrow('1')}
      >
        <Image src="/img/qwe.jpg" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Featured;
