import { Router } from 'express'
import { CreateSpecificationService } from '../modules/Cars/services/CreateSpecificationService'
import { SpecificationsRepository } from '../modules/Cars/repositories/SpecificationsRepository'

export const SpecificationsRoutes = Router()
const specificationsRepository = new SpecificationsRepository()
SpecificationsRoutes.post('/', (req, res) => {
  const { name, description } = req.body
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository,
  )
  createSpecificationService.execute({
    name,
    description,
  })
  return res.status(201).send()
})
