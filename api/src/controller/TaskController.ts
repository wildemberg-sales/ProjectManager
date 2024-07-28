import { Request, Response } from "express";
import { TaskRepository } from "../repositories/TaskRepository";
import { ProjectRepository } from "../repositories/ProjectRepository";
import { UserRepository } from "../repositories/UserRepository";
import { takeCoverage } from "v8";

class TaskController{

    async all(req: Request, res:Response){
        const project = await ProjectRepository.findOneBy({id:Number(req.params.project_id)})

        if(!project){
            return res.status(400).send("Projeto Não Existente")
        }

        const task = await TaskRepository.query(
            "SELECT id, title, description, status, priority, term, responsible_id FROM taks WHERE project_id=$1;",
            [req.params.project_id])
        
        if(!task || !task.length){
            return res.send("Nenhuma Task encontrada")
        }

        return res.json(task)
    }

    async one(req: Request, res:Response){
        const task = await TaskRepository.query("SELECT id, title, description, status, priority, term, responsible_id FROM taks WHERE id=$1;",[Number(req.params.id)])
        if(!task){
            return res.status(404).send("Nenhuma Task encontrada")
        }
        return res.json(task)
    }

    async create(req: Request, res:Response){
        const project = await ProjectRepository.findOneBy({id:Number(req.params.project_id)})

        if(!project){
            return res.status(400).send("Projeto Não Existente")
        }

        const allowedStatuses = ['pendente', 'em andamento', 'concluido'];
        const allowedPriority = ["baixa", "média", "alta"]
        
        if(!allowedStatuses.includes(req.body.status) || !allowedPriority.includes(req.body.priority)){
            return res.status(400).send("Corrija os dados enviados")
        }
        
        const newTask = req.body
        newTask.project = project 
        
        const task = await TaskRepository.create(newTask)
        await TaskRepository.save(task)
        return res.status(201).send("Task Criada com Sucesso")
    }

    async update(req: Request, res:Response){
        const allowedStatuses = ['pendente', 'em andamento', 'concluido'];
        const allowedPriority = ["baixa", "média", "alta"]
        
        if(!allowedStatuses.includes(req.body.status) || !allowedPriority.includes(req.body.priority)){
            return res.status(400).send("Corrija os dados enviados")
        }

        const task = await TaskRepository.findOneBy({id:Number(req.params.id)})

        if(!task){
            return res.status(400).send("Task Não Existente")
        }

        const taskUpdated = await TaskRepository.merge(task, req.body)
        await TaskRepository.save(taskUpdated)
        return res.send("Task Atualizada com sucesso")
    }

    async update_responsible(req: Request, res:Response){

        const task = await TaskRepository.findOneBy({id:Number(req.body.task_id)})

        if(!task){
            return res.status(400).send("Task Não Existente")
        }

        const userExist = await UserRepository.findOneBy({id:Number(req.body.user_id)})

        if(!userExist){
            return res.status(400).send("Usuário não existente")
        }

        task.responsible = userExist

        await TaskRepository.save(task)
        return res.send("Task Atualizada com sucesso")
    }

    async delete(req: Request, res:Response){
        const task = await TaskRepository.findOneBy({id:Number(req.params.id)})

        if(!task){
            return res.status(400).send("Task Não Existente")
        }

        await TaskRepository.delete(Number(req.params.id))
        return res.send("Task Deletada")
    }

}

export default new TaskController()