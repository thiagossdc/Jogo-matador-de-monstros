<template>
    <div class="actions">
      <button @click="$emit('attack')">Atacar</button>
      <button @click="$emit('special-attack')">Ataque Especial</button>
      <button @click="$emit('heal')">Curar</button>
      <button @click="$emit('restart')">Reiniciar</button>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style>
  .actions button {
    margin: 5px;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .actions button:hover {
    background-color: #ddd;
  }
  </style>
  