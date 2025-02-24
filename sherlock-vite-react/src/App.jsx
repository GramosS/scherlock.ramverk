import { useState } from "react";
import Header from "./components/Header";
import Product from "./components/product";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]); 

  const books = [
    { id: 1, title: "A Sign of Four", author: "Sir Arthur Conan Doyle", description: "Lorem ipsum dolor sit amet." },
    { id: 2, title: "A Study in Scarlet", author: "Sir Arthur Conan Doyle", description: "Lorem ipsum dolor sit amet." },
    { id: 3, title: "Baskervilles Hound", author: "Sir Arthur Conan Doyle", description: "Lorem ipsum dolor sit amet." },
    { id: 4, title: "The Adventures of Sherlock Holmes", author: "Sir Arthur Conan Doyle", description: "Lorem ipsum dolor sit amet." }
  ];

 
  const addToCart = (book) => {
    if (!cart.some(item => item.id === book.id)) {
      setCart([...cart, book]);
    }
  };

  
  const removeFromCart = (bookId) => {
    setCart(cart.filter(item => item.id !== bookId));
  };

  return (
    <div>
      <Header cart={cart} onRemoveFromCart={removeFromCart} />
      <div className="product-list">
        {books.map((book) => (
          <Product 
            key={book.id} 
            title={book.title} 
            author={book.author} 
            description={book.description}
            onAddToCart={() => addToCart(book)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;