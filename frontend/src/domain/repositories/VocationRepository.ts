// Domain: Vocation Repository
import { Vocation, VocationType } from '../entities/Vocation'

export interface VocationRepository {
  findByType(type: VocationType): Vocation | null
  findAll(): Vocation[]
}

export class InMemoryVocationRepository implements VocationRepository {
  private vocations: Map<VocationType, Vocation> = new Map()

  constructor() {
    this.initializeVocations()
  }

  findByType(type: VocationType): Vocation | null {
    return this.vocations.get(type) || null
  }

  findAll(): Vocation[] {
    return Array.from(this.vocations.values())
  }

  private initializeVocations(): void {
    this.vocations.set(VocationType.MONK, Vocation.createMonk())
    this.vocations.set(VocationType.SORCERER, Vocation.createSorcerer())
    this.vocations.set(VocationType.DRUID, Vocation.createDruid())
    this.vocations.set(VocationType.PALADIN, Vocation.createPaladin())
    this.vocations.set(VocationType.KNIGHT, Vocation.createKnight())
  }
}
