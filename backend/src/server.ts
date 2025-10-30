import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env['PORT'] || 3001

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'tibiaHelp API está funcionando',
    timestamp: new Date().toISOString()
  })
})

// API routes
app.get('/api', (req, res) => {
  res.json({
    message: 'Bem-vindo à API do tibiaHelp',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api'
    }
  })
})

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Algo deu errado!',
    message: process.env['NODE_ENV'] === 'development' ? err.message : 'Erro interno do servidor'
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint não encontrado',
    message: `Rota ${req.originalUrl} não existe`
  })
})

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`)
  console.log(`📊 Health check: http://localhost:${PORT}/health`)
  console.log(`🔗 API: http://localhost:${PORT}/api`)
})

export default app
