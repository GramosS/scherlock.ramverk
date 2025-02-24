function Cart({ cart, onRemoveFromCart }) {
    return (
      <div className="cart">
        <span>Cart</span>
        <span className="cart-count">{cart.length}</span> {/* Visar antal produkter i varukorgen */}
        {cart.map((item) => (
          <div key={item.id}>
            {item.title} 
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default Cart;