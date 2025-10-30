import React from 'react'
import { Link } from 'react-router-dom'
import CalculatorCard from '@presentation/components/CalculatorCard'

const CalculatorsPage: React.FC = () => {
  const calculators = [
    {
      id: 'xp-level',
      title: 'Cálculo de XP por Level',
      description: 'Calcule a experiência necessária para alcançar qualquer level',
      icon: '📊',
      path: '/calculators/xp-level',
      available: true
    },
    {
      id: 'exercise-weapons',
      title: 'Exercise Weapons',
      description: 'Calcule o tempo e custo para treinar com exercise weapons',
      icon: '⚔️',
      path: '/calculators/exercise-weapons',
      available: true
    },
    {
      id: 'skills-offline',
      title: 'Skills Offline/Online',
      description: 'Compare o treinamento offline vs online de skills',
      icon: '💪',
      path: '/calculators/skills-training',
      available: false
    },
    {
      id: 'hp-mp-base',
      title: 'HP/MP Base por Level',
      description: 'Calcule HP e MP base para qualquer level',
      icon: '❤️',
      path: '/calculators/hp-mp-base',
      available: false
    },
    {
      id: 'evolution-projection',
      title: 'Projeção de Evolução',
      description: 'Calcule o tempo necessário para upar baseado na XP média',
      icon: '⏰',
      path: '/calculators/evolution-projection',
      available: false
    }
  ]

  const availableCalculators = calculators.filter(calc => calc.available)
  const comingSoonCalculators = calculators.filter(calc => !calc.available)

  return (
    <div className="calculators-page">
      <div className="container">
        <div style={{ 
          textAlign: 'center', 
          padding: '2rem 0',
          backgroundColor: '#f8f9fa',
          marginBottom: '2rem'
        }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1rem',
            color: '#333'
          }}>
            🧮 Calculadoras Tibia
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Ferramentas avançadas para cálculos precisos e análises detalhadas
          </p>
        </div>

        {/* Calculadoras Disponíveis */}
        {availableCalculators.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '2rem',
              color: '#333',
              textAlign: 'center'
            }}>
              ✅ Disponíveis Agora
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem'
            }}>
              {availableCalculators.map((calculator) => (
                <CalculatorCard
                  key={calculator.id}
                  title={calculator.title}
                  description={calculator.description}
                  icon={calculator.icon}
                  path={calculator.path}
                  available={calculator.available}
                />
              ))}
            </div>
          </div>
        )}

        {/* Calculadoras Em Breve */}
        {comingSoonCalculators.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '2rem',
              color: '#333',
              textAlign: 'center'
            }}>
              🚧 Em Desenvolvimento
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem'
            }}>
              {comingSoonCalculators.map((calculator) => (
                <CalculatorCard
                  key={calculator.id}
                  title={calculator.title}
                  description={calculator.description}
                  icon={calculator.icon}
                  path={calculator.path}
                  available={calculator.available}
                />
              ))}
            </div>
          </div>
        )}

        <div style={{ 
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: '#e9ecef',
          borderRadius: '8px'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>
            💡 Dica
          </h3>
          <p style={{ color: '#666', margin: 0 }}>
            Todas as calculadoras são baseadas nas fórmulas oficiais do Tibia e 
            são atualizadas conforme mudanças no jogo.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CalculatorsPage

