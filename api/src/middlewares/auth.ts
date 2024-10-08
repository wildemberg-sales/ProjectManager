import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { UserRepository } from "../repositories/UserRepository";

type JwtPayload={
    id:number
}

export const authMiddleware = async(req:Request, res:Response, next:NextFunction) => {
    const token = req.cookies.token

    if(!token){
        return res.status(401).send("Não Autorizado!")
    }

    const {id} = jwt.verify(token, "çlKJP*KG*YUI¨&%DF%ËV&ËJ¨$DIFGKUYTUR%&d") as JwtPayload

    const user = await UserRepository.findOneBy({id:id})
    if(!user){
        return res.status(401).send("Não Autorizado!")
    }

    const {password: _, ...loggedUser} = user

    // Utilizando a tipagem criada para não dar erro
    req.user = loggedUser

    next()
}