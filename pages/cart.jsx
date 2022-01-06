import styles from '../styles/Cart.module.css';
import Image from 'next/image';

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.tr}>
            <th>asdq</th>
            <th>qasd</th>
            <th>qwqweq</th>
            <th>qweasd</th>
            <th>qasdas</th>
          </tr>
          <tr>
            <td>
              <div className={imgContainer}>
                <Image src="/img/qwe.jpg" layout="fill" objectFit="cover" />
              </div>
            </td>
            <td>
              <span className={styles.name}>NAME</span>
            </td>
            <td>
              <span className={styles.extras}>Double, spicy</span>
            </td>
            <td>
              <span className={styles.price}>Amount of money</span>
            </td>
            <td>
              <span className={styles.quantity}>quantity</span>
            </td>
            <td>
              <span className={styles.total}>total</span>
            </td>
          </tr>
        </table>
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>$79.60
            </div>
            <button className={styles.button}>CHECKOUT NOW!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
