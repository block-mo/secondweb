import React from 'react';
import { useState } from 'react';

// Function component for adding and removing fruits items
function FruitComponent() {
  const [items, setItems] = useState(['Apple','Orange','Watermelon','Banana']);
  const [inputValue, setInputValue] = useState('');
  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };
  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  return (
    <div>
      <h1 className='p-1 pl-5 font-extrabold text-2xl shadow-xl bg-pink-600'>Fruits</h1>
      <ul className='list-none mt-3 pl-5'>
        {items.map((item, index) => (
          <li className='mt-2' key={index}>
            {item}
            <button className='flex items-center pl-10 pr-10 bg-red-600 hover:bg-red-700 rounded-full' onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        className='m-5 border-2 border-green-400 hover:border-green-500 rounded-3xl'
        type="text"
        placeholder=' Add fruits here.. '
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='pl-10 pr-10 bg-green-600 hover:bg-green-700 rounded-full' onClick={addItem}>Add</button>
    </div>
  );
}
export default FruitComponent; 