import React from "react";
import './projectModule.css'
import editarIcon from '../../images/editar.png'
import verIcon from '../../images/circulo.png'
import apagarIcon from '../../images/caixa.png'
import { Link } from "react-router-dom";

export default function ProjectModule(props){
    return(
        <div className="project-module">
            <img src={props.img}/>
            <div className="data-project">
                <h3>{props.title}</h3>
                <p>{props.description}</p>

                <div className="project-icons">
                    <Link className="project-icon" to={`/project/edit/${props.id}`}><img src={editarIcon}/></Link>
                    <Link className="project-icon" to={`/project/${props.id}`}><img src={verIcon}/></Link>
                    <Link className="project-icon" to={`/project/delete/${props.id}`}><img src={apagarIcon}/></Link>
                </div>
            </div>
        </div>
    )
}