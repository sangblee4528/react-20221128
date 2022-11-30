import React, { useContext } from 'react';
import { AppContext01 } from '../AppContext';

function Emart3F() {
  const newDrink = { name: 'HOT6', price: '1500' };
  const { items, addDrink } = useContext(AppContext01);

  return (
    <div>
      <h3>이마트 3층</h3>
      <div>
        음료수
        {items.drink.map((item, index) => {
          return (
            <div key={index}>
              {item.name}:{item.price}원
            </div>
          );
        })}
        <button onClick={() => addDrink(newDrink)}>음료 품목 추가</button>
      </div>
    </div>
  );
}

export default Emart3F;
