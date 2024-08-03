import React from "react";
import './projects.css'
import ProjectModule from "../../components/project/projectModule";

export default function Projects(){
    const [project, setProject] = React.useState()

    React.useEffect(() =>{
        async function getProjects() {
            const res = await fetch(process.env.REACT_APP_URL_API+'/projects', {
                method:"GET",
                credentials:"include"
            })

            if(res.ok){
                return setProject(await res.json())
            }
        }

        getProjects()
    },[])

    return(
        <div className="projects">
            <h2>Todos os projetos</h2>
            <div className='projects-display'>
                {
                    project ? (
                        project.map(proj=>{
                            return <ProjectModule title={proj.name} description={proj.description} img="https://fm2s.com.br/storage/blog/images/o-que-e-projeto.webp" id={proj.id}/>
                        })
                    ) : (
                        <p>Não há projetos</p>
                    )
                }
            </div>
            
        </div>
    )
}