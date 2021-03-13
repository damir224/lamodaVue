<template>
  <div>
    <input 
    type="text"
    class="px-3 py-2 transition duration-100 border rounded shadow-sm"
    placeholder="Type here..."
    v-model="newNote">
    <button 
    class="px-4 py-2 duration-100 ease-in-out" 
    @click="addNoteToAYS()">
    Send
    </button>
  </div>
</template>


<script>
export default{
  data() {
    return {
      newNote: '',
    }
  },
methods: {
    addNoteToAYS() {
      this.$emit('addNoteToAYS', this.newNote)
      this.newNote = ''
    }
  }
}
</script>
