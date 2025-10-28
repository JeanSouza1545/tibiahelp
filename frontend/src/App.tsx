import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '@presentation/components/Header'
import Footer from '@presentation/components/Footer'
import LandingPage from '@presentation/pages/LandingPage'
import CalculatorsPage from '@presentation/pages/CalculatorsPage'
import AboutPage from '@presentation/pages/AboutPage'
import XpLevelCalculator from '@presentation/pages/calculators/XpLevelCalculator'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/calculators/xp-level" element={<XpLevelCalculator />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
