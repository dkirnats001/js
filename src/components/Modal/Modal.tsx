import { useState } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  quantity: number;
  totalPrice: number;
}

const Modal = ({ isOpen, onClose, productName, quantity, totalPrice }: ModalProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');
  const [consent, setConsent] = useState(false);

  // Проверяем, можно ли отправить форму (имя, телефон и согласие обязательны)
  const isFormValid = name.trim() !== '' && phone.trim() !== '' && consent;

  const handleSubmit = () => {
    if (isFormValid) {
      alert(`Спасибо за заказ! Вы заказали ${productName} в количестве ${quantity} шт. на сумму ${totalPrice} ₽. Мы скоро свяжемся с вами.`);
      onClose();
      // Очищаем форму
      setName('');
      setPhone('');
      setEmail('');
      setTime('');
      setConsent(false);
    }
  };

  // Если модальное окно закрыто — ничего не показываем
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        <h2>Оформление заказа</h2>
        <p>Вы заказали: {productName} — {quantity} шт. на сумму {totalPrice} ₽</p>
        <p>Мы перезвоним вам, чтобы уточнить детали</p>
        
        <div className={styles.formGrid}>
          <input 
            type="text" 
            placeholder="Имя" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="tel" 
            placeholder="Телефон" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Почта" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Удобное время для звонка" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        
        <div className={styles.checkbox}>
          <input 
            type="checkbox" 
            id="consent" 
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
          />
          <label htmlFor="consent">Я согласен на обработку персональных данных</label>
        </div>
        
        <div className={styles.modalFooter}>
          <button 
            className={styles.submitBtn} 
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Сделать заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;