import { ICategoriesRepository } from "../repositories/ICategoriesRepository"

interface Request{
  name:string
  description:string
}
export class CreateCategoryService{
  constructor(private categoriesRepository: ICategoriesRepository){

  }
  execute({name,description}:Request){

    const categoryAlreadyExists = this.categoriesRepository.findByName(name)
    if(categoryAlreadyExists){
      throw new Error('Category already exists!')
    }
  
   this.categoriesRepository.create({name,description})
  }
}