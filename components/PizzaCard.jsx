import React from 'react';
import styles from '../styles/PizzaCard.module.css';
import Image from 'next/image';

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/qwe.jpg" width="500" height="500" />
      <h1 className={styles.title}>NAME PIZZA 1</h1>
      <span className={styles.price}>$20.00</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
        blanditiis.
      </p>
    </div>
  );
};

export default PizzaCard;
