// Tipos para a calculadora de Exercise Weapons

export interface ExerciseWeapon {
  id: string
  name: string
  skillType: SkillType
  charges: number
  cost: number
  imageUrl?: string
}

export interface SkillProgression {
  skill: number
  experience: number
  timeToNext: number
}

export interface ExerciseCalculation {
  currentSkill: number
  targetSkill: number
  weapon: ExerciseWeapon
  loyaltyBonus: number
  doubleEvent: boolean
  privateDummy: boolean
  totalCost: number
  totalTime: number
  totalCharges: number
  skillGains: SkillProgression[]
}

export enum SkillType {
  SWORD = 'sword',
  AXE = 'axe',
  CLUB = 'club',
  DISTANCE = 'distance',
  SHIELD = 'shield',
  MAGIC = 'magic',
  FIST = 'fist'
}

export enum Vocation {
  MONK = 'monk',
  SORCERER = 'sorcerer',
  DRUID = 'druid',
  PALADIN = 'paladin',
  KNIGHT = 'knight'
}

// Dados dos Exercise Weapons
export const EXERCISE_WEAPONS: ExerciseWeapon[] = [
  // Sword
  { id: 'exercise-sword', name: 'Exercise Sword', skillType: SkillType.SWORD, charges: 500, cost: 347222 },
  { id: 'durable-exercise-sword', name: 'Durable Exercise Sword', skillType: SkillType.SWORD, charges: 1800, cost: 1250000 },
  { id: 'lasting-exercise-sword', name: 'Lasting Exercise Sword', skillType: SkillType.SWORD, charges: 14400, cost: 10000000 },
  
  // Axe
  { id: 'exercise-axe', name: 'Exercise Axe', skillType: SkillType.AXE, charges: 500, cost: 347222 },
  { id: 'durable-exercise-axe', name: 'Durable Exercise Axe', skillType: SkillType.AXE, charges: 1800, cost: 1250000 },
  { id: 'lasting-exercise-axe', name: 'Lasting Exercise Axe', skillType: SkillType.AXE, charges: 14400, cost: 10000000 },
  
  // Club
  { id: 'exercise-club', name: 'Exercise Club', skillType: SkillType.CLUB, charges: 500, cost: 347222 },
  { id: 'durable-exercise-club', name: 'Durable Exercise Club', skillType: SkillType.CLUB, charges: 1800, cost: 1250000 },
  { id: 'lasting-exercise-club', name: 'Lasting Exercise Club', skillType: SkillType.CLUB, charges: 14400, cost: 10000000 },
  
  // Distance
  { id: 'exercise-bow', name: 'Exercise Bow', skillType: SkillType.DISTANCE, charges: 500, cost: 347222 },
  { id: 'durable-exercise-bow', name: 'Durable Exercise Bow', skillType: SkillType.DISTANCE, charges: 1800, cost: 1250000 },
  { id: 'lasting-exercise-bow', name: 'Lasting Exercise Bow', skillType: SkillType.DISTANCE, charges: 14400, cost: 10000000 },
  
  // Shield
  { id: 'exercise-shield', name: 'Exercise Shield', skillType: SkillType.SHIELD, charges: 500, cost: 347222 },
  { id: 'durable-exercise-shield', name: 'Durable Exercise Shield', skillType: SkillType.SHIELD, charges: 1800, cost: 1250000 },
  { id: 'lasting-exercise-shield', name: 'Lasting Exercise Shield', skillType: SkillType.SHIELD, charges: 14400, cost: 10000000 },
  
  // Magic
  { id: 'exercise-wand', name: 'Exercise Wand', skillType: SkillType.MAGIC, charges: 500, cost: 347222 },
  { id: 'durable-exercise-wand', name: 'Durable Exercise Wand', skillType: SkillType.MAGIC, charges: 1800, cost: 1250000 },
  { id: 'lasting-exercise-wand', name: 'Lasting Exercise Wand', skillType: SkillType.MAGIC, charges: 14400, cost: 10000000 },
  
  // Fist
  { id: 'exercise-dummy', name: 'Exercise Dummy', skillType: SkillType.FIST, charges: 500, cost: 347222 },
  { id: 'durable-exercise-dummy', name: 'Durable Exercise Dummy', skillType: SkillType.FIST, charges: 1800, cost: 1250000 },
  { id: 'lasting-exercise-dummy', name: 'Lasting Exercise Dummy', skillType: SkillType.FIST, charges: 14400, cost: 10000000 }
]

// Fórmulas de progressão de skill baseadas no Tibia
export const SKILL_FORMULAS = {
  [SkillType.SWORD]: (skill: number) => Math.floor(50 * Math.pow(skill, 2.4)),
  [SkillType.AXE]: (skill: number) => Math.floor(50 * Math.pow(skill, 2.4)),
  [SkillType.CLUB]: (skill: number) => Math.floor(50 * Math.pow(skill, 2.4)),
  [SkillType.DISTANCE]: (skill: number) => Math.floor(50 * Math.pow(skill, 2.4)),
  [SkillType.SHIELD]: (skill: number) => Math.floor(50 * Math.pow(skill, 2.4)),
  [SkillType.MAGIC]: (skill: number) => Math.floor(1600 * Math.pow(skill, 2.4)),
  [SkillType.FIST]: (skill: number) => Math.floor(50 * Math.pow(skill, 2.4))
}

// Multiplicadores de experiência
export const EXPERIENCE_MULTIPLIERS = {
  doubleEvent: 2.0,
  privateDummy: 1.1, // 10% de aumento
  loyaltyBonus: (loyalty: number) => 1 + (loyalty * 0.1) // 10% por nível de loyalty
}

// Fórmulas específicas por classe
export const VOCATION_SKILL_FORMULAS = {
  monk: {
    ...SKILL_FORMULAS,
    [SkillType.FIST]: (skill: number) => Math.floor(50 * Math.pow(skill, 2.4)),
    [SkillType.MAGIC]: (skill: number) => Math.floor(400 * Math.pow(skill, 2.4))
  },
  sorcerer: {
    ...SKILL_FORMULAS,
    [SkillType.MAGIC]: (skill: number) => Math.floor(1600 * Math.pow(skill, 2.4))
  },
  druid: {
    ...SKILL_FORMULAS,
    [SkillType.MAGIC]: (skill: number) => Math.floor(1600 * Math.pow(skill, 2.4))
  },
  paladin: {
    ...SKILL_FORMULAS,
    [SkillType.DISTANCE]: (skill: number) => Math.floor(50 * Math.pow(skill, 2.4)),
    [SkillType.MAGIC]: (skill: number) => Math.floor(800 * Math.pow(skill, 2.4))
  },
  knight: {
    ...SKILL_FORMULAS,
    [SkillType.MAGIC]: (skill: number) => Math.floor(400 * Math.pow(skill, 2.4))
  }
}
