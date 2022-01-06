import React from 'react';
import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST THING IN THE WORLD</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit iure,
        sequi unde doloribus, illum officia quisquam accusantium culpa, ut
        incidunt blanditiis optio ipsum veritatis eos fugiat quos excepturi
        obcaecati nemo.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
