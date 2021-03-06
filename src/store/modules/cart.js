import shop from '../../api/shop.js';

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  product: [],
  checkoutStatus: null,
});
// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(
        (product) => product.id === id
      );
      return {
        id: product.id,
        title: product.name,
        price: product.cost_in_credits,
        quantity,
      };
    });
  },

  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  },
};

// actions
const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.items];
    commit('setCheckoutStatus', null);
    // empty cart
    commit('setCartItems', { items: [] });
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed');
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems });
      }
    );
  },
  addProductToCart({ state, commit }, product) {
    console.log(1234);
    commit('setCheckoutStatus', null);
    if (product.inventory > 0) {
      const cartItem = state.items.find((item) => item.id === product.id);
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id });
      }
      // remove 1 item from stock
      commit(
        'products/decrementProductInventory',
        { id: product.id },
        { root: true }
      );
    }
  },
  dellProductFromCart({ state, commit }, product) {
    const cartItem = state.items.find((item) => item.id === product.id);
    if (cartItem) {
      commit('delProd', { id: product.id });
    }
    // add 1 item to stock
    commit(
      'products/incrementProductInventory',
      { id: product.id },
      { root: true }
    );
  },
  async getProduct({ commit }, id) {
    try {
      const cartItem = state.items.find((item) => item.id === id);
      const product = cartItem;
      commit('setProduct', product);
    } catch (e) {
      return Promise.reject(e);
    }
  },
};

// mutations
const mutations = {
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1,
    });
  },
  delProd(state, { id }) {
    state.items = state.items.filter((e) => e.id !== id);
  },
  setCartItems(state, { items }) {
    state.items = items;
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
