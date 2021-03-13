// initial state
// shape: [{ id, quantity }]
const state = () => ({
  aboutYourSelf: [],
});
// getters
const getters = {
  allNotesAYS: (state, getters, rootState) => {
    return state.aboutYourSelf.map(({ id, quantity }) => {
      const product = rootState.products.all.find(
        (product) => product.id === id
      );
      return {
        title: product.name,
        price: product.cost_in_credits,
        quantity,
      };
    });
  },

  cartTotalPrice: (state, getters) => {
    return getters.allNotesAYS.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  },
};

// actions
const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.aboutYourSelf];
    // empty cart
    commit('setCartItems', { aboutYourSelf: [] });
    shop.buyProducts(products, () => {
      // rollback to the cart saved before sending the request
      commit('setCartItems', { aboutYourSelf: savedCartItems });
    });
  },

  addNoteToAYS({ state, commit }, product) {
    if (product.inventory > 0) {
      const cartItem = state.aboutYourSelf.find(
        (item) => item.id === product.id
      );
      if (!cartItem) {
        commit('pushAYS', { id: product.id });
      }
      // remove 1 item from stock
      commit(
        'products/decrementProductInventory',
        { id: product.id },
        { root: true }
      );
    }
  },
};

// mutations
const mutations = {
  pushAYS(state, { id, note }) {
    state.aboutYourSelf.push({
      id,
      note,
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
