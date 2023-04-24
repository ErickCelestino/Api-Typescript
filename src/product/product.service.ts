import productSchema from "./product.schema";
import { ProductType } from "./types/product.type";

export class ProductService {
    
    async list(){
        try{
            const listAllProducts = await productSchema.find()
            return listAllProducts
        }catch(err){
            console.error('Error in list prouct: ',err)
        }
    }

    async create(product){
        try {
            const createProduct = await productSchema.create(product)
            return createProduct
        } catch(err) {
            console.error('Error in create product: ',err)
        }
    }

    async findOneId(id){
        try{
            const findOneProduct = await productSchema.findById(id)
            return findOneProduct
        } catch(err) {
            console.error('Error in find One product: ',err)
        }
    }

    async update(id, data: ProductType){
        try{
            const updateProduct = await productSchema.findOneAndUpdate({__id:id},{
                name: data.name,
                quantity: data.quantity,
                price: data.price
            },{new: true})
            return updateProduct

        } catch(err) {
            console.error('Error in update product: ',err)
        }
    }

    async delete(id){
        try{
            const deleteProduct = await productSchema.findOneAndDelete(id)
            return deleteProduct
        } catch(err) {
            console.error('Error in delete product: ',err)
        }
    }

    async findByName(name){
        try{
            const findProductByName = await productSchema.find({
                name: name
            })
            return findProductByName
        } catch(err){
            console.error('Error in find By Name product: ',err)
        }
    }
}