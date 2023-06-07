import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import { SpecificationsRoutes } from './routes/specifications.routes'
// import { categoriesRoutes } from './routes/categories.routes';
const app = express()
app.use(express.json())
// app.use('/categories',categoriesRoutes)
app.use('/categories', categoriesRoutes)
app.use('/specifications', SpecificationsRoutes)
app.listen(3333)
