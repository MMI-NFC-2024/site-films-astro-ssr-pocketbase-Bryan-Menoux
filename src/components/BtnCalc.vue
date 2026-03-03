<script setup lang="ts">
const props = defineProps<{
  chiffre: number;
  modeDecimal: boolean;
  rang: number;
}>();

const nombre = defineModel<number>();
</script>

<template>
  <button
    class="bg-zinc-700 hover:bg-zinc-600 py-4 rounded-xl"
    @click="nombre = !modeDecimal ? ((nombre || 0) * 10 + props.chiffre) : (nombre || 0) + props.chiffre / Math.pow(10, props.rang)"
  >
    {{ chiffre }}
  </button>
</template>
