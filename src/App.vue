<template>
  <div>
    <nav>
      <div class="flex justify-around p-8">
        <div>
          <router-link class="text-gray-800 " to="/items">ItemList</router-link> |
          <router-link class="text-gray-800 " to="/about">About</router-link>
        </div>
        <div>
          <router-link class="text-gray-800 " to="/">Home</router-link>
        </div>
        <div>
          <router-link class="text-gray-800 " to="/login">Login</router-link> |
          <router-link class="text-gray-800 " to="/cart">Cart</router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

