<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
import BtnCalc from "./BtnCalc.vue";

const nombre = ref(0);

const screen = ref<HTMLElement | null>(null);

watch(nombre, async () => {
  await nextTick();
  if (screen.value) {
    screen.value.scrollLeft = screen.value.scrollWidth;
  }
});

const modeDecimal = ref(false);
const rang = ref(0);
</script>

<template>
  <div class="min-h-fit flex items-center justify-center">
    <div class="bg-zinc-800 p-6 rounded-3xl shadow-2xl w-80">
      <!-- Écran -->
      <div
        ref="screen"
        class="calc-screen bg-black text-green-400 text-right text-4xl font-mono p-5 rounded-2xl mb-6 whitespace-nowrap overflow-x-auto"
      >
        {{ nombre }}
      </div>

      <!-- Boutons -->
      <div class="grid grid-cols-4 gap-3 text-white font-semibold">
        <button class="bg-zinc-600 hover:bg-zinc-500 py-4 rounded-xl">
          AC
        </button>
        <button class="bg-zinc-600 hover:bg-zinc-500 py-4 rounded-xl">%</button>
        <button
          class="bg-zinc-600 hover:bg-zinc-500 py-4 rounded-xl"
          @click="nombre = Math.floor(nombre / 10)"
        >
          ←
        </button>
        <button class="bg-orange-500 hover:bg-orange-400 py-4 rounded-xl">
          ÷
        </button>

        <BtnCalc
          v-for="chiffre in [7, 8, 9]"
          v-model="nombre"
          :chiffre="chiffre"
          :modeDecimal="modeDecimal"
          :rang="rang"
        />
        <button class="bg-orange-500 hover:bg-orange-400 py-4 rounded-xl">
          ×
        </button>

        <BtnCalc
          v-for="chiffre in [4, 5, 6]"
          v-model="nombre"
          :chiffre="chiffre"
          :modeDecimal="modeDecimal"
          :rang="rang"
        />
        <button class="bg-orange-500 hover:bg-orange-400 py-4 rounded-xl">
          −
        </button>

        <BtnCalc
          v-for="chiffre in [1, 2, 3]"
          v-model="nombre"
          :chiffre="chiffre"
          :modeDecimal="modeDecimal"
          :rang="rang"
        />
        <button class="bg-orange-500 hover:bg-orange-400 py-4 rounded-xl">
          +
        </button>

        <BtnCalc
          v-model="nombre"
          :chiffre="0"
          class="col-span-2"
          :modeDecimal="modeDecimal"
          :rang="rang"
        />
        <button class="bg-zinc-700 hover:bg-zinc-600 py-4 rounded-xl">.</button>
        <button class="bg-orange-500 hover:bg-orange-400 py-4 rounded-xl">
          =
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.calc-screen {
  scrollbar-gutter: stable;
}
.calc-screen::-webkit-scrollbar {
  height: 0px;
}
.calc-screen {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
