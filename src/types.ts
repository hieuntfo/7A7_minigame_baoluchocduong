export interface Choice {
  id: string;
  type: 'Xanh' | 'Vàng' | 'Đỏ';
  text: string;
  result: string;
  happinessChange: number;
}

export interface Scenario {
  id: number;
  description: string;
  choices: Choice[];
}

export type GameStatus = 'playing' | 'won' | 'lost';
