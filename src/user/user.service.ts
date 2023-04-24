import { UserType } from "./types/user.types";
import userSchema from "./user.schema";

export class UserService {

    constructor(){}

    async create(user: UserType){
        try{
       const createdUser = await userSchema.create(user)
        return createdUser
        } catch(err) {
            console.error('Error in create user: ',err)
        }
    }

    async list(){
        try{
        const listedUsers = await userSchema.find()
        return listedUsers
        } catch(err){
            console.error('Error in list user: ',err)
        }
    }

    async find(id) {
        try{
        const findUserById = await userSchema.findById(id)
        return findUserById
        } catch(err) {
            console.error('Error in find user: ',err)
        }
    }

    async update(id, data: UserType){
        try{
        const updatedUser = await userSchema.findOneAndUpdate({__id:id}, {
            firstName: data.firstName,
            lastName: data.lastName,
            age: data.age,
            email: data.email
        },{new: true})

        return updatedUser
        } catch(err) {
            console.error('Error in update user: ',err)
        } 
    }

    async delete(id) {
        try{
            const deleteUser = await userSchema.findByIdAndDelete(id)
            return deleteUser
        } catch(err){
            console.error('Error in delete user: ',err)
        }
    }

    async findByName(name){
        try {
            console.log(name)
            const userByName = await userSchema.find({
                firstName: name
            })
            return userByName
        } catch (err) {
            console.error('Error in findByName user: ',err)
        }
    }
}