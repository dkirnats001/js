import styles from './Header.module.css';
import icon from '../../assets/icon.png';
import vector from '../../assets/Vector.png';

const Header = () => {
  return (
    <div className={styles.shapka}>
      <span className={styles.company}>Сладкий сундук</span>
      <div className={styles.ia}>
        <span className={styles.icon}>
          <img src={icon} alt="icon" />
        </span>
        <span className={styles.address}>г. Санкт Петербург, ул. Куйбышева 31</span>
      </div>
      <span className={styles.vector}>
        <img src={vector} alt="vector" />
      </span>
      <div className={styles.vnt}>
        <span className={styles.number}>8 (812) 844-95-49</span>
        <span className={styles.time}>Ежедневно с 9:00 до 20:00</span>
      </div>
    </div>
  );
};

export default Header;