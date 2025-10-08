export interface Apple {
  id: string;
  x: number;
  y: number;
  isBonus: boolean;
}

export interface GameState {
  score: number;
  lives: number;
  basketPosition: number;
  apples: Apple[];
  gameRunning: boolean;
  bonusAppleTimer: number;
}

export interface GameConfig {
  basketSpeed: number;
  appleSpeed: number;
  gameWidth: number;
  gameHeight: number;
  basketWidth: number;
  basketHeight: number;
  appleSize: number;
  initialLives: number;
  normalApplePoints: number;
  bonusApplePoints: number;
  appleSpawnRate: number;
  bonusAppleSpawnRate: number;
  bonusAppleInterval: number;
}

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}