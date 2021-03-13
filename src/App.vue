<template>
  <div>
    <nav>
      <div class="flex justify-around p-8">
        <div>
          <router-link class="text-gray-800 " to="/man">Man</router-link> |
          <router-link class="text-gray-800 " to="/woman">Woman</router-link> |
          <router-link class="text-gray-800 " to="/about">About</router-link>
        </div>
        <div>
          <router-link class="text-gray-800 " to="/">Home</router-link>
        </div>
        <div>
          <router-link class="text-gray-800 " to="/login">Login</router-link> |
          <router-link class="text-gray-800 " to="/card">Card</router-link>
        </div>
      </div>
      <router-view/>
    </nav>
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
