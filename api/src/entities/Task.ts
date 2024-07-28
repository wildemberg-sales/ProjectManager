import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"
import { Project } from "./Project"

@Entity('taks')
export class Task{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:"text"})
    title:string

    @Column({type:"text"})
    description:string

    @Column({type:"enum", enum:["pendente", "em andamento", "concluido"], default:"pendente"})
    status:string

    @Column({type:"enum", enum:["baixa", "média", "alta"]})
    priority:string

    @Column({type:"text"})
    term:string

    @ManyToOne(()=> User, (user)=>user.tasks)
    @JoinColumn({ name: 'responsible_id' })
    responsible:User

    @ManyToOne(()=> Project, (project)=>project.tasks, {nullable:false})
    @JoinColumn({ name: 'project_id' })
    project:Project
}