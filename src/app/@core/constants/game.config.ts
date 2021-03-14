export enum EventType {
  ADD_RANDOM_KAMIKAZE_SHIP = 'ADD_RANDOM_KAMIKAZE_SHIP',
  ADD_RANDOM_SHOOTER_SHIP = 'ADD_RANDOM_SHOOTER_SHIP',
  ADD_FOLLOW_KAMIKAZE_SHIP = 'ADD_FOLLOW_KAMIKAZE_SHIP',
  ADD_FOLLOW_SHOOTER_SHIP = 'ADD_FOLLOW_SHOOTER_SHIP',
}

export const GAME_CONFIG: Array<Array<{ timeout: number; type: EventType }>> = [
  [
    { timeout: 2000, type: EventType.ADD_RANDOM_KAMIKAZE_SHIP },
    { timeout: 2000, type: EventType.ADD_RANDOM_KAMIKAZE_SHIP },
    { timeout: 2000, type: EventType.ADD_RANDOM_KAMIKAZE_SHIP },
    { timeout: 2000, type: EventType.ADD_RANDOM_KAMIKAZE_SHIP },
    { timeout: 2000, type: EventType.ADD_RANDOM_KAMIKAZE_SHIP },
  ],
  [
    { timeout: 2000, type: EventType.ADD_RANDOM_KAMIKAZE_SHIP },
    { timeout: 1000, type: EventType.ADD_RANDOM_SHOOTER_SHIP },
    { timeout: 3000, type: EventType.ADD_RANDOM_KAMIKAZE_SHIP },
    { timeout: 1000, type: EventType.ADD_RANDOM_SHOOTER_SHIP },
    { timeout: 3000, type: EventType.ADD_RANDOM_KAMIKAZE_SHIP },
  ],
  [
    { timeout: 2000, type: EventType.ADD_FOLLOW_KAMIKAZE_SHIP },
    { timeout: 3000, type: EventType.ADD_RANDOM_SHOOTER_SHIP },
    { timeout: 3000, type: EventType.ADD_RANDOM_KAMIKAZE_SHIP },
    { timeout: 1000, type: EventType.ADD_RANDOM_SHOOTER_SHIP },
    { timeout: 3000, type: EventType.ADD_FOLLOW_KAMIKAZE_SHIP },
  ],
  [
    { timeout: 1000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 3000, type: EventType.ADD_RANDOM_KAMIKAZE_SHIP },
    { timeout: 2000, type: EventType.ADD_RANDOM_KAMIKAZE_SHIP },
    { timeout: 2000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 2000, type: EventType.ADD_FOLLOW_KAMIKAZE_SHIP },
  ],
  [
    { timeout: 1000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 3000, type: EventType.ADD_RANDOM_KAMIKAZE_SHIP },
    { timeout: 2000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 2000, type: EventType.ADD_RANDOM_KAMIKAZE_SHIP },
    { timeout: 2000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
  ],
  [
    { timeout: 2000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 2000, type: EventType.ADD_FOLLOW_KAMIKAZE_SHIP },
    { timeout: 2000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 2000, type: EventType.ADD_FOLLOW_KAMIKAZE_SHIP },
    { timeout: 2000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
  ],
  [
    { timeout: 2000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 2000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 2000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 2000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 2000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
  ],
  [
    { timeout: 1500, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 1500, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 1500, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 1500, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 1500, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
  ],
  [
    { timeout: 1000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 1000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 1000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 1000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
    { timeout: 1000, type: EventType.ADD_FOLLOW_SHOOTER_SHIP },
  ],
];
