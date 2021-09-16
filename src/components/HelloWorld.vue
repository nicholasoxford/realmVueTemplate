<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>
// <script setup>
// import { useQuery, useResult } from "@vue/apollo-composable";
// import { computed } from 'vue'
// import gql from "graphql-tag";
// const { result} = useQuery(gql`
//   query AllShips {
//     shipwrecks {
//       _id
//       chart
//       coordinates
   
//     }
//   }
// `);
// const points = useResult(result)
// const messages = computed(() => points.value ? points.value.map(x => x.coordinates) : [[]])
// const center = [-72.333336, 18.533333];
// const projection = "EPSG:4326";
// const zoom = 9;
// const rotation = 0;
// const radius = 10;
// const strokeWidth = 4;
// const strokeColor = "red";
// const fillColor = "white";
// </script>
<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
