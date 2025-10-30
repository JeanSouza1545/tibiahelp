// Domain: Skill Formulas
export interface SkillFormula {
  calculate(skill: number): number
}

export class BaseSkillFormula implements SkillFormula {
  constructor(private multiplier: number) {}

  calculate(skill: number): number {
    return Math.floor(this.multiplier * Math.pow(skill, 2.4))
  }
}

export class MagicSkillFormula implements SkillFormula {
  constructor(private multiplier: number) {}

  calculate(skill: number): number {
    return Math.floor(this.multiplier * Math.pow(skill, 2.4))
  }
}

// Factory para criar fórmulas específicas
export class SkillFormulaFactory {
  static createMeleeFormula(): SkillFormula {
    return new BaseSkillFormula(50)
  }

  static createDistanceFormula(): SkillFormula {
    return new BaseSkillFormula(50)
  }

  static createShieldFormula(): SkillFormula {
    return new BaseSkillFormula(50)
  }

  static createFistFormula(): SkillFormula {
    return new BaseSkillFormula(50)
  }

  static createMagicFormula(multiplier: number): SkillFormula {
    return new MagicSkillFormula(multiplier)
  }
}
