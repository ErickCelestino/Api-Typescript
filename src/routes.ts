import { Router } from "express";
import userController from "./user/user.controller";
import productController from "./product/product.controller";


const routes = Router();

routes.post('/users', userController.create)
routes.get('/users',userController.list)
routes.get('/users/:id', userController.findOne)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id',userController.delete)
routes.get('/users-name', userController.findByName)

routes.get('/products', productController.list)
routes.post('/products', productController.create)
routes.get('/products/:id', productController.findOne)
routes.put('/products/:id', productController.update)
routes.delete('/products/:id', productController.delete)
routes.get('/products-name', productController.findProductByName)

export default routes