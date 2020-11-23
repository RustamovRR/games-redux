import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export default function UserProvider(props) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState([])
    const [auth, setAuth] = useState(false)

    const changeLogin = (e) => {
        setLogin(e.target.value)
    }
    const changePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`http://134.209.202.19/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                login: login,
                pass: password
            })
        })
            .then((res) => res.json())
            .then((res) => {
                setUser(res)
                if (res.token) {
                    setAuth(true)
                    localStorage.setItem('user', res.user.status)
                    window.location.href = '/user'
                }
                if (res.msg) {
                    alert('Login yoki parol xato!')
                }
            })
    }

    const state = {
        auth,
        user,
        login,
        password,
        changeLogin,
        handleSubmit,
        changePassword,
    }

    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    )
}
