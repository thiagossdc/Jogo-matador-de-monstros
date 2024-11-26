<template>
    <div>
      <h2>{{ title }}</h2>
      <div class="health-bar" :style="{ width: `${health}%`, backgroundColor: getHealthColor(health) }"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  defineProps({
    title: String,
    health: Number
  });
  
  function getHealthColor(health: number): string {
    if (health > 50) return 'green';
    if (health > 20) return 'orange';
    return 'red';
  }
  </script>
  
  <style>
  .health-bar {
    width: 100px;
    height: 20px;
    margin-top: 10px;
    transition: width 0.3s ease, background-color 0.3s ease;
  }
  </style>
  