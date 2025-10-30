import { 
  ExerciseWeapon, 
  SkillProgression, 
  ExerciseCalculation, 
  SkillType, 
  Vocation,
  EXERCISE_WEAPONS, 
  VOCATION_SKILL_FORMULAS, 
  EXPERIENCE_MULTIPLIERS 
} from '@shared/types/ExerciseWeaponTypes'

export class ExerciseWeaponCalculator {
  
  /**
   * Calcula a experiência necessária para subir de um skill para outro baseado na classe
   */
  private calculateSkillExperience(currentSkill: number, targetSkill: number, skillType: SkillType, vocation: Vocation): number {
    let totalExperience = 0
    const formulas = VOCATION_SKILL_FORMULAS[vocation]
    
    for (let skill = currentSkill; skill < targetSkill; skill++) {
      totalExperience += formulas[skillType](skill)
    }
    
    return totalExperience
  }

  /**
   * Calcula quantos charges são necessários para alcançar o skill desejado
   */
  private calculateChargesNeeded(
    currentSkill: number, 
    targetSkill: number, 
    skillType: SkillType,
    vocation: Vocation,
    loyaltyBonus: number,
    doubleEvent: boolean,
    privateDummy: boolean
  ): number {
    const totalExperience = this.calculateSkillExperience(currentSkill, targetSkill, skillType, vocation)
    
    // Experiência por charge baseada no skill médio do treinamento
    const averageSkill = Math.floor((currentSkill + targetSkill) / 2)
    const formulas = VOCATION_SKILL_FORMULAS[vocation]
    const experienceForOneSkill = formulas[skillType](averageSkill)
    
    // Exercise weapons dão aproximadamente 1/10 da experiência necessária para subir 1 skill
    const baseExperiencePerCharge = Math.floor(experienceForOneSkill / 10)
    
    // Aplicar multiplicadores
    let multiplier = 1.0
    if (doubleEvent) multiplier *= EXPERIENCE_MULTIPLIERS.doubleEvent
    if (privateDummy) multiplier *= EXPERIENCE_MULTIPLIERS.privateDummy
    multiplier *= EXPERIENCE_MULTIPLIERS.loyaltyBonus(loyaltyBonus)
    
    const experiencePerCharge = baseExperiencePerCharge * multiplier
    
    return Math.ceil(totalExperience / experiencePerCharge)
  }

  /**
   * Calcula a progressão detalhada de skills
   */
  private calculateSkillProgression(
    currentSkill: number,
    targetSkill: number,
    skillType: SkillType,
    vocation: Vocation,
    loyaltyBonus: number,
    doubleEvent: boolean,
    privateDummy: boolean
  ): SkillProgression[] {
    const progression: SkillProgression[] = []
    const formulas = VOCATION_SKILL_FORMULAS[vocation]
    
    for (let skill = currentSkill; skill < targetSkill; skill++) {
      const experience = formulas[skillType](skill)
      const chargesNeeded = this.calculateChargesNeeded(skill, skill + 1, skillType, vocation, loyaltyBonus, doubleEvent, privateDummy)
      
      progression.push({
        skill: skill + 1,
        experience,
        timeToNext: chargesNeeded * 2 // 2 segundos por charge
      })
    }
    
    return progression
  }

  /**
   * Encontra a combinação mais eficiente de weapons
   */
  public findOptimalWeaponCombination(
    currentSkill: number,
    targetSkill: number,
    skillType: SkillType,
    vocation: Vocation,
    loyaltyBonus: number,
    doubleEvent: boolean,
    privateDummy: boolean
  ): { weapon: ExerciseWeapon, quantity: number, totalCost: number } {
    const availableWeapons = this.getWeaponsBySkillType(skillType)
    let bestOption = { weapon: availableWeapons[0], quantity: 0, totalCost: Infinity }
    
    for (const weapon of availableWeapons) {
      const totalCharges = this.calculateChargesNeeded(
        currentSkill, 
        targetSkill, 
        skillType, 
        vocation, 
        loyaltyBonus, 
        doubleEvent, 
        privateDummy
      )
      
      const weaponsNeeded = Math.ceil(totalCharges / weapon.charges)
      const totalCost = weaponsNeeded * weapon.cost
      
      if (totalCost < bestOption.totalCost) {
        bestOption = { weapon, quantity: weaponsNeeded, totalCost }
      }
    }
    
    return bestOption
  }

  /**
   * Calcula o custo total e tempo necessário
   */
  public calculateExerciseWeapon(
    currentSkill: number,
    targetSkill: number,
    weapon: ExerciseWeapon,
    vocation: Vocation,
    loyaltyBonus: number,
    doubleEvent: boolean,
    privateDummy: boolean
  ): ExerciseCalculation {
    const totalCharges = this.calculateChargesNeeded(
      currentSkill, 
      targetSkill, 
      weapon.skillType, 
      vocation, 
      loyaltyBonus, 
      doubleEvent, 
      privateDummy
    )
    
    const weaponsNeeded = Math.ceil(totalCharges / weapon.charges)
    const totalCost = weaponsNeeded * weapon.cost
    const totalTime = totalCharges * 2 // 2 segundos por charge
    
    const skillGains = this.calculateSkillProgression(
      currentSkill,
      targetSkill,
      weapon.skillType,
      vocation,
      loyaltyBonus,
      doubleEvent,
      privateDummy
    )
    
    return {
      currentSkill,
      targetSkill,
      weapon,
      loyaltyBonus,
      doubleEvent,
      privateDummy,
      totalCost,
      totalTime,
      totalCharges,
      skillGains
    }
  }

  /**
   * Filtra weapons por tipo de skill
   */
  public getWeaponsBySkillType(skillType: SkillType): ExerciseWeapon[] {
    return EXERCISE_WEAPONS.filter(weapon => weapon.skillType === skillType)
  }

  /**
   * Formata tempo em formato legível
   */
  public formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    
    if (hours > 0) {
      return `${hours}h ${minutes}m ${remainingSeconds}s`
    } else if (minutes > 0) {
      return `${minutes}m ${remainingSeconds}s`
    } else {
      return `${remainingSeconds}s`
    }
  }

  /**
   * Formata número com separadores de milhares
   */
  public formatNumber(num: number): string {
    return num.toLocaleString('pt-BR')
  }
}
