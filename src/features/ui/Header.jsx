import React from 'react'
import { Link } from 'react-router-dom';
import SearchOrder from './../order/SearchOrder';
import Username from '../user/Username';

export default function Header() {
    return (
        <header className='bg-yellow-300 border-b border-stone-300  px-4 py-3 flex justify-between sm:px-6 '>
            <Link to='/' className='tracking-[2px] text-[20px]'>
                Fast React Pizza Co
            </Link>
            <SearchOrder />
            <Username />

        </header>
    )
}
