<script setup>
import { onMounted, ref } from 'vue'
import { useHangulStore } from '../store/store';

const hangulStore = useHangulStore();

onMounted(() => {
  hangulStore.getHangul()
})

</script>

<template>
  <div v-if="hangulStore.loading"> loadind</div>
  <ul 
    v-else
    class="dark:text-white">
    <div>{{ hangulStore.get_status }}</div>
    <li v-for="hangul in hangulStore.hangulAlphabet" :key="hangul.id">{{ hangul.vowel }}</li>
  </ul>
</template>