import './product-card.css';

function ProductCard(props: any) {
  return (
    <div>{props?.product?.uuid}</div>
  );
}

export default ProductCard;
