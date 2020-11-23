import React, { useContext, useState } from 'react'
import { UserContext } from '../UserContext'
import './login.css'


export default function Login() {
    const [show, setShow] = useState(false)

    const {
        login,
        password,
        changeLogin,
        changePassword,
        handleSubmit,
    } = useContext(UserContext)

    const handleClick = () => {
        setShow(!show)
    }

    return (
        <div className="container">

            <h1>Hello.</h1>
            <h1>Welcome Back</h1>
            <form method='POST' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name='login' id='name' value={login} onChange={changeLogin} />
                </div>

                <div className='password_div'>
                    <label htmlFor='password'>Password</label>
                    <input name='pass' id='password' type={show ? 'text' : 'password'} value={password} onChange={changePassword} />
                    <span onClick={handleClick} id='show'>{show ? 'hide' : 'show'}</span>
                </div>

                <a href="#">Forgot Password?</a>
                <button type='submit' >Login</button>

            </form>
        </div>
    )
}
