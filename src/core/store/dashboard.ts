import { defineStore } from "pinia";
import { ref } from "vue";


export const useDashboardStore = defineStore("dashboard", () => {
  const sidebarOpen = ref(false);
  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
  }

  return { sidebarOpen, toggleSidebar}
})