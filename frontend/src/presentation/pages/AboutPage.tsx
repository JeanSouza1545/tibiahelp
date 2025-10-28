import React from 'react'

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div style={{ 
          textAlign: 'center', 
          padding: '4rem 0',
          backgroundColor: '#f8f9fa',
          marginBottom: '2rem'
        }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '1rem',
            color: '#333'
          }}>
            Sobre o tibiaHelp
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#666',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Uma plataforma desenvolvida por jogadores, para jogadores de Tibia
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#333', marginBottom: '1rem' }}>🎯 Missão</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Fornecer ferramentas precisas e atualizadas para ajudar jogadores de Tibia 
              a otimizar seu progresso e tomar decisões informadas.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#333', marginBottom: '1rem' }}>⚡ Tecnologia</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Desenvolvido com React, TypeScript e Node.js, seguindo princípios de 
              Clean Architecture e Domain-Driven Design.
            </p>
          </div>

          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#333', marginBottom: '1rem' }}>🔄 Atualizações</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              Todas as fórmulas são baseadas nas informações oficiais e são 
              atualizadas conforme mudanças no jogo.
            </p>
          </div>
        </div>

        <div style={{ 
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: '#e9ecef',
          borderRadius: '8px'
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#333' }}>
            💬 Contribua com o Projeto
          </h3>
          <p style={{ color: '#666', margin: 0 }}>
            Este é um projeto open source. Contribuições, sugestões e feedback são sempre bem-vindos!
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
