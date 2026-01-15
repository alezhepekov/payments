import { useSelector } from 'react-redux';

function Cart() {
  const products = useSelector(state => (state as any).products.list);
  console.log(products);

  return (
    <div>
      Cart
    </div>
  );
}

export default Cart;
