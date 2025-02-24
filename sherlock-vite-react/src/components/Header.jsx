import Cart from "./Cart";

function Header({ cart, onRemoveFromCart }) {
  return (
    <header className="header">
      <img src="https://static.thenounproject.com/png/221829-200.png" alt="Logo" />
      <Cart cart={cart} onRemoveFromCart={onRemoveFromCart} />
    </header>
  );
}

export default Header;