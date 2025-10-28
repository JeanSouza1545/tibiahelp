import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '4rem 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem',
          fontWeight: 'bold'
        }}>
          Bem-vindo ao tibiaHelp
        </h1>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem auto'
        }}>
          A plataforma definitiva para jogadores de Tibia. Ferramentas de cálculo, 
          consultas em tempo real e integração com APIs oficiais da CipSoft.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/calculators" className="btn" style={{ backgroundColor: 'white', color: '#667eea' }}>
            Explorar Calculadoras
          </Link>
          <Link to="/about" className="btn btn-secondary" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white' }}>
            Saiba Mais
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
