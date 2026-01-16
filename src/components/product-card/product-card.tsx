import './product-card.css';

function ProductCard(props: any) {
  return (
    <div className="product-card">
      <div className="product-card-image-container">
        <img src={props?.product?.images[0]?.original_url} alt="Product" className="product-card-image" />
      </div>
      <div className="product-card-name">{props?.product?.name}</div>
      <div className="product-card-price-and-status-container">
        <div className="product-card-price-container">
          <span>{props?.product?.offers[0]?.price}</span>
          <span> {props?.product?.offers[0]?.currency}</span>
          <span> / {props?.product?.offers[0]?.unit}</span>
        </div>
        <div className="product-card-status-container">В наличии</div>
      </div>
      <div className="product-card-quantity-container">
        <div className="product-card-quantity-minus">-</div>
        <div className="product-card-quantity">
          <span>{props?.product?.offers[0]?.quantity}</span>
        </div>
        <div className="product-card-quantity-plus">+</div>
      </div>
      <div className="product-card-actions-container">
        <button type="button" className="product-card-add-to-cart-button">Добавить в корзину</button>
      </div>
    </div>
  );
}

export default ProductCard;
