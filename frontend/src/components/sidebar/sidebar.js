import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
import logo from './../../images/logo.png'

export default function Sidebar(){
    return(
        <div className='sidebar'>
            <img src={logo}/>
            <Link to='/projects'>Projetos</Link>
        </div>
    )
}