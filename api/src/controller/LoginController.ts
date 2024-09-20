import type { Request, Response } from "express"
import { UserRepository } from "../repositories/UserRepository"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"



class LoginController{

    async login(req:Request, res:Response){
        const {email, password} = req.body

        const user = await UserRepository.findOneBy({email:email})
       
        if(!user){
            return res.status(400).send("Email ou senha inválidos")
        }

        const verifyPass = await bcrypt.compare(password, user.password)

        if(!verifyPass){
            return res.status(400).send("Email ou senha inválidos")
        }

        const token = jwt.sign({id:user.id}, "çlKJP*KG*YUI¨&%DF%ËV&ËJ¨$DIFGKUYTUR%&d", {expiresIn: '1d'})

        const {password: _, ...userReturn} = user

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Use HTTPS em produção
            sameSite: 'strict',
        });
          
        res.status(200).json(userReturn);
    }

    async getProfile(req:Request, res:Response){
        return res.json(req.user)
    }

}

export default new LoginController()