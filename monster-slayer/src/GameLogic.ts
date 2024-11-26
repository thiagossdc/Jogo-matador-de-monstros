import { ref } from 'vue';

type LogMessage = string;

// Estados globais
export const playerHealth = ref<number>(100);
export const monsterHealth = ref<number>(100);
export const logMessages = ref<LogMessage[]>([]);

function getRandomValue(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function attackMonster(): void {
  const damage = getRandomValue(5, 12);
  monsterHealth.value = Math.max(0, monsterHealth.value - damage);
  logMessages.value.unshift(`Jogador causou ${damage} de dano!`);
  monsterAttacks();
  checkWinCondition();
}

export function specialAttack(): void {
  const damage = getRandomValue(10, 25);
  monsterHealth.value = Math.max(0, monsterHealth.value - damage);
  logMessages.value.unshift(`Jogador causou ${damage} de dano com ataque especial!`);
  monsterAttacks();
  checkWinCondition();
}

export function healPlayer(): void {
  const heal = getRandomValue(8, 20);
  playerHealth.value = Math.min(100, playerHealth.value + heal);
  logMessages.value.unshift(`Jogador se curou com ${heal} pontos!`);
  monsterAttacks();
}

export function restartGame(): void {
  playerHealth.value = 100;
  monsterHealth.value = 100;
  logMessages.value = [];
}

export function monsterAttacks(): void {
  const damage = getRandomValue(8, 15);
  playerHealth.value = Math.max(0, playerHealth.value - damage);
  logMessages.value.unshift(`Monstro causou ${damage} de dano!`);
}

export function checkWinCondition(): void {
  if (monsterHealth.value === 0 && playerHealth.value > 0) {
    alert('Você venceu o monstro!');
    restartGame();
  } else if (playerHealth.value === 0 && monsterHealth.value > 0) {
    alert('Você perdeu! O monstro venceu.');
    restartGame();
  } else if (playerHealth.value === 0 && monsterHealth.value === 0) {
    alert('Empate! Ambos foram derrotados.');
    restartGame();
  }
}
