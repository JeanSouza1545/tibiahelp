import React from 'react'
import { Link } from 'react-router-dom'

interface CalculatorCardProps {
  title: string
  description: string
  icon: string
  path: string
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ 
  title, 
  description, 
  icon, 
  path 
}) => {
  return (
    <Link 
      to={path} 
      style={{ 
        textDecoration: 'none',
        color: 'inherit'
      }}
    >
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        textAlign: 'center',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        border: '2px solid transparent'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
        e.currentTarget.style.borderColor = '#007bff'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
        e.currentTarget.style.borderColor = 'transparent'
      }}
      >
        <div style={{ 
          fontSize: '3rem', 
          marginBottom: '1rem' 
        }}>
          {icon}
        </div>
        <h3 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '1rem',
          color: '#333'
        }}>
          {title}
        </h3>
        <p style={{ 
          color: '#666',
          lineHeight: '1.6',
          marginBottom: '1.5rem'
        }}>
          {description}
        </p>
        <div style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '0.75rem 1.5rem',
          borderRadius: '6px',
          fontSize: '1rem',
          fontWeight: '500',
          display: 'inline-block',
          transition: 'background-color 0.3s ease'
        }}>
          Calcular Agora →
        </div>
      </div>
    </Link>
  )
}

export default CalculatorCard
