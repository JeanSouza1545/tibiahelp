// Domain: Exercise Weapon Repository
import { ExerciseWeapon, SkillType } from '../entities/ExerciseWeapon'

export interface ExerciseWeaponRepository {
  findBySkillType(skillType: SkillType): ExerciseWeapon[]
  findById(id: string): ExerciseWeapon | null
  findAll(): ExerciseWeapon[]
}

export class InMemoryExerciseWeaponRepository implements ExerciseWeaponRepository {
  private weapons: ExerciseWeapon[] = []

  constructor() {
    this.initializeWeapons()
  }

  findBySkillType(skillType: SkillType): ExerciseWeapon[] {
    return this.weapons.filter(weapon => weapon.skillType === skillType)
  }

  findById(id: string): ExerciseWeapon | null {
    return this.weapons.find(weapon => weapon.id === id) || null
  }

  findAll(): ExerciseWeapon[] {
    return [...this.weapons]
  }

  private initializeWeapons(): void {
    // Sword Weapons
    this.weapons.push(ExerciseWeapon.createSwordRegular())
    this.weapons.push(ExerciseWeapon.createSwordDurable())
    this.weapons.push(ExerciseWeapon.createSwordLasting())

    // Axe Weapons
    this.weapons.push(ExerciseWeapon.createAxeRegular())
    this.weapons.push(ExerciseWeapon.createAxeDurable())
    this.weapons.push(ExerciseWeapon.createAxeLasting())

    // Club Weapons
    this.weapons.push(new ExerciseWeapon({
      id: 'exercise-club',
      name: 'Exercise Club',
      skillType: SkillType.MELEE,
      meleeWeaponType: 'club' as any,
      weaponType: 'regular' as any,
      charges: 500,
      cost: 347222
    }))
    this.weapons.push(new ExerciseWeapon({
      id: 'durable-exercise-club',
      name: 'Durable Exercise Club',
      skillType: SkillType.MELEE,
      meleeWeaponType: 'club' as any,
      weaponType: 'durable' as any,
      charges: 1800,
      cost: 1250000
    }))
    this.weapons.push(new ExerciseWeapon({
      id: 'lasting-exercise-club',
      name: 'Lasting Exercise Club',
      skillType: SkillType.MELEE,
      meleeWeaponType: 'club' as any,
      weaponType: 'lasting' as any,
      charges: 14400,
      cost: 10000000
    }))

    // Distance Weapons
    this.weapons.push(new ExerciseWeapon({
      id: 'exercise-bow',
      name: 'Exercise Bow',
      skillType: SkillType.DISTANCE,
      weaponType: 'regular' as any,
      charges: 500,
      cost: 347222
    }))
    this.weapons.push(new ExerciseWeapon({
      id: 'durable-exercise-bow',
      name: 'Durable Exercise Bow',
      skillType: SkillType.DISTANCE,
      weaponType: 'durable' as any,
      charges: 1800,
      cost: 1250000
    }))
    this.weapons.push(new ExerciseWeapon({
      id: 'lasting-exercise-bow',
      name: 'Lasting Exercise Bow',
      skillType: SkillType.DISTANCE,
      weaponType: 'lasting' as any,
      charges: 14400,
      cost: 10000000
    }))

    // Shield Weapons
    this.weapons.push(new ExerciseWeapon({
      id: 'exercise-shield',
      name: 'Exercise Shield',
      skillType: SkillType.SHIELD,
      weaponType: 'regular' as any,
      charges: 500,
      cost: 347222
    }))
    this.weapons.push(new ExerciseWeapon({
      id: 'durable-exercise-shield',
      name: 'Durable Exercise Shield',
      skillType: SkillType.SHIELD,
      weaponType: 'durable' as any,
      charges: 1800,
      cost: 1250000
    }))
    this.weapons.push(new ExerciseWeapon({
      id: 'lasting-exercise-shield',
      name: 'Lasting Exercise Shield',
      skillType: SkillType.SHIELD,
      weaponType: 'lasting' as any,
      charges: 14400,
      cost: 10000000
    }))

    // Magic Weapons
    this.weapons.push(new ExerciseWeapon({
      id: 'exercise-wand',
      name: 'Exercise Wand',
      skillType: SkillType.MAGIC,
      weaponType: 'regular' as any,
      charges: 500,
      cost: 347222
    }))
    this.weapons.push(new ExerciseWeapon({
      id: 'durable-exercise-wand',
      name: 'Durable Exercise Wand',
      skillType: SkillType.MAGIC,
      weaponType: 'durable' as any,
      charges: 1800,
      cost: 1250000
    }))
    this.weapons.push(new ExerciseWeapon({
      id: 'lasting-exercise-wand',
      name: 'Lasting Exercise Wand',
      skillType: SkillType.MAGIC,
      weaponType: 'lasting' as any,
      charges: 14400,
      cost: 10000000
    }))

    // Fist Weapons
    this.weapons.push(new ExerciseWeapon({
      id: 'exercise-dummy',
      name: 'Exercise Dummy',
      skillType: SkillType.FIST,
      weaponType: 'regular' as any,
      charges: 500,
      cost: 347222
    }))
    this.weapons.push(new ExerciseWeapon({
      id: 'durable-exercise-dummy',
      name: 'Durable Exercise Dummy',
      skillType: SkillType.FIST,
      weaponType: 'durable' as any,
      charges: 1800,
      cost: 1250000
    }))
    this.weapons.push(new ExerciseWeapon({
      id: 'lasting-exercise-dummy',
      name: 'Lasting Exercise Dummy',
      skillType: SkillType.FIST,
      weaponType: 'lasting' as any,
      charges: 14400,
      cost: 10000000
    }))
  }
}
