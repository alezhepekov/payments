import { useContainerWidth, ReactGridLayout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './products.css';

function Products() {
  const { width, containerRef, mounted } = useContainerWidth();

  const layout = [
    { i: 'i11', x: 0, y: 0, w: 3, h: 2, static: true },
    { i: 'i12', x: 3, y: 0, w: 3, h: 2, static: true },
    { i: 'i13', x: 6, y: 0, w: 3, h: 2, static: true },
    { i: 'i14', x: 9, y: 0, w: 3, h: 2, static: true },
    { i: 'i21', x: 0, y: 2, w: 3, h: 2, static: true },
    { i: 'i22', x: 3, y: 2, w: 3, h: 2, static: true },
    { i: 'i23', x: 6, y: 2, w: 3, h: 2, static: true },
    { i: 'i24', x: 9, y: 2, w: 3, h: 2, static: true },
  ];

  return (
    <div style={{ display: 'flex', width: '100%', height: '100%' }}>
      <div style={{ display: 'flex', width: '15%', height: '100%' }}>
        Categories
      </div>
        <div ref={containerRef} style={{ display: 'flex', width: '85%', height: '100%' }}>
          {mounted && (
            <ReactGridLayout
              layout={layout}
              width={width}>
              <div key="i11" className="product-card-container">i11</div>
              <div key="i12" className="product-card-container">i12</div>
              <div key="i13" className="product-card-container">i13</div>
              <div key="i14" className="product-card-container">i14</div>
              <div key="i21" className="product-card-container">i21</div>
              <div key="i22" className="product-card-container">i22</div>
              <div key="i23" className="product-card-container">i23</div>
              <div key="i24" className="product-card-container">i24</div>
            </ReactGridLayout>
          )}
        </div>
    </div>
  );
}

export default Products;
