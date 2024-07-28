import { Router } from "express";
import ProjectController from "./controller/ProjectController";
import UserController from "./controller/UserController";
import LoginController from "./controller/LoginController";
import { authMiddleware } from "./middlewares/auth";
import TaskController from "./controller/TaskController";

const routes = Router()

routes.get('/', (req, res)=>{
    res.send("hello world")
})

// Rota para Login
routes.post("/login", LoginController.login)

//Todas as rotas abaixo daqui vão usar o middleware
routes.use(authMiddleware)

routes.get("/profile", LoginController.getProfile)

// Rota para retornar todos os projetos
routes.get('/projects', ProjectController.all)

// Rota para retornar um projeto
routes.get('/project/:id', ProjectController.one)

// Rota para retornar todos os usuarios
routes.get('/users', UserController.all)

// Rota para retornar de um usuario
routes.get('/user/:id', UserController.one)

// Rota para retornar informações de todas as tarefas de um projeto
routes.get('/tasks/:project_id', TaskController.all)

// Rota para retornar informações de uma tarefa
routes.get('/task/:id', TaskController.one)

// Rota para criar uma tarefa
routes.post('/task/create/:project_id', TaskController.create)

// Rota para criar projetos
routes.post('/project/create', ProjectController.create)

// Rota para criar usuarios
routes.post('/user/create', UserController.create)

// Rota para atualizar informações de um projeto
routes.put('/project/update/:id', ProjectController.update)

// Rota para atualizar informações integrantes do projeto
routes.patch('/user/update-integrants/:user_id', UserController.update_integrants)

// // Rota para atualizar informações de um usuario
routes.put('/user/update/:id', UserController.update)

// Rota para atualizar informações de uma tarefa
routes.put('/task/update/:id', TaskController.update)

// Rota para atualizar adicionar usuario em uma tarefa
routes.put('/task/update-responsible/', TaskController.update_responsible)

// Rota para remover um usuario
routes.delete('/user/delete/:id', UserController.delete)

// Rota para remover um projeto
routes.delete('/project/delete/:id', ProjectController.delete)

// Rota para remover uma tarefa
routes.delete('/task/delete/:id', TaskController.delete)

export default routes