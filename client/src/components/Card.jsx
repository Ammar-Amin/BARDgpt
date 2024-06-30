import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ link, imgUrl, title, desc }) {
    return (
        <Link to={link} className='w-1/3 bg-zinc-950 p-5'>
            <img src={`${imgUrl}`}
                className='object-cover h-[130px] mx-auto mb-2'
            />
            <h4 className='text-xl font-medium my-3'>{title}</h4>
            <p className=''>{desc}</p>
        </Link>
    )
}
