import { AppDataSource } from "../database/data-source";
import { Task } from "../entities/Task";

export const TaskRepository = AppDataSource.getRepository(Task)