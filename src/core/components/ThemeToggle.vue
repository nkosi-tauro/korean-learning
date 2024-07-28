<script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import { useDark, useToggle } from '@vueuse/core';
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline'

const isDark = useDark()
const toggleDarkMode = useToggle(isDark)

const enabled = ref(false)
</script>

<template>
  <Switch 
    v-model="enabled" 
    as="template" 
    v-slot="{ checked }"
    class="border border-black dark:border-white mr-2"
    >
    <button 
      @click="toggleDarkMode()" 
      class="relative inline-flex h-6 w-11 items-center rounded-full"
      :class="checked ? 'bg-black' : 'bg-gray-200'">
      <span class="sr-only">Enable notifications</span>
      <span v-if="checked" :class="checked ? 'translate-x-6' : 'translate-x-1'">
        <MoonIcon class="h-4 w-4 transform rounded-full bg-black text-white transition" />
      </span>
      <span v-else :class="checked ? 'translate-x-6' : 'translate-x-1'">
        <SunIcon class="h-4 w-4 transform rounded-full bg-white text-yellow-500 transition" />
      </span>
    </button>
  </Switch>
</template>

