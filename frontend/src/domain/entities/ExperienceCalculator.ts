// Domain: Experience Calculation
import { SkillFormula, SkillFormulaFactory } from './SkillFormula'
import { Vocation } from './Vocation'
import { SkillType } from './ExerciseWeapon'
import { ExperienceMultiplierCalculator } from './ExperienceMultiplier'

export interface SkillProgression {
  readonly skill: number
  readonly experience: number
  readonly timeToNext: number
}

export interface ExerciseCalculationResult {
  readonly currentSkill: number
  readonly targetSkill: number
  readonly totalCost: number
  readonly totalTime: number
  readonly totalCharges: number
  readonly skillGains: SkillProgression[]
  readonly activeMultipliers: string[]
}

export class ExperienceCalculator {
  calculateSkillExperience(
    currentSkill: number,
    targetSkill: number,
    skillType: SkillType,
    vocation: Vocation
  ): number {
    let totalExperience = 0
    const formula = this.getSkillFormula(skillType, vocation)
    
    for (let skill = currentSkill; skill < targetSkill; skill++) {
      totalExperience += formula.calculate(skill)
    }
    
    return totalExperience
  }

  calculateChargesNeeded(
    currentSkill: number,
    targetSkill: number,
    skillType: SkillType,
    vocation: Vocation,
    multiplierCalculator: ExperienceMultiplierCalculator
  ): number {
    const totalExperience = this.calculateSkillExperience(
      currentSkill,
      targetSkill,
      skillType,
      vocation
    )
    
    // Experiência por charge baseada no skill médio do treinamento
    const averageSkill = Math.floor((currentSkill + targetSkill) / 2)
    const formula = this.getSkillFormula(skillType, vocation)
    const experienceForOneSkill = formula.calculate(averageSkill)
    
    // Exercise weapons dão aproximadamente 1/10 da experiência necessária para subir 1 skill
    const baseExperiencePerCharge = Math.floor(experienceForOneSkill / 10)
    const totalMultiplier = multiplierCalculator.calculateTotalMultiplier()
    const experiencePerCharge = baseExperiencePerCharge * totalMultiplier
    
    return Math.ceil(totalExperience / experiencePerCharge)
  }

  calculateSkillProgression(
    currentSkill: number,
    targetSkill: number,
    skillType: SkillType,
    vocation: Vocation,
    multiplierCalculator: ExperienceMultiplierCalculator
  ): SkillProgression[] {
    const progression: SkillProgression[] = []
    
    for (let skill = currentSkill; skill < targetSkill; skill++) {
      const formula = this.getSkillFormula(skillType, vocation)
      const experience = formula.calculate(skill)
      
      // Calcular charges necessários para este skill específico
      const skillCharges = this.calculateChargesNeeded(
        skill,
        skill + 1,
        skillType,
        vocation,
        multiplierCalculator
      )
      
      progression.push({
        skill: skill + 1,
        experience,
        timeToNext: skillCharges * 2 // 2 segundos por charge
      })
    }
    
    return progression
  }

  private getSkillFormula(skillType: SkillType, vocation: Vocation): SkillFormula {
    switch (skillType) {
      case SkillType.MELEE:
        return SkillFormulaFactory.createMeleeFormula()
      case SkillType.DISTANCE:
        return SkillFormulaFactory.createDistanceFormula()
      case SkillType.SHIELD:
        return SkillFormulaFactory.createShieldFormula()
      case SkillType.FIST:
        return SkillFormulaFactory.createFistFormula()
      case SkillType.MAGIC:
        return SkillFormulaFactory.createMagicFormula(vocation.magicMultiplier)
      default:
        throw new Error(`Unknown skill type: ${skillType}`)
    }
  }
}
