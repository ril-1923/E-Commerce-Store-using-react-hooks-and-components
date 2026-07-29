import { createContext, useEffect, useState } from "react";

// Create Context
export const StoreContext = createContext();

function StoreProvider({ children }) {
  // Cart State
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [search, setSearch] = useState("");

  // Add Product To Cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove Product From Cart
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Clear Cart
  const clearCart = () => {
    setCart([]);
  };

  // Save Cart to Local Storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        search,
        setSearch,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;