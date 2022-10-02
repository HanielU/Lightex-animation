import type { Lamp, LampCategory } from "$lib/types";
import { writable } from "svelte/store";

export const lampCategories = writable<LampCategory[]>([
  {
    name: "regular",
    selected: true
  },
  {
    name: "standing",
    selected: false
  },
  {
    name: "shower",
    selected: false
  },
  {
    name: "reading",
    selected: false
  },
  {
    name: "hanging",
    selected: false
  }
]);

export const lamps = writable<Lamp[]>([
  { name: "New Haven", price: "148", selected: true, imgUrl: "" },
  { name: "Old Capital", price: "150", selected: false, imgUrl: "" },
  { name: "Disk Lamp", price: "179", selected: false, imgUrl: "" },
  { name: "Human Lamp", price: "300", selected: false, imgUrl: "" },
  { name: "Medium Lamp", price: "250", selected: false, imgUrl: "" }
]);
