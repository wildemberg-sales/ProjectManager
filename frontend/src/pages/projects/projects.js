import React from "react";
import './projects.css'
import ProjectModule from "../../components/project/projectModule";

export default function Projects(){
    return(
        <div className="projects">
            <h2>Todos os projetos</h2>
            <div className='projects-display'>
                <ProjectModule title="projeto1" description="asdfjçalsdfjçasl" img="https://fm2s.com.br/storage/blog/images/o-que-e-projeto.webp" id={1}/>
                <ProjectModule title="projeto1" description="asdfjçalsdfjçasl" img="https://fm2s.com.br/storage/blog/images/o-que-e-projeto.webp" id={2}/>
                <ProjectModule title="projeto1" description="asdfjçalsdfjçasl" img="https://fm2s.com.br/storage/blog/images/o-que-e-projeto.webp" id={3}/>
                <ProjectModule title="projeto1" description="asdfjçalsdfjçasl" img="https://fm2s.com.br/storage/blog/images/o-que-e-projeto.webp" id={4}/>
                <ProjectModule title="projeto1" description="asdfjçalsdfjçasl" img="https://fm2s.com.br/storage/blog/images/o-que-e-projeto.webp" id={5}/>
                <ProjectModule title="projeto1" description="asdfjçalsdfjçasl" img="https://fm2s.com.br/storage/blog/images/o-que-e-projeto.webp" id={6}/>
                <ProjectModule title="projeto1" description="asdfjçalsdfjçasl" img="https://fm2s.com.br/storage/blog/images/o-que-e-projeto.webp" id={7}/>
                <ProjectModule title="projeto1" description="asdfjçalsdfjçasl" img="https://fm2s.com.br/storage/blog/images/o-que-e-projeto.webp" id={8}/>
                <ProjectModule title="projeto1" description="asdfjçalsdfjçasl" img="https://fm2s.com.br/storage/blog/images/o-que-e-projeto.webp" id={9}/>
                <ProjectModule title="projeto1" description="asdfjçalsdfjçasl" img="https://fm2s.com.br/storage/blog/images/o-que-e-projeto.webp" id={10}/>
            </div>
            
        </div>
    )
}