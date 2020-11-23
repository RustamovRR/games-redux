import React, { useState } from 'react';
import './user.css';


export default function User() {
    const user = localStorage.getItem('user')
    const [show, setShow] = useState(false)

    const handleClick = () => {
        let drop = document.getElementsByClassName('drop_menu')[0]
        let logo = document.getElementsByClassName('logo')[0]
        setShow(!show)
        drop.style.display = show ? 'block' : 'none'
        logo.style.marginBottom = show ? '290px' : '0'
    }

    return (
        <>
            <nav>
                <div className='logo'>
                    Logo
                </div>


                <div class="drop">
                    <ul class="drop_menu">
                        <li>
                            <a href='#'>{user} 1</a>
                            <ul>
                                <li><a href='#'>{user}1.1</a></li>
                                <li><a href='#'>{user}1.2</a></li>
                                <li><a href='#'>{user}1.3</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href='#'>{user} 2</a>
                            <ul>
                                <li><a href='#'>{user}2.1</a></li>
                                <li><a href='#'>{user}2.2</a></li>
                                <li><a href='#'>{user}2.3</a></li>
                            </ul>
                        </li>

                        <li><a href='#'>{user} 3</a>
                            <ul>
                                <li><a href='#'>{user}3.1</a></li>
                                <li><a href='#'>{user}3.2</a></li>
                                <li><a href='#'>{user}3.3</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <i class="fa fa-bars" onClick={handleClick}></i>
            </nav>
        </>
    )
}
