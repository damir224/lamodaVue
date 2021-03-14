<template>
  <div class="about">
    <h1>Tell us about yourself:</h1>
    <AddAbout @addNoteToAYS='addNote' />
    <ListAbout :notes="notes" />
  </div>
</template>
<script>
import AddAbout from '../components/AddAbout.vue'
import ListAbout from '../components/ListAbout.vue'

export default({
  name: 'About',
  components: {
    AddAbout,
    ListAbout
  },
  data() {
    return {
      notes: [
        {title: 'test1'},
        {title: 'test2'},
        {title: 'test3'},
      ]
    }
  },
  methods: {
  addNote (data) {
    this.notes.push({title:data})
  }
}
})
</script>

// manufacturer
// products: state => state.products.all
