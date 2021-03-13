<template>
  <div>
    <ul>
      <li v-for="(note, index) of notes" :key="index">
        {{index+1}}. {{note.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default ({
  name: 'listAbout',
  props: {
    notes: {
      type: Array
    }
  },
  data() {
    return []
  },
})
</script>
