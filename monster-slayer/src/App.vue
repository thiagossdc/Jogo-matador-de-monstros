<template>
  <div id="app">
    <h1>Jogo: Matador de Monstros</h1>
    <div class="health-bars">
      <HealthBar title="Jogador" :health="playerHealth" />
      <HealthBar title="Monstro" :health="monsterHealth" />
    </div>
    <ActionButtons 
      @attack="attackMonster"
      @special-attack="specialAttack"
      @heal="healPlayer"
      @restart="restartGame"
    />
    <Logs :messages="logMessages" />
  </div>
</template>

<script setup lang="ts">
import { attackMonster, specialAttack, healPlayer, restartGame, logMessages, playerHealth, monsterHealth } from './GameLogic';

// Componentes
import HealthBar from './components/HealthBar.vue';
import ActionButtons from './components/ActionButtons.vue';
import Logs from './components/Logs.vue';
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}
</style>
