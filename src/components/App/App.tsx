import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import Timer from '../Timer/Timer';

export default function App() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    console.log('First updated:', first);
  }, [first]);

  useEffect(() => {
    console.log('Second updated:', second);
  }, [second]);

  useEffect(() => {
    console.log('First or second updated:', first + second);
  }, [first, second]);

  const [clicks, setClicks] = useState(() => {
    // Зчитуємо значення за ключем
    const savedClicks = localStorage.getItem('saved-clicks');

    // Якщо там щось є, повертаємо це значення, як початкове значення стану
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }

    // У протилежному випадку повертаємо, яке-небудь значення за замовчуванням
    return 0;
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Запис у LocalStorage
  useEffect(() => {
    localStorage.setItem('saved-clicks', JSON.stringify(clicks));
  }, [clicks]);

  // 1. Тільки один раз після монтування
  useEffect(() => {
    console.log('You can see me only once!');
  }, []);

  // 2. Кожного разу, коли змінюється clicks
  useEffect(() => {
    console.log('Clicks updated:', clicks);
  }, [clicks]);

  // 3. При кожному рендері (бо без залежностей)
  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  });

  return (
    <>
      <h1>Main content of the page</h1>
      <div>
        <button onClick={() => setFirst(first + 1)}>First: {first}</button>
        <button onClick={() => setSecond(second + 1)}>Second: {second}</button>
      </div>
      <div>
        <button onClick={() => setClicks(clicks + 1)}>
          You clicked {clicks} times
        </button>
        <button onClick={() => setClicks(0)}>Reset</button>
      </div>
      <div>
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Hide Timer' : 'Show Timer'}
        </button>
        {isOpen && <Timer />}
      </div>
      <div>
        <button onClick={openModal}>Open modal</button>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <h2>Custom Modal Content</h2>
            <p>This is a reusable modal with dynamic content.</p>
          </Modal>
        )}
      </div>
    </>
  );
}
