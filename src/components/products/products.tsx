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
    <div className="main-container" style={{ display: 'flex' }}>
      <div className="categories-container" style={{ display: 'flex' }}>
        Categories
      </div>
      <div className="products-container" style={{ display: 'flex' }}>
        <div ref={containerRef} className="gl-container">
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
