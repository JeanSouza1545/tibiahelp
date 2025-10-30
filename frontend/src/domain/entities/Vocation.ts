// Domain: Vocation
export enum VocationType {
  MONK = 'monk',
  SORCERER = 'sorcerer',
  DRUID = 'druid',
  PALADIN = 'paladin',
  KNIGHT = 'knight'
}

export interface VocationConfig {
  readonly type: VocationType
  readonly name: string
  readonly icon: string
  readonly magicMultiplier: number
  readonly distanceMultiplier?: number
}

export class Vocation {
  constructor(private config: VocationConfig) {}

  get type(): VocationType {
    return this.config.type
  }

  get name(): string {
    return this.config.name
  }

  get icon(): string {
    return this.config.icon
  }

  get magicMultiplier(): number {
    return this.config.magicMultiplier
  }

  get distanceMultiplier(): number {
    return this.config.distanceMultiplier || 50
  }

  static createMonk(): Vocation {
    return new Vocation({
      type: VocationType.MONK,
      name: 'Monk',
      icon: '👊',
      magicMultiplier: 400
    })
  }

  static createSorcerer(): Vocation {
    return new Vocation({
      type: VocationType.SORCERER,
      name: 'Sorcerer',
      icon: '🔮',
      magicMultiplier: 1600
    })
  }

  static createDruid(): Vocation {
    return new Vocation({
      type: VocationType.DRUID,
      name: 'Druid',
      icon: '🌿',
      magicMultiplier: 1600
    })
  }

  static createPaladin(): Vocation {
    return new Vocation({
      type: VocationType.PALADIN,
      name: 'Paladin',
      icon: '🏹',
      magicMultiplier: 800,
      distanceMultiplier: 50
    })
  }

  static createKnight(): Vocation {
    return new Vocation({
      type: VocationType.KNIGHT,
      name: 'Knight',
      icon: '⚔️',
      magicMultiplier: 400
    })
  }
}
