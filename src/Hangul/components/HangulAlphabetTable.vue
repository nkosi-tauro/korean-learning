<script setup lang="ts">
import { onMounted } from 'vue';
import { 
  SpeakerWaveIcon 
} from '@heroicons/vue/20/solid';

import { useHangulStore } from '../store/store';

const hangulStore = useHangulStore();
function playAudio (audioUrl: string){
  const audio = new Audio(audioUrl);
  audio.play();
};

onMounted(() => {
  hangulStore.getHangul();
});


</script>

<template>
  <div v-if="hangulStore.loading">loading</div>
  <div v-else >
    <div>
      <h2 class="text-xl font-semibold mb-2">Vowels</h2>
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Character</th>
            <th class="py-2 px-4 border-b">Pronunciation</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="vowel in hangulStore.vowels" 
            :key="vowel.id" 
            class="hover:bg-gray-100">
            <td class="py-2 px-4 border-b text-center">
              <div class="relative">
                <span class="font-sokchobadabatang text-4xl dark:text-white">{{ vowel.character }}</span>
                <button 
                  @click="playAudio(vowel.audio)"
                  class="absolute right-0 top-0 mt-1 mr-1 hidden group-hover">
                  <SpeakerWaveIcon class="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </td>
            <td class="py-2 px-4 border-b text-center">{{ vowel.pronounciation }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-6">
      <h2 class="text-xl font-semibold mb-2">Consonants</h2>
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Character</th>
            <th class="py-2 px-4 border-b">Pronunciation</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="consonant in hangulStore.consonants" :key="consonant.id" class="hover:bg-gray-100">
            <td class="py-2 px-4 border-b text-center">
              <div class="relative">
                <span class="font-sokchobadabatang text-4xl dark:text-white">{{ consonant.character }}</span>
                <button 
                  @click="playAudio(consonant.audio)"
                  class="absolute right-0 top-0 mt-1 mr-1 hidden group-hover:block">
                  <SpeakerWaveIcon class="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </td>
            <td class="py-2 px-4 border-b text-center">{{ consonant.pronounciation }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>




<style scoped>
.group-hover .hidden {
  display: block;
}
</style>
