import './product-card.css';

function ProductCard(props: any) {
  return (
    <div style={{ borderRadius: '20px', backgroundColor: 'white' }}>
      <div style={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle' }}>
        <img src={props?.product?.images[0]?.original_url} alt="Product" style={{  marginTop: '0', width: 'auto', height: '150px' }} />
      </div>
      <div style={{ margin: '0 10px' }}>{props?.product?.name}</div>
      <div style={{ display: 'flex' }}>
        <div style={{ margin: '10px', width: '50%' }}>
          <span>{props?.product?.offers[0]?.price}</span>
          <span> {props?.product?.offers[0]?.currency}</span>
          <span> / {props?.product?.offers[0]?.unit}</span>
        </div>
        <div style={{ margin: '10px', width: '50%', color: 'green' }}>В наличии</div>
      </div>
      <div style={{ display: 'flex', margin: '0 10px', border: '1px solid gray', borderRadius: '5px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle', width: '20%', margin: '0' }}>-</div>
        <div style={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle', width: '60%', margin: '0' }}>
          <span>{props?.product?.offers[0]?.quantity}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle', width: '20%', margin: '0' }}>+</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', verticalAlign: 'middle' }}>
        <button type="button" style={{ margin: '5px 10px', padding: '5px', borderRadius: '5px', color: 'white', backgroundColor: 'blue' }}>Добавить в корзину</button>
      </div>
    </div>
  );
}

export default ProductCard;
