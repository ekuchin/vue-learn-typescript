<template>
  <div class="hello">
    <h1>Список котов - {{catsCount}} штук </h1>
    <ul>
      <li v-for="cat,index in cats" :key="index">
         <p> {{cat.breed}} {{cat.name}}, вес {{cat.weight}}, {{cat.isAngry ? "сердит": "дружелюбен"}} </p>
      </li>
    </ul>

    <h1>Поглажено котов: {{likedCount}}</h1>
    <button @click="likeCat(1)">Погладь кота, ...</button>
    <button @click="likeCat(2)">Погладь двух котов, ...</button>

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
     likedCount:0 as number
    }
  },
  computed:{
    catsCount():number{
      return this.$props.cats.length
    }
  },
  methods:{
    likeCat(count:number){
      this.likedCount+=count;
    }
  }

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
