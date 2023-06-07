
import { Router } from 'express'
import { Category } from '../modules/Cars/model/Category'
import { CategoriesRepository } from '../modules/Cars/repositories/CategoriesRepository'
import { CreateCategoryService } from '../modules/Cars/services/CreateCategoryService'
const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()
categoriesRoutes.post('/', (req, res) => {
  const {name,description} = req.body
  const createCategoryService = new CreateCategoryService(categoriesRepository)
  createCategoryService.execute({name,description})
  return res.status(201).send()
})
categoriesRoutes.get('/', (req, res) => {
  const allCategories = categoriesRepository.list()
  return res.status(200).json(allCategories)
  
})
export {categoriesRoutes}