import { AppDataSource } from "../database/data-source";
import { Project } from "../entities/Project";

export const ProjectRepository = AppDataSource.getRepository(Project)