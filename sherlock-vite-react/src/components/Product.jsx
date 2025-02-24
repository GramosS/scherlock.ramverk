function Product({ title, author, description, onAddToCart }) {
    return (
      <div className="product-card">
        <h2>{title}</h2>
        <p>Av {author}</p>
        <p>{description}</p>
        <button onClick={onAddToCart}>Add to cart</button>
      </div>
    );
  }
  
  export default Product;