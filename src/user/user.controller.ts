import { Request, Response, request, response } from "express";
import { UserService } from "./user.service";

class UserController {

    async create(req: Request, res: Response) {
        const user = await new UserService().create(req.body)
        return res.status(201).json(user)
    }

    async list(req: Request, res: Response){
        const users = await new UserService().list()
        return res.status(200).json(users)
    }

    async findOne(req: Request, res: Response){
        const user = await new UserService().find(req.params.id)
        return res.status(200).json(user)
    }

    async update(req: Request, res: Response){
        const user = await new UserService().update(req.params.id,req.body)
        return res.status(200).json(user)
    }

    async delete(req: Request, res: Response) {
        const user = await new UserService().delete(req.params.id)
        return res.status(200).json(user)
    }

    async findByName(req:Request, res: Response) {
        const user = await new UserService().findByName(req.query.name)
        return res.status(200).json(user)
    }

}

export default new UserController()