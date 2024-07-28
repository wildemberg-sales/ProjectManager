import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn, JoinTable } from "typeorm"
import { User } from "./User"
import { Task } from "./Task"

@Entity('projects')
export class Project{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"text"})
    name:string

    @Column({type:"text"})
    description:string

    @Column({type:"enum", enum:["pendente", "em andamento", "concluido"], default:"pendente"})
    status:string

    @Column({type:"int", default:0})
    progress:number

    @Column({type:"text"})
    term:string

    @OneToMany(()=> Task, (taks)=>taks.project)
    @JoinColumn()
    tasks: Task[]

    @ManyToMany(()=> User, (user)=>user.projects)
    integrants: User[]
}
