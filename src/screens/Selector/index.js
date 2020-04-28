import React, { useState } from 'react'

const items = [
  {
    id: 1,
    title: 'Веб-разработка',
    price: 300,
  },
  {
    id: 2,
    title: 'Дизайн',
    price: 400,
  },
  {
    id: 3,
    title: 'Интеграция',
    price: 250,
  },
  {
    id: 4,
    title: 'Обучение',
    price: 220,
  },
];

const Selector = () => {
  const [selectedItems, setItem] = useState([]);

  const handleClick = item => {
    if (selectedItems.find(selectedItem => selectedItem.id === item.id)) {
      return setItem(selectedItems.filter(selectedItem => selectedItem.id !== item.id));
    }

    setItem([...selectedItems, item])
  }

  const renderItem = () => items.map(item => {
    const currentItem = selectedItems.find(selectedItem => selectedItem.id === item.id);
    const className = currentItem ? 'active' : '';

    return (
      <li onClick={() => handleClick(item)} key={item.id} className={className}>
        {item.title}
        <span>${item.price}.00</span>
      </li>
    );
  })

  const totalPrice = selectedItems.reduce((acc, item) => acc += item.price, 0);

  return (
    <form>
      <h1>Услуги</h1>
      <ul>
        {renderItem()}
      </ul>
      <div className="total">
        Итого: <span>${totalPrice}.00</span>
      </div>
    </form>
  )
};

export default Selector;
