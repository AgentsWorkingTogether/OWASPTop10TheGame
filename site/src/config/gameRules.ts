export interface CharacterDistribution {
  totalPlayers: number;
  good: number;
  bad: number;
}

export interface GameRules {
  minPlayers: number;
  maxPlayers: number;
  characterDistributions: CharacterDistribution[];
}

// Tabla de distribución de personajes según número de jugadores
export const characterDistributions: CharacterDistribution[] = [
  { totalPlayers: 3, good: 1, bad: 2 },
  { totalPlayers: 5, good: 3, bad: 2 },
  { totalPlayers: 6, good: 4, bad: 2 },
  { totalPlayers: 7, good: 4, bad: 3 },
  { totalPlayers: 8, good: 5, bad: 3 },
  { totalPlayers: 9, good: 6, bad: 3 },
  { totalPlayers: 10, good: 6, bad: 4 }
];

export const gameRules: GameRules = {
  minPlayers: 3,
  maxPlayers: 10,
  characterDistributions
};

/**
 * Obtiene la distribución de personajes para un número específico de jugadores
 * @param playerCount Número de jugadores en la partida
 * @returns Distribución de personajes o null si no es válida
 */
export function getCharacterDistribution(playerCount: number): CharacterDistribution | null {
  return characterDistributions.find(dist => dist.totalPlayers === playerCount) || null;
}

/**
 * Verifica si un número de jugadores es válido para la partida
 * @param playerCount Número de jugadores
 * @returns true si es válido, false en caso contrario
 */
export function isValidPlayerCount(playerCount: number): boolean {
  return playerCount >= gameRules.minPlayers && playerCount <= gameRules.maxPlayers;
}

/**
 * Obtiene el rango válido de jugadores
 * @returns Objeto con min y max de jugadores
 */
export function getValidPlayerRange(): { min: number; max: number } {
  return {
    min: gameRules.minPlayers,
    max: gameRules.maxPlayers
  };
}

/**
 * Obtiene todas las distribuciones disponibles
 * @returns Array con todas las distribuciones de personajes
 */
export function getAllCharacterDistributions(): CharacterDistribution[] {
  return [...characterDistributions];
}
