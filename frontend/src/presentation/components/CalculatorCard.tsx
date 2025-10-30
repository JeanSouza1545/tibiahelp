import React from 'react'
import { Link } from 'react-router-dom'

interface CalculatorCardProps {
  title: string
  description: string
  icon: string
  path: string
  available: boolean
}

const CalculatorCard: React.FC<CalculatorCardProps> = ({ 
  title, 
  description, 
  icon, 
  path,
  available
}) => {
  const cardContent = (
    <div style={{
      backgroundColor: available ? 'white' : '#f8f9fa',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: available ? '0 4px 15px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.05)',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      cursor: available ? 'pointer' : 'not-allowed',
      border: available ? '2px solid transparent' : '2px solid #e9ecef',
      opacity: available ? 1 : 0.7
    }}
    onMouseEnter={(e) => {
      if (available) {
        e.currentTarget.style.transform = 'translateY(-5px)'
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)'
        e.currentTarget.style.borderColor = '#007bff'
      }
    }}
    onMouseLeave={(e) => {
      if (available) {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'
        e.currentTarget.style.borderColor = 'transparent'
      }
    }}
    >
      <div style={{ 
        fontSize: '3rem', 
        marginBottom: '1rem',
        opacity: available ? 1 : 0.6
      }}>
        {icon}
      </div>
      <h3 style={{ 
        fontSize: '1.5rem', 
        marginBottom: '1rem',
        color: available ? '#333' : '#6c757d'
      }}>
        {title}
      </h3>
      <p style={{ 
        color: available ? '#666' : '#adb5bd',
        lineHeight: '1.6',
        marginBottom: '1.5rem'
      }}>
        {description}
      </p>
      <div style={{
        backgroundColor: available ? '#007bff' : '#6c757d',
        color: 'white',
        padding: '0.75rem 1.5rem',
        borderRadius: '6px',
        fontSize: '1rem',
        fontWeight: '500',
        display: 'inline-block',
        transition: 'background-color 0.3s ease'
      }}>
        {available ? 'Calcular Agora →' : 'Em Breve...'}
      </div>
    </div>
  )

  if (available) {
    return (
      <Link 
        to={path} 
        style={{ 
          textDecoration: 'none',
          color: 'inherit'
        }}
      >
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

export default CalculatorCard

