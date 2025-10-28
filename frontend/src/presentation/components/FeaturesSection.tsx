import React from 'react'
import { Link } from 'react-router-dom'

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Calculadoras Avançadas',
      description: 'Ferramentas de cálculo para experiência, dano, resistências e muito mais.',
      icon: '🧮',
      link: '/calculators'
    },
    {
      title: 'Consultas em Tempo Real',
      description: 'Dados atualizados diretamente das APIs oficiais da CipSoft.',
      icon: '📊',
      link: '/calculators'
    },
    {
      title: 'Análise de Personagens',
      description: 'Estatísticas detalhadas e comparações entre personagens.',
      icon: '⚔️',
      link: '/calculators'
    },
    {
      title: 'Marketplace Integration',
      description: 'Preços atualizados do marketplace e análise de tendências.',
      icon: '💰',
      link: '/calculators'
    },
    {
      title: 'Guild Management',
      description: 'Ferramentas para gerenciamento e análise de guilds.',
      icon: '🏰',
      link: '/calculators'
    },
    {
      title: 'World Events',
      description: 'Acompanhamento de eventos mundiais e bosses.',
      icon: '🌍',
      link: '/calculators'
    }
  ]

  return (
    <section id="ferramentas" style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          color: '#333'
        }}>
          Ferramentas Planejadas
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {features.map((feature, index) => (
            <Link 
              key={index} 
              to={feature.link}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)'
              }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '1rem',
                  color: '#333'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
