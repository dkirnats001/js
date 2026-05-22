import { useState } from 'react';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  onOpenModal: (productName: string, quantity: number, totalPrice: number) => void;
}

const ProductCard = ({ name, description, price, image, onOpenModal }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleOrder = () => {
    if (quantity === 0) {
      setQuantity(1);
      onOpenModal(name, 1, price);
    } else {
      onOpenModal(name, quantity, quantity * price);
    }
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.cardImage} />
      <div className={styles.text}>
        <div className={styles.description}>
          <div className={styles.descHeader}>{name}</div>
          <div className={styles.descText}>{description}</div>
        </div>
        <div className={styles.costButton}>
          <div className={styles.cost}>{price} ₽/шт.</div>
          {quantity === 0 ? (
            <button className={styles.orderBtn} onClick={handleOrder}>
              Заказать
            </button>
          ) : (
            <div className={styles.counter}>
              <button className={styles.counterBtn} onClick={decreaseQuantity}>−</button>
              <span className={styles.quantity}>{quantity}</span>
              <button className={styles.counterBtn} onClick={increaseQuantity}>+</button>
              <span className={styles.totalPrice}>{quantity * price} ₽</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;