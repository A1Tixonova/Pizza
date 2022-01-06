import React, { useState } from 'react';
import styles from '../../styles/Product.module.css';
import Image from 'next/image';

const Product = () => {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: '/img/qwe.jpg',
    name: 'CAMPAGNOLA',
    price: [19.9, 23.9, 27.9],
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis arcu purus, rhoncus fringilla vestibulum vel, dignissim vel ante. Nulla facilisi. Nullam a urna sit amet tellus pellentesque egestas in in ante.',
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.choose}>Choose the size</p>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/qwe.jpg" layout="fill" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size}>
            <Image
              src="/img/qwe.jpg"
              layout="fill"
              onClick={() => setSize(1)}
            />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size}>
            <Image
              src="/img/qwe.jpg"
              layout="fill"
              onClick={() => setSize(2)}
            />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose option</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double ingredients</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}></button>
        </div>
      </div>
    </div>
  );
};

export default Product;
