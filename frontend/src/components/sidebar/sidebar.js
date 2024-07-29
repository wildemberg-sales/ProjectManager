import React from 'react';
import './sidebar.css'
import logo from './../../images/logo.png'

export default function Sidebar(){
    return(
        <div className='sidebar'>
            <img src={logo}/>
            <a href="#">asdfasdf</a>
            <p>asdf</p>
            <a href="#">asdfasdasdf</a>
            <p>asdf</p>
            <a href="#">asdfaasdsdf</a>
            <p>asdf</p>
            <a href="#">asdfasdfasdf</a>
        </div>
    )
}