import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import bcrypt from "bcrypt"
import { ProjectRepository } from "../repositories/ProjectRepository";

class UserController{

    async all(req: Request, res:Response){
        const result = await UserRepository.query("SELECT * FROM users ORDER BY id ASC;")

        if(!result || !result.length){
            return res.send("Nenhuma Usuario encontrada")
        }

        const users = result.map((val:any)=>{
            const {password, ...user} = val
            return user
        })
        
        return res.json(users)
    }

    async one(req: Request, res:Response){
        const result = await UserRepository.findOneBy({id:Number(req.params.id)})

        if(result){
            const {password, ...user} = result
            return res.json(user)
        }

        return res.status(404).send("Nenhum usuário encontrado")
    }

    async create(req: Request, res:Response){
        const {name, email, password} = req.body

        const userExist = await UserRepository.findOneBy({email:email})

        if(userExist){
            return res.status(400).send("Email já em utilização")
        }

        const hashpassword = await bcrypt.hash(password as string, 10)
        const user = {
            name,
            email,
            password:hashpassword
        }
        
        const newUser = await UserRepository.create(user)
        await UserRepository.save(newUser)

        const {password: _, ...userReturn} = newUser

        return res.status(201).json(userReturn)
        
    }

    async update(req: Request, res:Response){
        const userInfo = req.body
        const userExist = await UserRepository.findOneBy({id:Number(req.params.id)})

        if(!userExist){
            return res.status(400).send("Usuário não existente")
        }
        const updateUser = await UserRepository.merge(userExist, userInfo)
        await UserRepository.save(updateUser)

        const {password, ...userReturn} = updateUser
        
        res.json(userReturn)
    }

    
    async update_integrants(req: Request, res:Response){
        const project = await ProjectRepository.findOneBy({id:Number(req.body.project_id)})

        if(!project){
            return res.status(400).send("Projeto Não Existente")
        }
        
        const userExist = await UserRepository.findOne({where:{id:Number(req.params.user_id)}, relations:['projects']})

        if(!userExist){
            return res.status(400).send("Usuário não existente")
        }

        userExist.projects.push(project)

        await UserRepository.save(userExist)
        return res.send("Usuário Adicionado ao Projeto com Sucesso")
    }

    async delete(req: Request, res:Response){
        const userExist = await UserRepository.findOneBy({id:Number(req.params.id)})

        if(!userExist){
            return res.status(400).send("Usuário não existente")
        }

        await UserRepository.delete(Number(req.params.id))
        res.send("Usuário Deletado com Sucesso")
    }

}

export default new UserController()