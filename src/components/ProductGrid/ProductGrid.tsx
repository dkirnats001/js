import styles from './ProductGrid.module.css';
import ProductCard from '../ProductCard/ProductCard';

// Импортируем все картинки пирожных
import castle from '../../assets/кремовый замок.jpg';
import raspberry from '../../assets/малиновый рай.jpg';
import firework from '../../assets/фейерверк.jpg';
import chocolate from '../../assets/шоколадный мир.jpg';
import dragon from '../../assets/слёзы дракона.jpg';
import summer from '../../assets/летняя фантазия.jpg';
import madness from '../../assets/мыс безумия.jpg';
import cloud from '../../assets/облачная сказка.jpg';
import knight from '../../assets/тёмный рыцарь.jpg';

// МАССИВ с данными о всех пирожных (9 штук)
const products = [
  { id: 1, name: 'Кремовый замок', description: 'Нежный крем любого цвета на выбор, вафельная основа', price: 150, image: castle },
  { id: 2, name: 'Малиновый рай', description: 'Воздушный крем, темная основа и ягода малины', price: 150, image: raspberry },
  { id: 3, name: 'Фейерверк', description: 'Разноцветные крем, с бисквитной основой', price: 150, image: firework },
  { id: 4, name: 'Шоколадный мир', description: 'Ореховая стружка, нежный крем и шоколадная основа', price: 150, image: chocolate },
  { id: 5, name: 'Слёзы дракона', description: 'Нежный крем любого цвета на выбор, вафельная основа', price: 150, image: dragon },
  { id: 6, name: 'Летняя фантазия', description: 'Украшения в форме сердец, для любимого человека', price: 150, image: summer },
  { id: 7, name: 'Мыс безумия', description: 'Разноцветная основа, стружка и нежный крем', price: 150, image: madness },
  { id: 8, name: 'Облачная сказка', description: 'Светлая основа, нежный крем со стружкой сверху', price: 150, image: cloud },
  { id: 9, name: 'Тёмный рыцарь', description: 'Тёмная основа, нежный крем и вкусные шарики', price: 150, image: knight },
];

interface ProductGridProps {
  onOpenModal: (productName: string, quantity: number, totalPrice: number) => void;
}

const ProductGrid = ({ onOpenModal }: ProductGridProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.header}>Для любых событий и дорогих вам людей</span>
      <div className={styles.content}>
        {/* ЦИКЛИЧЕСКИЙ РЕНДЕРИНГ: пробегаем по массиву products и для каждого создаём ProductCard */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;