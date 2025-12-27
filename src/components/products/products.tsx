import { useContainerWidth, ReactGridLayout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './products.css';

function Products() {
  const { width, containerRef, mounted } = useContainerWidth();

  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ];

  return (
    <div ref={containerRef} style={{ width: '100%', height: '500px' }}>
      {mounted && (
        <ReactGridLayout
          layout={layout}
          width={width}
        >
          {}
          <div key="a" className="product-card">a</div>
          <div key="b" className="product-card">b</div>
          <div key="c" className="product-card">c</div>
        </ReactGridLayout>
      )}
    </div>
  );
}

export default Products;
