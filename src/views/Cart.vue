<template>
  <div class="cart">
    <h1>This is an CART page</h1>
    <div class="cart">
      <h2>Your Cart</h2>
      <p v-show="!products.length"><i>Please add some products to cart.</i></p>
      <ul>
          <hr>
          <li
            v-for="product in products"
            :key="product.id">
            {{ product.title }} - {{ product.price }}$ x {{ product.quantity }}
          <button @click="dellProductFromCart(product)">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
          </li>
          <hr>
      </ul>
      <p>Total: {{ total }}$</p>
      <p><button :disabled="!products.length" @click="checkout(products)">Checkout</button></p>
      <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus,
      cart: state => state.cart.items
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    },
    ...mapActions('cart', [
      'dellProductFromCart'
    ]),
  }
}
</script>

