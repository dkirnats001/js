import styles from './Hero.module.css';
import bgImage from '../../assets/bg-2.jpg';
import berry2 from '../../assets/berry-2.png';
import berry3 from '../../assets/berry-3.png';
import berry4 from '../../assets/berry-4.png';
import leaf3 from '../../assets/leaf-2.png';
import icon from '../../assets/icon.png';
import vector from '../../assets/Vector.png';

const Hero = () => {
  return (
    <div className={styles.container0} style={{ backgroundImage: `url(${bgImage})` }}>
      {/* ШАПКА */}
      <div className={styles.shapka}>
        <span className={styles.nasvanie}>Сладкий сундук</span>
        <span className={styles.icon}>
          <img src={icon} alt="icon" />
        </span>
        <span className={styles.adres}>г. Санкт Петербург, ул. Куйбышева 31</span>
        <span className={styles.icon2}>
          <img src={vector} alt="vector" />
        </span>
        <span className={styles.nomer}>8 (812) 844-95-49</span>
        <span className={styles.grafik}>Ежедневно с 9:00 до 20:00</span>
      </div>

      {/* КНОПКА "ВКУСНЕЙШИЕ" */}
      <button className={styles.tastybutton}>вкуснейшие</button>

      {/* ЗАГОЛОВКИ */}
      <h1 className={styles.header0}>Пирожные и капкейки от 150 ₽/шт. с доставкой по Санкт Петербургу</h1>
      <span className={styles.header01}>Приготовим за 3 часа в день заказа. Доставка на авто в холодильнике.</span>

      {/* КНОПКА "ПЕРЕЙТИ В КАТАЛОГ" */}
      <button className={styles.katalogbutton}>Перейти в каталог</button>

      {/* ТЕКСТ "9 РАЗЛИЧНЫХ ВИДОВ" */}
      <p className={styles.header02}>9 различных видов на выбор</p>

      {/* ДЕКОРАТИВНЫЕ ЭЛЕМЕНТЫ */}
      <div className={styles.malinka1} style={{ backgroundImage: `url(${berry3})` }}></div>
      <div className={styles.malinka2} style={{ backgroundImage: `url(${berry4})` }}></div>
      <div className={styles.malinka} style={{ backgroundImage: `url(${berry2})` }}></div>
      <div className={styles.list3} style={{ backgroundImage: `url(${leaf3})` }}></div>
    </div>
  );
};

export default Hero;