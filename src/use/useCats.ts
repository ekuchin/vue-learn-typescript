import {ref} from 'vue'
import {Cat} from "@/types/cat"
import catlist from "@/data/catlist"

export function useCats(){

    const cats = ref(catlist)

    const addCat = (cat:Cat) =>{
        const {name, breed, weight, isAngry} = cat
        cats.value = [...cats.value, {name,breed,weight,isAngry}] 
      }
    
    return { cats, addCat }
}



