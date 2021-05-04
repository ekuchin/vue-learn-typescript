<template>
  <div class="hello">
    <h1>Список котов</h1>
    <ul>
      <li v-for="cat,index in cats" :key="index">
         <p> {{cat.breed}} {{cat.name}}, вес {{cat.weight}}, {{cat.isAngry ? "сердит": "дружелюбен"}} </p>
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {Cat} from "@/types/cat"

export default defineComponent({
  name: 'HelloWorld',
  props: {
    cats:{
      type:Object as PropType<Cat[]>,
      required:true
    }
  },
  data() {
    return {

    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {

  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
