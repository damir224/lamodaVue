import { createStore, createLogger } from 'vuex';
import products from './modules/production.js';
import cart from './modules/cart.js';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
  modules: {
    products,
    cart,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
