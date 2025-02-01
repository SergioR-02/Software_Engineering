import express, { json } from 'express' // require -> commonJS
import { Models } from './modelTypes'
// importar routers
import { corsMiddleware } from './middlewares/cors'
// import 'dotenv/config'

// después
export const createApp = ({ models }: { models: Models }): express.Application => {
  const app = express()
  app.use(json())
  app.use(corsMiddleware())
  app.disable('x-powered-by')
  // app.use('/route', createRouter({ model: models.xyModel }))

  app.get('/', (_req, res) => {
    res.send(models.prueba)
  })

  const PORT = process.env.PORT ?? 1234
  app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
  })

  return app
}
