// Domain: Experience Multipliers
export interface ExperienceMultiplier {
  readonly name: string
  readonly multiplier: number
  readonly isActive: boolean
}

export class LoyaltyBonus implements ExperienceMultiplier {
  constructor(private level: number) {}

  get name(): string {
    return 'Loyalty Bonus'
  }

  get multiplier(): number {
    return 1 + (this.level * 0.1) // 10% por nível
  }

  get isActive(): boolean {
    return this.level > 0
  }

  get loyaltyLevel(): number {
    return this.level
  }

  static create(loyaltyLevel: number): LoyaltyBonus {
    return new LoyaltyBonus(Math.max(0, Math.min(50, loyaltyLevel)))
  }
}

export class DoubleEvent implements ExperienceMultiplier {
  constructor(private active: boolean) {}

  get name(): string {
    return 'Double Event'
  }

  get multiplier(): number {
    return this.active ? 2.0 : 1.0
  }

  get isActive(): boolean {
    return this.active
  }

  static create(active: boolean): DoubleEvent {
    return new DoubleEvent(active)
  }
}

export class PrivateDummy implements ExperienceMultiplier {
  constructor(private active: boolean) {}

  get name(): string {
    return 'Private Dummy'
  }

  get multiplier(): number {
    return this.active ? 1.1 : 1.0 // 10% de aumento
  }

  get isActive(): boolean {
    return this.active
  }

  static create(active: boolean): PrivateDummy {
    return new PrivateDummy(active)
  }
}

export class ExperienceMultiplierCalculator {
  private multipliers: ExperienceMultiplier[] = []

  addMultiplier(multiplier: ExperienceMultiplier): this {
    this.multipliers.push(multiplier)
    return this
  }

  calculateTotalMultiplier(): number {
    return this.multipliers.reduce((total, multiplier) => {
      return total * multiplier.multiplier
    }, 1.0)
  }

  getActiveMultipliers(): ExperienceMultiplier[] {
    return this.multipliers.filter(multiplier => multiplier.isActive)
  }

  static create(
    loyaltyLevel: number,
    doubleEvent: boolean,
    privateDummy: boolean
  ): ExperienceMultiplierCalculator {
    return new ExperienceMultiplierCalculator()
      .addMultiplier(LoyaltyBonus.create(loyaltyLevel))
      .addMultiplier(DoubleEvent.create(doubleEvent))
      .addMultiplier(PrivateDummy.create(privateDummy))
  }
}
