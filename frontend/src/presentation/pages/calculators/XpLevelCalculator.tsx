import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const XpLevelCalculator: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState<number>(1)
  const [targetLevel, setTargetLevel] = useState<number>(2)
  const [result, setResult] = useState<number | null>(null)

  // Fórmula oficial do Tibia para calcular XP necessária
  const calculateXpForLevel = (level: number): number => {
    if (level <= 1) return 0
    return Math.floor((50 * Math.pow(level, 3) - 150 * Math.pow(level, 2) + 400 * level) / 3)
  }

  const calculateXpNeeded = () => {
    if (currentLevel >= targetLevel) {
      setResult(0)
      return
    }

    const currentXp = calculateXpForLevel(currentLevel)
    const targetXp = calculateXpForLevel(targetLevel)
    const xpNeeded = targetXp - currentXp
    
    setResult(xpNeeded)
  }

  const formatNumber = (num: number): string => {
    return num.toLocaleString('pt-BR')
  }

  return (
    <div className="xp-calculator">
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
            📊 Cálculo de XP por Level
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Calcule a experiência necessária para alcançar qualquer level no Tibia
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#333', marginBottom: '1.5rem' }}>Configurações</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: '#333'
              }}>
                Level Atual:
              </label>
              <input
                type="number"
                value={currentLevel}
                onChange={(e) => setCurrentLevel(parseInt(e.target.value) || 1)}
                min="1"
                max="2000"
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
                Level Desejado:
              </label>
              <input
                type="number"
                value={targetLevel}
                onChange={(e) => setTargetLevel(parseInt(e.target.value) || 2)}
                min="1"
                max="2000"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid #e9ecef',
                  borderRadius: '6px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <button
              onClick={calculateXpNeeded}
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
              Calcular XP Necessária
            </button>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#333', marginBottom: '1.5rem' }}>Resultado</h3>
            
            {result !== null && (
              <div style={{
                backgroundColor: '#e7f3ff',
                padding: '1.5rem',
                borderRadius: '8px',
                border: '2px solid #007bff',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#007bff', marginBottom: '0.5rem' }}>
                  {formatNumber(result)} XP
                </div>
                <div style={{ color: '#666' }}>
                  Necessário para subir do level {currentLevel} para o level {targetLevel}
                </div>
              </div>
            )}

            {result === null && (
              <div style={{
                backgroundColor: '#f8f9fa',
                padding: '1.5rem',
                borderRadius: '8px',
                textAlign: 'center',
                color: '#666'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📝</div>
                <div>Configure os levels e clique em "Calcular XP Necessária"</div>
              </div>
            )}
          </div>
        </div>

        <div style={{ 
          backgroundColor: '#fff3cd',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '1px solid #ffeaa7'
        }}>
          <h4 style={{ color: '#856404', marginBottom: '1rem' }}>ℹ️ Informações Importantes</h4>
          <ul style={{ color: '#856404', margin: 0, paddingLeft: '1.5rem' }}>
            <li>Esta calculadora usa a fórmula oficial do Tibia para cálculo de XP</li>
            <li>Os valores são aproximados e podem variar ligeiramente no jogo</li>
            <li>Para levels muito altos, o cálculo pode levar alguns segundos</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default XpLevelCalculator

