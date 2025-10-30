// Domain: Exercise Weapon Calculation Service
import { ExerciseWeapon } from '../entities/ExerciseWeapon'
import { Vocation, VocationType } from '../entities/Vocation'
import { SkillType } from '../entities/ExerciseWeapon'
import { ExperienceCalculator, ExerciseCalculationResult } from '../entities/ExperienceCalculator'
import { ExperienceMultiplierCalculator } from '../entities/ExperienceMultiplier'
import { ExerciseWeaponRepository } from '../repositories/ExerciseWeaponRepository'
import { VocationRepository } from '../repositories/VocationRepository'

export interface OptimalWeaponResult {
  readonly weapon: ExerciseWeapon
  readonly quantity: number
  readonly totalCost: number
}

export class ExerciseWeaponCalculationService {
  constructor(
    private weaponRepository: ExerciseWeaponRepository,
    private vocationRepository: VocationRepository,
    private experienceCalculator: ExperienceCalculator
  ) {}

  calculateExerciseWeapon(
    currentSkill: number,
    targetSkill: number,
    weaponId: string,
    vocationType: VocationType,
    loyaltyLevel: number,
    doubleEvent: boolean,
    privateDummy: boolean
  ): ExerciseCalculationResult {
    const weapon = this.weaponRepository.findById(weaponId)
    if (!weapon) {
      throw new Error(`Weapon with id ${weaponId} not found`)
    }

    const vocation = this.vocationRepository.findByType(vocationType)
    if (!vocation) {
      throw new Error(`Vocation ${vocationType} not found`)
    }

    const multiplierCalculator = ExperienceMultiplierCalculator.create(
      loyaltyLevel,
      doubleEvent,
      privateDummy
    )

    const totalCharges = this.experienceCalculator.calculateChargesNeeded(
      currentSkill,
      targetSkill,
      weapon.skillType,
      vocation,
      multiplierCalculator
    )

    const weaponsNeeded = Math.ceil(totalCharges / weapon.charges)
    const totalCost = weaponsNeeded * weapon.cost
    const totalTime = totalCharges * 2 // 2 segundos por charge

    const skillGains = this.experienceCalculator.calculateSkillProgression(
      currentSkill,
      targetSkill,
      weapon.skillType,
      vocation,
      multiplierCalculator
    )

    const activeMultipliers = multiplierCalculator
      .getActiveMultipliers()
      .map(multiplier => multiplier.name)

    return {
      currentSkill,
      targetSkill,
      totalCost,
      totalTime,
      totalCharges,
      skillGains,
      activeMultipliers
    }
  }

  findOptimalWeaponCombination(
    currentSkill: number,
    targetSkill: number,
    skillType: SkillType,
    vocationType: VocationType,
    loyaltyLevel: number,
    doubleEvent: boolean,
    privateDummy: boolean
  ): OptimalWeaponResult {
    const availableWeapons = this.weaponRepository.findBySkillType(skillType)
    const vocation = this.vocationRepository.findByType(vocationType)
    
    if (!vocation) {
      throw new Error(`Vocation ${vocationType} not found`)
    }

    const multiplierCalculator = ExperienceMultiplierCalculator.create(
      loyaltyLevel,
      doubleEvent,
      privateDummy
    )

    let bestOption: OptimalWeaponResult | null = null

    for (const weapon of availableWeapons) {
      const totalCharges = this.experienceCalculator.calculateChargesNeeded(
        currentSkill,
        targetSkill,
        skillType,
        vocation,
        multiplierCalculator
      )

      const weaponsNeeded = Math.ceil(totalCharges / weapon.charges)
      const totalCost = weaponsNeeded * weapon.cost

      if (!bestOption || totalCost < bestOption.totalCost) {
        bestOption = {
          weapon,
          quantity: weaponsNeeded,
          totalCost
        }
      }
    }

    if (!bestOption) {
      throw new Error(`No weapons found for skill type ${skillType}`)
    }

    return bestOption
  }

  getWeaponsBySkillType(skillType: SkillType): ExerciseWeapon[] {
    return this.weaponRepository.findBySkillType(skillType)
  }

  getAllVocations(): Vocation[] {
    return this.vocationRepository.findAll()
  }

  getVocationByType(type: VocationType): Vocation | null {
    return this.vocationRepository.findByType(type)
  }
}
