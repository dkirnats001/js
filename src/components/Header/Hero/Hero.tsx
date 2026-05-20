import styles from './Hero.module.css';
import bgImage from '../../assets/bg-2.jpg';
import berry2 from '../../assets/berry-2.png';
import berry3 from '../../assets/berry-3.png';
import berry4 from '../../assets/berry-4.png';
import leaf3 from '../../assets/leaf-2.png';

const Hero = () => {
  return (
    <div className={styles.container0} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.blok}>
        <button className={styles.btn}>вкуснейшие</button>
        <h1 className={styles.title2}>Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу</h1>
        <span className={styles.subtitle2}>Приготовим за 3 часа в день заказа. Доставка на авто в холодильнике.</span>
        <button className={styles.mainBut}>Перейти в каталог</button>
        <p className={styles.textBut}>9 различных<br />видов на выбор</p>
      </div>
      <div className={styles.berry2} style={{ backgroundImage: `url(${berry2})` }}></div>
      <div className={styles.berry3} style={{ backgroundImage: `url(${berry3})` }}></div>
      <div className={styles.berry4} style={{ backgroundImage: `url(${berry4})` }}></div>
      <div className={styles.leaf3} style={{ backgroundImage: `url(${leaf3})` }}></div>
    </div>
  );
};

export default Hero;