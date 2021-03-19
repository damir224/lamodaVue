<template>
<main class="my-8">
        <div class="container mx-auto px-6">
            <div class="md:flex md:items-center">
                <div class="w-full h-64 md:w-1/2 lg:h-96">
                    <img class="h-full w-full rounded-md object-cover max-w-lg mx-auto" v-bind:src="prod.imageUrl"  alt="Nike Air">
                </div>
                <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                    <h3 class="text-gray-700 uppercase text-lg">{{prod.name}}</h3>
                    <span class="text-gray-500 mt-3">${{prod.cost_in_credits}}</span>
                    <hr class="my-3">
                    <div class="mt-2">
                        <label class="text-gray-700 text-sm" for="count">About whis model:</label>
                        <div class="flex-row items-center mt-1">
                            <b>Model:</b> {{prod.model}}
                            <br>
                            <b>Manufacturer:</b> {{prod.manufacturer}}
                            <br>
                            <b>Starship class:</b> {{prod.starship_class}}
                        </div>
                    </div>
                    <div class="flex items-center mt-6">
                        <button class="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500" @click="addProductToCart(prod)">Add to card</button>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="bg-gray-200">
        <div class="container mx-auto px-6 py-3 flex justify-between items-center">
            <a href="#" class="text-xl font-bold text-gray-500 hover:text-gray-400">Brand</a>
            <p class="py-2 text-gray-500 sm:py-0">All rights reserved</p>
        </div>
    </footer>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['id'],
  computed: mapState({
    prod () {
      let index = 0
      this.$store.state.products.all.forEach((element, i) => {
        element.id === +this.id ? index=i : element
      });
      return this.$store.state.products.all[index]
    },
  }),
  methods: {
    ...mapActions('cart', [
      'addProductToCart'
    ]),
  },
}
</script>
