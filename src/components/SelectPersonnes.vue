<script setup lang="ts">
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";
import type { PersonnesResponse } from "../pocketbase-types";
import { ref } from "vue";

const props = defineProps<{
  personnesListe: PersonnesResponse[];
  name: string;
  value: string[] | string;
  multiple?: boolean;
  placeholder?: string;
}>();

const personneListId = ref(props.value);
console.log("Ici select", props.personnesListe);
</script>

<template>
  <Multiselect
    v-model="personneListId"
    :options="props.personnesListe"
    searchable
    :mode="props.multiple ? 'tags' : 'single'"
    label="nom"
    value-prop="id"
    :placeholder="props.placeholder"
  />
  valeur: {{ personneListId }}
  <!-- @vue-ignore -->
  <input
    v-for="p in props.multiple
      ? Array.isArray(personneListId)
        ? personneListId
        : []
      : personneListId
        ? [personneListId]
        : []"
    type="hidden"
    :name="props.name"
    :value="p"
    :key="p"
  />

  <!-- <input
    v-if="multiple"
    v-for="p in personneListId"
    type="hidden"
    :name="name"
    :value="p"
    :key="p"
  />
  <input v-else type="hidden" :name="name" :value="personneListId" /> -->
</template>
