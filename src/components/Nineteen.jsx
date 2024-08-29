//Shopping Cart (ADD and REMOVE)
import React from "react";
import { useCart } from "./NineteenContext";

function Nineteen() {
  const { cartState, cartDispatch } = useCart();

  const addToCart = (item) => {
    const existingCartItem = cartState.cartItems.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingCartItem) {
      cartDispatch({
        type: "UPDATE_QUANTITY",
        payload: { id: item.id, quantity: existingCartItem.quantity + 1 },
      });
    } else {
      cartDispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: 1 } });
    }
  };


  const updateQuantity = (itemId, quantity)=>{
    if(quantity>0){
        cartDispatch({
            type: "UPDATE_QUANTITY",
            payload: { id: itemId, quantity },
          });
    }
  }

  const remove = (itemId) =>{
    cartDispatch({
        type: "REMOVE",
        payload: itemId,
      });
  }

  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
  ];
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartState.cartItems.map((item) => (
        <li key={item.id}>
          {item.name} - {item.quantity}{" "}
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            -
          </button>
          <button onClick={()=> remove(item.id)}>Remove</button>
        </li>
      ))}
      <h2>Product List</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => addToCart(item)}>Add Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nineteen;
