import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../interfaces/product';

const initialState = {
  list: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productAdded: (state, action) => {
      (state.list as Product[]).push(action.payload as Product);
    },
    productsSetData: (state, action) => {
      (state.list as Product[]) = [...action.payload as Product[]];
      state.status = 'succeeded';
    },
    productUpdated: (state, action) => {
      const { uuid, name, description, slug, category_uuid, offers_min_price, offers, seo_description, article, images, properties } = action.payload;
      const targetProduct: Product | undefined = (state.list as Product[]).find((product: Product) => product.uuid === uuid);
      if (targetProduct) {
        targetProduct.name = name;
        targetProduct.description = description;
        targetProduct.slug = slug;
        targetProduct.category_uuid = category_uuid;
        targetProduct.offers_min_price = offers_min_price;
        targetProduct.offers = offers;
        targetProduct.seo_description = seo_description;
        targetProduct.article = article;
        targetProduct.images = images;
        targetProduct.properties = properties;
      }
    },
  },
});

export const { productAdded, productsSetData, productUpdated } = productsSlice.actions;

export default productsSlice.reducer;
