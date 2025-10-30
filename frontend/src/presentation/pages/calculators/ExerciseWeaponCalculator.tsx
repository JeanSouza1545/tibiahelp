import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ExerciseWeaponCalculationService, InMemoryExerciseWeaponRepository, InMemoryVocationRepository, ExperienceCalculator } from '@domain'
import { ExerciseWeapon, SkillType } from '@domain/entities/ExerciseWeapon'
import { VocationType } from '@domain/entities/Vocation'

const ExerciseWeaponCalculatorPage: React.FC = () => {
  const weaponRepository = new InMemoryExerciseWeaponRepository()
  const vocationRepository = new InMemoryVocationRepository()
  const experienceCalculator = new ExperienceCalculator()
  const calculator = new ExerciseWeaponCalculationService(
    weaponRepository,
    vocationRepository,
    experienceCalculator
  )
  
  const [selectedVocation, setSelectedVocation] = useState<VocationType>(VocationType.KNIGHT)
  const [currentSkill, setCurrentSkill] = useState<number>(10)
  const [targetSkill, setTargetSkill] = useState<number>(50)
  const [selectedSkillType, setSelectedSkillType] = useState<SkillType>(SkillType.MELEE)
  const [selectedWeapon, setSelectedWeapon] = useState<ExerciseWeapon | null>(null)
  const [loyaltyBonus, setLoyaltyBonus] = useState<number>(0)
  const [loyaltyInput, setLoyaltyInput] = useState<string>('0')
  const [doubleEvent, setDoubleEvent] = useState<boolean>(false)
  const [privateDummy, setPrivateDummy] = useState<boolean>(false)
  const [result, setResult] = useState<any>(null)
  const [optimalResult, setOptimalResult] = useState<any>(null)
  const [isCalculating, setIsCalculating] = useState<boolean>(false)
  const [availableWeapons, setAvailableWeapons] = useState<ExerciseWeapon[]>([])

  useEffect(() => {
    const weapons = calculator.getWeaponsBySkillType(selectedSkillType)
    setAvailableWeapons(weapons)
  }, [selectedSkillType])

  useEffect(() => {
    if (availableWeapons.length > 0 && !selectedWeapon) {
      setSelectedWeapon(availableWeapons[0])
    }
  }, [selectedSkillType, availableWeapons, selectedWeapon])

  useEffect(() => {
    const loyalty = parseInt(loyaltyInput) || 0
    // Arredonda para o múltiplo de 5 mais próximo
    const roundedLoyalty = Math.round(loyalty / 5) * 5
    const finalLoyalty = Math.max(0, Math.min(50, roundedLoyalty))
    setLoyaltyBonus(finalLoyalty)
    if (finalLoyalty !== loyalty) {
      setLoyaltyInput(finalLoyalty.toString())
    }
  }, [loyaltyInput])


  const calculateExercise = () => {
    setIsCalculating(true)
    setTimeout(() => {
      // Se "Auto" estiver selecionado, calcular a melhor opção
      if (!selectedWeapon) {
        const optimal = calculator.findOptimalWeaponCombination(
          currentSkill,
          targetSkill,
          selectedSkillType,
          selectedVocation,
          loyaltyBonus,
          doubleEvent,
          privateDummy
        )
        setOptimalResult(optimal)
        setResult(null) // Limpar resultado normal
      } else {
        // Calcular com weapon específico
        const calculation = calculator.calculateExerciseWeapon(
          currentSkill,
          targetSkill,
          selectedWeapon.id,
          selectedVocation,
          loyaltyBonus,
          doubleEvent,
          privateDummy
        )
        setResult(calculation)
        setOptimalResult(null) // Limpar resultado optimal
      }
      
      setIsCalculating(false)
    }, 100)
  }

  const getMeleeDisplayName = (weapon: ExerciseWeapon): string => {
    if (weapon.skillType !== 'melee' || !weapon.meleeWeaponType) {
      return weapon.name
    }
    const meleeType = weapon.meleeWeaponType.charAt(0).toUpperCase() + weapon.meleeWeaponType.slice(1)
    return `Melee (${meleeType}) - ${weapon.name}`
  }

  const formatNumber = (num: number): string => {
    return num.toLocaleString('pt-BR')
  }

  const formatTime = (seconds: number): string => {
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

  const vocations = [
    { value: VocationType.MONK, label: 'Monk', icon: '👊' },
    { value: VocationType.SORCERER, label: 'Sorcerer', icon: '🔮' },
    { value: VocationType.DRUID, label: 'Druid', icon: '🌿' },
    { value: VocationType.PALADIN, label: 'Paladin', icon: '🏹' },
    { value: VocationType.KNIGHT, label: 'Knight', icon: '⚔️' }
  ]

  const skillTypes = [
    { value: SkillType.MELEE, label: 'Melee (Axe/Sword/Club)', icon: '⚔️' },
    { value: SkillType.DISTANCE, label: 'Distance Fighting', icon: '🏹' },
    { value: SkillType.SHIELD, label: 'Shielding', icon: '🛡️' },
    { value: SkillType.MAGIC, label: 'Magic Level', icon: '🔮' },
    { value: SkillType.FIST, label: 'Fist Fighting', icon: '👊' }
  ]

  return (
    <div className="exercise-calculator">
      <div className="container">
        <div style={{ 
          textAlign: 'center', 
          padding: '2rem 0',
          backgroundColor: '#f8f9fa',
          marginBottom: '2rem'
        }}>
          <Link 
            to="/calculators" 
            style={{ 
              color: '#007bff', 
              textDecoration: 'none',
              fontSize: '1rem',
              marginBottom: '1rem',
              display: 'inline-block'
            }}
          >
            ← Voltar para Calculadoras
          </Link>
          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1rem',
            color: '#333'
          }}>
            ⚔️ Exercise Weapons Calculator
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Calcule o custo e tempo necessário para treinar skills com Exercise Weapons
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Configurações */}
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#333', marginBottom: '1.5rem' }}>Configurações</h3>
            
            {/* Seleção de Classe */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#333'
              }}>
                Classe:
              </label>
              <select
                value={selectedVocation}
                onChange={(e) => setSelectedVocation(e.target.value as VocationType)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              >
                {vocations.map(vocation => (
                  <option key={vocation.value} value={vocation.value}>
                    {vocation.icon} {vocation.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Tipo de Skill */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#333'
              }}>
                Tipo de Skill:
              </label>
              <select
                value={selectedSkillType}
                onChange={(e) => {
                  setSelectedSkillType(e.target.value as SkillType)
                  setSelectedWeapon(null)
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              >
                {skillTypes.map(skill => (
                  <option key={skill.value} value={skill.value}>
                    {skill.icon} {skill.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Weapon Selection */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#333'
              }}>
                Exercise Weapon:
              </label>
              <select
                value={selectedWeapon?.id || ''}
                onChange={(e) => {
                  if (e.target.value === 'auto') {
                    setSelectedWeapon(null)
                    return
                  }
                  const weapon = availableWeapons.find(w => w.id === e.target.value)
                  setSelectedWeapon(weapon || null)
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              >
                <option value="auto">🚀 Auto (Mais Eficiente)</option>
                {availableWeapons.map(weapon => (
                  <option key={weapon.id} value={weapon.id}>
                    {getMeleeDisplayName(weapon)} ({weapon.charges.toLocaleString('pt-BR')} charges - {weapon.cost.toLocaleString('pt-BR')} gold)
                  </option>
                ))}
              </select>
            </div>

            {/* Skill Levels */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#333'
              }}>
                Skill Atual:
              </label>
              <input
                type="number"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(parseInt(e.target.value) || 10)}
                min="10"
                max="100"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#333'
              }}>
                Skill Desejado:
              </label>
              <input
                type="number"
                value={targetSkill}
                onChange={(e) => setTargetSkill(parseInt(e.target.value) || 50)}
                min="10"
                max="100"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              />
            </div>

            {/* Loyalty Bonus */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#333'
              }}>
                Loyalty Bonus: {loyaltyBonus}%
              </label>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={loyaltyBonus}
                  onChange={(e) => {
                    const value = parseInt(e.target.value)
                    setLoyaltyBonus(value)
                    setLoyaltyInput(value.toString())
                  }}
                  style={{
                    flex: 1,
                    height: '6px',
                    borderRadius: '3px',
                    background: '#e9ecef',
                    outline: 'none'
                  }}
                />
                <input
                  type="number"
                  value={loyaltyInput}
                  onChange={(e) => setLoyaltyInput(e.target.value)}
                  min="0"
                  max="50"
                  step="5"
                  style={{
                    width: '60px',
                    padding: '0.5rem',
                    border: '2px solid #e9ecef',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    textAlign: 'center'
                  }}
                />
              </div>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                color: '#666',
                marginTop: '0.5rem'
              }}>
                <span>0%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Checkboxes */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'flex', 
                alignItems: 'center',
                marginBottom: '1rem',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  checked={doubleEvent}
                  onChange={(e) => setDoubleEvent(e.target.checked)}
                  style={{ marginRight: '0.5rem' }}
                />
                <span style={{ color: '#333' }}>Double Event</span>
              </label>
              
              <label style={{ 
                display: 'flex', 
                alignItems: 'center',
                cursor: 'pointer'
              }}>
                <input
                  type="checkbox"
                  checked={privateDummy}
                  onChange={(e) => setPrivateDummy(e.target.checked)}
                  style={{ marginRight: '0.5rem' }}
                />
                <span style={{ color: '#333' }}>Private Dummy</span>
              </label>
            </div>

            <button
              onClick={calculateExercise}
              style={{
                width: '100%',
                backgroundColor: '#007bff',
                color: 'white',
                padding: '0.75rem',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0056b3'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#007bff'
              }}
            >
              {!selectedWeapon ? 'Calcular Melhor Opção' : 'Calcular Exercise'}
            </button>
          </div>

          {/* Resultado */}
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#333', marginBottom: '1.5rem' }}>Resultado</h3>
            
            {/* Indicador de Carregamento */}
            {isCalculating && (
              <div style={{
                backgroundColor: '#e7f3ff',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '2px solid #007bff',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⏳</div>
                <div style={{ color: '#007bff', fontWeight: '500' }}>Calculando...</div>
              </div>
            )}
            
            {/* Resultado Optimal */}
            {optimalResult && !isCalculating && (
              <div style={{
                backgroundColor: '#d4edda',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '2px solid #28a745',
                marginBottom: '1rem'
              }}>
                <h4 style={{ color: '#155724', marginBottom: '1rem' }}>🚀 Opção Mais Eficiente</h4>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Weapon:</strong> {getMeleeDisplayName(optimalResult.weapon)}
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Quantidade:</strong> {optimalResult.quantity}
                </div>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong>Custo Total:</strong> {formatNumber(optimalResult.totalCost)} gold
                </div>
              </div>
            )}

            {/* Resultado Normal */}
            {result && !isCalculating && (
              <div>
                <div style={{
                  backgroundColor: '#e7f3ff',
                  padding: '1.5rem',
                  borderRadius: '8px',
                  border: '2px solid #007bff',
                  marginBottom: '1.5rem'
                }}>
                  <h4 style={{ color: '#007bff', marginBottom: '1rem' }}>📊 Resumo</h4>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <strong>Custo Total:</strong> {formatNumber(result.totalCost)} gold
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <strong>Tempo Total:</strong> {formatTime(result.totalTime)}
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <strong>Charges Necessários:</strong> {formatNumber(result.totalCharges)}
                  </div>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <strong>Weapons Necessários:</strong> {Math.ceil(result.totalCharges / result.weapon.charges)}
                  </div>
                </div>

                <div style={{
                  backgroundColor: '#f8f9fa',
                  padding: '1rem',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}>
                  <h5 style={{ marginBottom: '0.5rem', color: '#333' }}>Multiplicadores Ativos:</h5>
                  <div>Loyalty Bonus: +{result.loyaltyBonus}%</div>
                  {result.doubleEvent && <div>Double Event: +100%</div>}
                  {result.privateDummy && <div>Private Dummy: +10%</div>}
                </div>
              </div>
            )}

            {!result && !optimalResult && !isCalculating && (
              <div style={{
                backgroundColor: '#f8f9fa',
                padding: '1.5rem',
                borderRadius: '8px',
                textAlign: 'center',
                color: '#666'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📝</div>
                <div>Configure as opções e clique em "{!selectedWeapon ? 'Calcular Melhor Opção' : 'Calcular Exercise'}"</div>
              </div>
            )}
          </div>
        </div>

        {/* Tabela de Progressão */}
        {result && result.skillGains.length > 0 && !isCalculating && (
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#333', marginBottom: '1.5rem' }}>📈 Progressão Detalhada</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse',
                fontSize: '0.9rem'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left', border: '1px solid #dee2e6' }}>Skill</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', border: '1px solid #dee2e6' }}>XP Necessária</th>
                    <th style={{ padding: '0.75rem', textAlign: 'left', border: '1px solid #dee2e6' }}>Tempo</th>
                  </tr>
                </thead>
                <tbody>
                  {result.skillGains.slice(0, 20).map((gain: any, index: number) => (
                    <tr key={index}>
                      <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>{gain.skill}</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>{formatNumber(gain.experience)}</td>
                      <td style={{ padding: '0.75rem', border: '1px solid #dee2e6' }}>{formatTime(gain.timeToNext)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {result.skillGains.length > 20 && (
                <div style={{ 
                  textAlign: 'center', 
                  marginTop: '1rem',
                  color: '#666',
                  fontSize: '0.9rem'
                }}>
                  ... e mais {result.skillGains.length - 20} skills
                </div>
              )}
            </div>
          </div>
        )}

        {/* Informações */}
        <div style={{ 
          backgroundColor: '#fff3cd',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '1px solid #ffeaa7',
          marginTop: '2rem'
        }}>
          <h4 style={{ color: '#856404', marginBottom: '1rem' }}>ℹ️ Informações Importantes</h4>
          <ul style={{ color: '#856404', margin: 0, paddingLeft: '1.5rem' }}>
            <li>Os cálculos são baseados nas fórmulas oficiais do Tibia</li>
            <li>Cada classe tem fórmulas específicas para Magic Level</li>
            <li>Exercise Weapons: 500 charges (347.222 gold), 1800 (1.250.000 gold), 14400 (10.000.000 gold)</li>
            <li>Loyalty Bonus: 10% por nível (máximo 50%) - apenas múltiplos de 5</li>
            <li>Double Event: +100% XP | Private Dummy: +10% XP</li>
            <li>Tempo baseado em 2 segundos por charge</li>
            <li>Opção "Auto" encontra a combinação mais eficiente</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExerciseWeaponCalculatorPage