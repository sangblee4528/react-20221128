/* 리액트 useContext
https://cocoon1787.tistory.com/801
*/
import React, { useState, createContext } from 'react';
import Mart from './Mart/Mart';

export const AppContext01 = createContext();

const initialItems = {
  drink: [
    { name: 'Powerade', price: '1800' },
    { name: 'Coca Cola', price: '1100' },
  ],
};

function AppContext() {
  const [items, setItem] = useState(initialItems);

  const addDrink = (newDrink) => {
    setItem({ ...items, drink: [...items.drink, newDrink] });
  };

  return (
    <div>
      <AppContext01.Provider value={{ items, addDrink }}>
        <Mart />
      </AppContext01.Provider>
    </div>
  );
}

export default AppContext;
