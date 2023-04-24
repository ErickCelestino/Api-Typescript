import { Request, Response } from "express";
import { ProductService } from "./product.service";

class ProductController {

    async list(req: Request,res: Response){
        const findProduct =  await new  ProductService().list()
        res.status(200).json(findProduct)
    }

    async create(req: Request,res: Response){
        const createProduct = await new ProductService().create(req.body)
        res.status(201).json(createProduct)
    }

    async findOne(req: Request,res: Response){
        const findProductId = await new ProductService().findOneId(req.params.id)
        res.status(200).json(findProductId)
    }

    async update(req: Request,res: Response){
        const updateProduct = await new ProductService().update(req.params.id,req.body)
        res.status(200).json(updateProduct)
    }

    async delete(req: Request,res: Response){
        const deleteProduct = await new ProductService().delete(req.params.id)
        res.status(200).json(deleteProduct)
    }

    async findProductByName(req: Request,res: Response){
        const findProductByName = await new ProductService().findByName(req.query.name)
        res.status(200).json(findProductByName)
    }
}

export default new ProductController