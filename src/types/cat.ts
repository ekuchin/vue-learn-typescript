import { Breed } from "@/types/breed";

export interface Cat {
    name:string;
    breed:Breed;
    weight:number;
    isAngry:boolean;
}