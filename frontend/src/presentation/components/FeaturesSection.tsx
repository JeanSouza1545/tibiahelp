import React from 'react'
import { Link } from 'react-router-dom'

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Calculadoras Avançadas',
      description: 'Ferramentas de cálculo para experiência, dano, resistências e muito mais.',
      icon: '🧮',
      link: '/calculators',
      available: true
    },
    {
      title: 'Consultas em Tempo Real',
      description: 'Dados atualizados diretamente das APIs oficiais da CipSoft.',
      icon: '📊',
      link: '/calculators',
      available: false
    },
    {
      title: 'Análise de Personagens',
      description: 'Estatísticas detalhadas e comparações entre personagens.',
      icon: '⚔️',
      link: '/calculators',
      available: false
    },
    {
      title: 'Marketplace Integration',
      description: 'Preços atualizados do marketplace e análise de tendências.',
      icon: '💰',
      link: '/calculators',
      available: false
    },
    {
      title: 'Guild Management',
      description: 'Ferramentas para gerenciamento e análise de guilds.',
      icon: '🏰',
      link: '/calculators',
      available: false
    },
    {
      title: 'World Events',
      description: 'Acompanhamento de eventos mundiais e bosses.',
      icon: '🌍',
      link: '/calculators',
      available: false
    }
  ]

  const availableFeatures = features.filter(feature => feature.available)
  const comingSoonFeatures = features.filter(feature => !feature.available)

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

        {/* Funcionalidades Disponíveis */}
        {availableFeatures.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: '1.8rem', 
              marginBottom: '2rem',
              color: '#28a745',
              textAlign: 'center'
            }}>
              ✅ Disponíveis Agora
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem' 
            }}>
              {availableFeatures.map((feature, index) => (
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
                    cursor: 'pointer',
                    border: '2px solid #28a745'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
                    e.currentTarget.style.borderColor = '#20c997'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)'
                    e.currentTarget.style.borderColor = '#28a745'
                  }}
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                      {feature.icon}
                    </div>
                    <h4 style={{ 
                      fontSize: '1.5rem', 
                      marginBottom: '1rem',
                      color: '#333'
                    }}>
                      {feature.title}
                    </h4>
                    <p style={{ 
                      color: '#666',
                      lineHeight: '1.6',
                      marginBottom: '1rem'
                    }}>
                      {feature.description}
                    </p>
                    <div style={{
                      backgroundColor: '#28a745',
                      color: 'white',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      display: 'inline-block'
                    }}>
                      Disponível Agora →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Funcionalidades Em Breve */}
        {comingSoonFeatures.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ 
              fontSize: '1.8rem', 
              marginBottom: '2rem',
              color: '#6c757d',
              textAlign: 'center'
            }}>
              🚧 Em Desenvolvimento
            </h3>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem' 
            }}>
              {comingSoonFeatures.map((feature, index) => (
                <div 
                  key={index}
                  style={{
                    backgroundColor: '#f8f9fa',
                    padding: '2rem',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                    textAlign: 'center',
                    border: '2px solid #e9ecef',
                    opacity: 0.7,
                    cursor: 'not-allowed'
                  }}
                >
                  <div style={{ 
                    fontSize: '3rem', 
                    marginBottom: '1rem',
                    opacity: 0.6
                  }}>
                    {feature.icon}
                  </div>
                  <h4 style={{ 
                    fontSize: '1.5rem', 
                    marginBottom: '1rem',
                    color: '#6c757d'
                  }}>
                    {feature.title}
                  </h4>
                  <p style={{ 
                    color: '#adb5bd',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                  }}>
                    {feature.description}
                  </p>
                  <div style={{
                    backgroundColor: '#6c757d',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    display: 'inline-block'
                  }}>
                    Em Breve...
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default FeaturesSection
