import { Search, ShoppingBasket } from '@material-ui/icons'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../amazon.png'
import { GlobalContext } from '../GlobalState'
import './header.css'

export default function Header() {
    const { basket } = useContext(GlobalContext)

    return (
        <div className='header_root'>
            <nav>
                <Link to='/' className="header_logo">
                    <img src={logo} alt="" />
                </Link>

                <div className="header_search">
                    <input type="text" />
                    <div className="search_icon">
                        <Search />
                    </div>
                </div>

                <div className="header_link">
                    <div className='link'>
                        <small>Hello, Sign in</small>
                        <p>Account & Lists</p>
                    </div>
                    <div className='link'>
                        <small>Returns</small>
                        <p>& Orders</p>
                    </div>
                    <div className="basket">
                        <ShoppingBasket fontSize='large' />
                        <p>{basket?.length}</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}
