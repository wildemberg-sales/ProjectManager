import React from "react";
import './login.css'
import logo from './../../images/logo.png'

export default function Login(){
    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()

    return(
        <div className="login-page">
            <div className="form-login">
                <img src={logo} />
                <input type="email" required placeholder="Seu Email" onChange={e => setEmail(e.target.value)}/>
                <input type="password" required placeholder="Sua Senha" onChange={e => setPassword(e.target.value)}/>
                <button onClick={()=>console.log(email, password)}>login</button>
            </div>
        </div>
    )
}