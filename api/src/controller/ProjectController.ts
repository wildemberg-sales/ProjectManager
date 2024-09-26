import type { Request, Response } from "express";
import { ProjectRepository } from "../repositories/ProjectRepository";

class ProjectController{
    
    async all(req: Request, res:Response){
        const result = await ProjectRepository.query("SELECT * FROM projects ORDER BY id ASC;")

        return res.json(result)
    }

    async one(req: Request, res:Response){
        const result = await ProjectRepository.findOneBy({id:Number(req.params.id)})

        if(!result){
            return res.status(400).json({message:"Nenhum projeto encontrado"})
        }
        
        return res.json(result)
    }

    async create(req: Request, res:Response){
        const allowedStatuses = ['pendente', 'em andamento', 'concluido'];
        
        if(!allowedStatuses.includes(req.body.status)){
            return res.status(400).json({message:"Corrija os dados enviados"})
        }

        const project = await ProjectRepository.create(req.body)
        await ProjectRepository.save(project)
        return res.status(201).json({message:"Projeto Criado com Sucesso"}) 
    }

    async update(req: Request, res:Response){
        const allowedStatuses = ['pendente', 'em andamento', 'concluido'];
        
        if(!allowedStatuses.includes(req.body.status)){
            return res.status(400).json({message:"Corrija os dados enviados"})
        }

        const project = await ProjectRepository.findOneBy({id:Number(req.params.id)})

        if(!project){
            return res.status(400).json({message:"Projeto Não Existente"})
        }
        
        const projectUpdated = await ProjectRepository.merge(project, req.body)
        await ProjectRepository.save(projectUpdated)
        return res.json({message:"Projeto Atualizado com sucesso"})
    }

    async delete(req: Request, res:Response){
        const project = await ProjectRepository.findOneBy({id:Number(req.params.id)})

        if(!project){
            return res.status(400).json({message:"Projeto Não Existente"})
        }

        await ProjectRepository.delete(Number(req.params.id))
        return res.json({message:"Projeto Deletado"})
    }
}

export default new ProjectController()