import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './sidebar.css'
import logo from './../../images/logo.png'
import exit from './../../images/exit.png'
import { logout } from '../../store/authSlice';

export default function Sidebar(){
    const user = useSelector(state=>state.auth.dataUser)
    const dispatch = useDispatch()

    return(
        <div className='sidebar'>
            <img src={logo}/>
            <div className='menu'>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projetos</Link>
                <Link to='/users'>Usuários</Link>
            </div>

            <div className='info-user'>
                <p>Olá, <b>{user.name}</b></p>
                <button onClick={()=>dispatch(logout())}><img src={exit}/></button>
            </div>
        </div>
    )
}