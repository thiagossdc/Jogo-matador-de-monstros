<template>
    <div class="log">
      <h3>Log de Ações</h3>
      <ul>
        <li v-for="(log, index) in messages" :key="index">{{ log }}</li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  defineProps({
    messages: Array
  });
  </script>
  
  <style>
  .log ul {
    list-style: none;
    padding: 0;
  }
  
  .log li {
    margin-bottom: 5px;
    font-size: 14px;
  }
  </style>
  