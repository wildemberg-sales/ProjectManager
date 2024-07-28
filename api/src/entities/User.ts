import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToMany, JoinTable } from "typeorm"
import { Task } from "./Task"
import { Project } from "./Project"

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"text"})
    name:string

    @Column({type:"text", unique:true})
    email:string

    @Column({type:"text"})
    password:string

    @OneToMany(()=> Task, (taks)=>taks.responsible)
    @JoinColumn()
    tasks: Task[]

    @ManyToMany(()=> Project, (project)=>project.integrants)
    @JoinTable({name:"UsersProjects"})
    projects: Project[]
}
