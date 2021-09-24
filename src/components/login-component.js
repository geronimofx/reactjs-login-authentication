import React from 'react';
import { useHistory } from 'react-router';
import { useLocalStorage } from 'usehooks-ts'

import auth from '../services/auth';

function Login() {
    const history = useHistory()
    const [token, setToken] = useLocalStorage('token', null)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState(false)

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
  
    const onSubmit = async () => {
      try {
          setError(false)
          const res = await auth.getToken(email, password)
          setToken(res.data.tokens.access)
          history.push('/')
      } catch(e) {
          setError(true)
      }
    }

    return (
        
        <div>
            
            <h3>Faça login no sistema!</h3>
            <div className="form-group">
                <label>E-mail</label>
                <input type="email" onChange={handleEmail}  className="form-control" placeholder="E-mail"></input>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={handlePassword} className="form-control" placeholder="Password"></input>
            </div>
            <button className="btn btn-primary btn-block" onClick={onSubmit}>Sign Up</button>
            {error && <div><span>Usuário e senha incorreta!</span></div>}
        </div>
    )
}

export default Login