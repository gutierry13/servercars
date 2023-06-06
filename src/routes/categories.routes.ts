
import { Router } from 'express'
import { Category } from '../model/Category'
import { CategoriesRepository } from '../repositories/CategoriesRepository'
const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()
categoriesRoutes.post('/', (req, res) => {
  const {name,description} = req.body
  const categoryAllreadyExists = categoriesRepository.findByName(name)
  if(categoryAllreadyExists){
    return res.status(400).json({error:"Category already exists"})
  }

 categoriesRepository.create({name,description})
  return res.status(201).send()
})
categoriesRoutes.get('/', (req, res) => {
  const allCategories = categoriesRepository.list()
  return res.status(200).json(allCategories)
  
})
export {categoriesRoutes}