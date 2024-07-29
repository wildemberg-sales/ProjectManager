import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from "../../store/authSlice";

import './login.css'
import logo from './../../images/logo.png'

export default function Login(){
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitForm = async (e) => {
        e.preventDefault()

        const res = await fetch('http://localhost:4000/login',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
            credentials: 'include'
        })

        if(res.ok){
            dispatch(loginSuccess())

            console.log(await res.json())

            navigate('/')
        }else{
            const messageError = await res.text()

            const divError = document.querySelector('.message-error-login')
            divError.style.display = 'block'
            divError.innerHTML = messageError

            const inputs = document.querySelectorAll('input')
            inputs.forEach((input)=>{
                input.style.border = '1px solid red'
            })
        }
    }

    return(
        <div className="login-page">
            <div className="form-login">
                <img src={logo} />
                <div className="message-error-login"></div>
                <form onSubmit={submitForm}>
                    <input type="email" value={email} required placeholder="Seu Email" onChange={e => setEmail(e.target.value)}/>
                    <input type="password" value={password} required placeholder="Sua Senha" onChange={e => setPassword(e.target.value)}/>
                    <button type="submit">login</button>
                </form>
            </div>
        </div>
    )
}