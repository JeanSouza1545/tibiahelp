import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header: React.FC = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header style={{ 
      backgroundColor: '#1a1a1a', 
      color: 'white', 
      padding: '1rem 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', margin: 0 }}>
              tibiaHelp
            </h1>
          </Link>
          <nav>
            <ul style={{ 
              display: 'flex', 
              listStyle: 'none', 
              gap: '2rem',
              margin: 0,
              padding: 0
            }}>
              <li>
                <Link 
                  to="/" 
                  style={{ 
                    color: isActive('/') ? '#007bff' : 'white', 
                    textDecoration: 'none',
                    fontWeight: isActive('/') ? 'bold' : 'normal'
                  }}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  to="/calculators" 
                  style={{ 
                    color: isActive('/calculators') ? '#007bff' : 'white', 
                    textDecoration: 'none',
                    fontWeight: isActive('/calculators') ? 'bold' : 'normal'
                  }}
                >
                  Calculadoras
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  style={{ 
                    color: isActive('/about') ? '#007bff' : 'white', 
                    textDecoration: 'none',
                    fontWeight: isActive('/about') ? 'bold' : 'normal'
                  }}
                >
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
