<script setup>
import { useDashboardStore } from '../store/dashboard';
import DashboardSideBar from './DashboardSideBar.vue';
import DashboardTopNavigation from './DashboardTopNavigation.vue';

</script>

<template>
  <div>
    <!-- Dashboard Side Bar -->
    <DashboardSideBar/>

    <div class="lg:pl-72">
      <!-- Dashboard Top Navigation -->
      <DashboardTopNavigation/>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
          <!-- Main Content -->
          <RouterView/>
        </div>
      </main>
    </div>
  </div>
</template>

