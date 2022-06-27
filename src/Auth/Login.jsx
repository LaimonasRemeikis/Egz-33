import React, { useState } from 'react'
import axios from 'axios';
import { login } from './auth';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
  
    const doLogin = () => {
      axios.post('http://localhost:3005/login', { user, pass })
        .then(res => {
          console.log(res.data);
          if ('ok' === res.data.msg) {
            login(res.data.key);
            navigate('/admin/', { replace: true });
          }
        })
    }

  
  return (
   <div class="login-box">
<h2>Login</h2>
<form>
  <div class="user-box">
    <input type="text" value={user} onChange={e => setUser(e.target.value)} name="" required=""/>
    <label>Username</label>
  </div>
  <div class="user-box">
    <input type="password" value={pass} onChange={e => setPass(e.target.value)} name="" required=""/>
    <label>Password</label>
  </div>
  <a onClick={doLogin} href="#">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    login
  </a>
</form>
</div>


  );
}

export default Login