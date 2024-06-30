import React from 'react'
import logo from '../../assets/plant.logo.png'
import { Link } from 'react-router-dom'

export default function Header() {

    const navItems = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Plants',
            path: '/plants',
        },
        {
            name: 'Seeds',
            path: '/seeds',
        },
        {
            name: 'About',
            path: '/about',
        },
    ]

    return (
        <header className='flex justify-between items-center py-6 px-2 md:px-5 max-w-7xl mx-auto'>
            <div className='flex gap-2 items-center'>
                <img src={logo}
                    className='w-8 h-8'
                />
                <h1 className='mb-1 font-bold text-xl md:text-2xl bg-gradient-to-r from-green-400 to-blue-200 text-transparent bg-clip-text'>GreenSwap</h1>
            </div>
            <ul className='flex gap-6 font-semibold items-center'>
                {
                    navItems.map(item => <li key={item.name}>
                        <Link to={item.path}>
                            {item.name}
                        </Link>
                    </li>)
                }
                {
                    <li>
                        <Link path='/login'>
                            Login
                        </Link>
                    </li>
                }
            </ul>
        </header>
    )
}
