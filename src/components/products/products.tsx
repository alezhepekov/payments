import { useContainerWidth, ReactGridLayout } from 'react-grid-layout';
import { useQuery } from 'react-query';
import { useAppDispatch } from '../../redux/hooks';
import { productsSetData } from '../../redux/reducers/products-slice';
import { Product } from '../../interfaces/product';
import config from '../../config.json';
import ProductCard from '../product-card/product-card';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './products.css';

const fetchProducts = async () => {
  const res = await fetch(`${config.apiUrl}/products`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

function Products() {
  const { width, containerRef, mounted } = useContainerWidth();
  const dispatch = useAppDispatch()

  const { isLoading, isError, data, error } = useQuery({
      queryKey: ['products'],
      queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <span>Loading...</span>
    );
  }

  if (isError) {
    return (
      <span>Error: {(error as any).message}</span>
    );
  }

  const products: Product[] = [...data.data];
  dispatch(productsSetData(products));

  let layout: any[] = [];
  let y: number = 0;
  products.forEach((product: Product, index: number) => {
    layout.push(
      { i: product.uuid, x: (index % 4) * 3, y: index > 0 && index % 4 === 0 ? y += 2 : y, w: 3, h: 2, static: true },
    );
  });

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <div style={{ display: 'flex', width: '15%', height: '100%' }}>
        Categories
      </div>
      <div style={{ display: 'flex', width: '85%', height: '100%' }}>
        <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
          {mounted && (
            <ReactGridLayout
              layout={layout}
              width={width}>
              {products.map((product: Product) => (
                <div key={product.uuid} className="product-card-container">
                  <ProductCard product={product}></ProductCard>
                </div>
              ))}
            </ReactGridLayout>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
