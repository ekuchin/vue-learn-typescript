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

    <form>
      <input v-model="newcat.name"/>
      <select v-model="newcat.breed">
        <option>Манул</option>
        <option>Сфинкс</option>
        <option>Британец</option>
      </select>
      <br/>
      <input v-model.number="newcat.weight"/>
    
    <input type="checkbox" id="isAngry" v-model="newcat.isAngry">
    <label for="isAngry">Сердит</label>

    </form>
    <button @click="addCat(newcat)">Добавить кота</button>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {Cat} from "@/types/cat"
import {useCats} from "@/use/useCats"

export default defineComponent({
  
  setup(){   
    const newcat:Cat = {name:"Мурка", breed:"Манул", weight:8, isAngry:false }    
    return {newcat, ...useCats()}
  },
    
  name: 'HelloWorld',

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
