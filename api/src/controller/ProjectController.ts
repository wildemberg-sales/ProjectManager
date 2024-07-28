import { Request, Response } from "express";
import { ProjectRepository } from "../repositories/ProjectRepository";

class ProjectController{
    
    async all(req: Request, res:Response){
        const result = await ProjectRepository.query("SELECT * FROM projects ORDER BY id ASC;")

        if(!result || !result.length){
            return res.send("Nenhum Projeto encontrado")
        }
        return res.json(result)
    }

    async one(req: Request, res:Response){
        const result = await ProjectRepository.findOneBy({id:Number(req.params.id)})
        
        if(result){
            return res.json(result)
        }

        return res.status(404).send("Nenhum projeto encontrado")
    }

    async create(req: Request, res:Response){
        const allowedStatuses = ['pendente', 'em andamento', 'concluido'];
        
        if(!allowedStatuses.includes(req.body.status)){
            return res.status(400).send("Corrija os dados enviados")
        }

        const project = await ProjectRepository.create(req.body)
        await ProjectRepository.save(project)
        return res.status(201).send("Projeto Criado com Sucesso")        
    }

    async update(req: Request, res:Response){
        const allowedStatuses = ['pendente', 'em andamento', 'concluido'];
        
        if(!allowedStatuses.includes(req.body.status)){
            return res.status(400).send("Corrija os dados enviados")
        }

        const project = await ProjectRepository.findOneBy({id:Number(req.params.id)})

        if(!project){
            return res.status(400).send("Projeto Não Existente")
        }
        
        const projectUpdated = await ProjectRepository.merge(project, req.body)
        await ProjectRepository.save(projectUpdated)
        return res.send("Projeto Atualizado com sucesso")
    }

    async delete(req: Request, res:Response){
        const project = await ProjectRepository.findOneBy({id:Number(req.params.id)})

        if(!project){
            return res.status(400).send("Projeto Não Existente")
        }

        await ProjectRepository.delete(Number(req.params.id))
        return res.send("Projeto Deletado")
    }
}

export default new ProjectController()