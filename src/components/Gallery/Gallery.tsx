import styles from './Gallery.module.css';

// Импортируем все фото для галереи (9 штук)
import photo1 from '../../assets/photo.jpg';
import photo2 from '../../assets/photo-2.jpg';
import photo3 from '../../assets/photo-3.jpg';
import photo4 from '../../assets/photo-4.jpg';
import photo5 from '../../assets/photo-5.jpg';
import photo6 from '../../assets/photo-6.jpg';
import photo7 from '../../assets/photo-7.jpg';
import photo8 from '../../assets/photo-8.jpg';
import photo9 from '../../assets/photo-9.jpg';

// Массив с фото
const galleryImages = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];

const Gallery = () => {
  return (
    <div className={styles.container2}>
      <span className={styles.title}>Сделали более 3.000 заказов за 2 года</span>
      <span className={styles.subtitle}>Посмотрите фото реальных заказов из нашего instagram</span>
      <div className={styles.content2}>
        {/* Цикл для отображения всех фото */}
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className={styles.card2} 
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;