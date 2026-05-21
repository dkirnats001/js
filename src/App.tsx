import { useState } from 'react';
import Hero from './components/Hero/Hero';
import ProductGrid from './components/ProductGrid/ProductGrid';
import Gallery from './components/Gallery/Gallery';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ name: '', quantity: 0, totalPrice: 0 });

  const handleOpenModal = (productName: string, quantity: number, totalPrice: number) => {
    setSelectedProduct({ name: productName, quantity, totalPrice });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Hero />
      <ProductGrid onOpenModal={handleOpenModal} />
      <Gallery />
      <Modal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        productName={selectedProduct.name}
        quantity={selectedProduct.quantity}
        totalPrice={selectedProduct.totalPrice}
      />
    </div>
  );
}

export default App;