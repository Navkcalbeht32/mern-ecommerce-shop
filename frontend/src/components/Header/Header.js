import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-wrapper'>
                <div className='header-logo'>
                    <Link  to='/'>
                        <img src='https://placeholderlogo.com/img/placeholder-logo-7.png' />
                    </Link>
                </div>
                <div className='header-categories'>
                    Categories
                </div>
                <div className='header-search'>    
                    <div className='header-search-wrapper'>
                        <input type='text' placeholder='Search for products'/>
                        <button>
                            <i class="fas fa-search"></i>
                        </button>
                    </div>              
                    
                </div>
                <div className='header-dash'>
                    <Link to='/cart' className='nav-item'>
                        <i className='fas fa-shopping-cart'/>
                    </Link>
                    <Link to='/login' className='nav-item'>
                        <i className='fas fa-user'/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
