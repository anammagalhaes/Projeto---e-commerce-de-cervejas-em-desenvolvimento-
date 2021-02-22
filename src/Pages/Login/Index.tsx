import React, { useRef, useState } from 'react';
import api from '../../services/api';
import { Redirect } from 'react-router-dom'
import { Container } from '.styles'; 

const Login = () => {

    const [permission, setPermission] = useState<Boolean>(false)
  
    let inputName = useRef<HTMLInputElement>(null)
    let inputAge = useRef<HTMLInputElement>(null)
    let inputEmail = useRef<HTMLInputElement>(null)
    let inputPassword = useRef<HTMLInputElement>(null)
  
    const signIn = () => {
      if (Number(inputAge.current?.value) >= 18) {
        api.post('/register', {
          email: inputEmail.current?.value,
          password: inputPassword.current?.value
        })
          .then(response => {
            localStorage.setItem("accessToken", response.data.accessToken)
            setPermission(true)
          })
      } else {
        alert('Acesso proibido para menores de 18 anos.')
      }
    }
  
    return (
      <>
        <Container>
          <div className="form">
            <h1>Cadastre-se</h1>
            <input type="text" placeholder="Nome" ref={inputName}/>
            <input type="number" placeholder="Idade" ref={inputAge}/>
            <input type="email" placeholder="Email" ref={inputEmail}/>
            <input type="password" placeholder="Senha" ref={inputPassword}/>
            <input type="submit" value="Cadastrar" onClick={signIn}/>
          </div>
        </Container>
        {
          permission &&
          <Redirect to="/home" />
        }
      </>
    );
  };
  
  export default Login;