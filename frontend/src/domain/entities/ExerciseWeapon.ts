// Domain: Exercise Weapon
export enum SkillType {
  MELEE = 'melee', // Axe, Sword, Club compartilham a mesma fórmula
  DISTANCE = 'distance',
  SHIELD = 'shield',
  MAGIC = 'magic',
  FIST = 'fist'
}

export enum MeleeWeaponType {
  SWORD = 'sword',
  AXE = 'axe',
  CLUB = 'club'
}

export enum WeaponType {
  REGULAR = 'regular',
  DURABLE = 'durable',
  LASTING = 'lasting'
}

export interface ExerciseWeaponConfig {
  readonly id: string
  readonly name: string
  readonly skillType: SkillType
  readonly meleeWeaponType?: MeleeWeaponType // Para weapons de melee
  readonly weaponType: WeaponType
  readonly charges: number
  readonly cost: number
}

export class ExerciseWeapon {
  constructor(private config: ExerciseWeaponConfig) {}

  get id(): string {
    return this.config.id
  }

  get name(): string {
    return this.config.name
  }

  get skillType(): SkillType {
    return this.config.skillType
  }

  get meleeWeaponType(): MeleeWeaponType | undefined {
    return this.config.meleeWeaponType
  }

  get weaponType(): WeaponType {
    return this.config.weaponType
  }

  get charges(): number {
    return this.config.charges
  }

  get cost(): number {
    return this.config.cost
  }

  get costPerCharge(): number {
    return this.cost / this.charges
  }

  static createSwordRegular(): ExerciseWeapon {
    return new ExerciseWeapon({
      id: 'exercise-sword',
      name: 'Exercise Sword',
      skillType: SkillType.MELEE,
      meleeWeaponType: MeleeWeaponType.SWORD,
      weaponType: WeaponType.REGULAR,
      charges: 500,
      cost: 347222
    })
  }

  static createSwordDurable(): ExerciseWeapon {
    return new ExerciseWeapon({
      id: 'durable-exercise-sword',
      name: 'Durable Exercise Sword',
      skillType: SkillType.MELEE,
      meleeWeaponType: MeleeWeaponType.SWORD,
      weaponType: WeaponType.DURABLE,
      charges: 1800,
      cost: 1250000
    })
  }

  static createSwordLasting(): ExerciseWeapon {
    return new ExerciseWeapon({
      id: 'lasting-exercise-sword',
      name: 'Lasting Exercise Sword',
      skillType: SkillType.MELEE,
      meleeWeaponType: MeleeWeaponType.SWORD,
      weaponType: WeaponType.LASTING,
      charges: 14400,
      cost: 10000000
    })
  }

  // Factory methods para outros tipos de weapons...
  static createAxeRegular(): ExerciseWeapon {
    return new ExerciseWeapon({
      id: 'exercise-axe',
      name: 'Exercise Axe',
      skillType: SkillType.MELEE,
      meleeWeaponType: MeleeWeaponType.AXE,
      weaponType: WeaponType.REGULAR,
      charges: 500,
      cost: 347222
    })
  }

  static createAxeDurable(): ExerciseWeapon {
    return new ExerciseWeapon({
      id: 'durable-exercise-axe',
      name: 'Durable Exercise Axe',
      skillType: SkillType.MELEE,
      meleeWeaponType: MeleeWeaponType.AXE,
      weaponType: WeaponType.DURABLE,
      charges: 1800,
      cost: 1250000
    })
  }

  static createAxeLasting(): ExerciseWeapon {
    return new ExerciseWeapon({
      id: 'lasting-exercise-axe',
      name: 'Lasting Exercise Axe',
      skillType: SkillType.MELEE,
      meleeWeaponType: MeleeWeaponType.AXE,
      weaponType: WeaponType.LASTING,
      charges: 14400,
      cost: 10000000
    })
  }
}
