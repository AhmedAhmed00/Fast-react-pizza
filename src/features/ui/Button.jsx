import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Button({ children, disabled, type, onclick }) {

    const navigate = useNavigate()


    const base = ` bg-yellow-400 text-sm uppercase text-stone-800  inline-block rounded-full font-semibold
          hover:bg-yellow-600 transition-colors duration-300 focus:outline-none`

    const styles = {
        rounded: base + ' px-2.5 py-1 md:px-3 md:py-2 text-sm',
        primary: base + ' px-4 py-3 sm:px-6 sm:py-4',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
        secondary: `bg-transparent text-sm uppercase text-stone-800 border-2 border-stone-200 inline-block rounded-full font-semibold
          hover:bg-yellow-600 transition-colors duration-300 focus:outline-none md:px-6 md:py-4`
    }
    return (

        <button onClick={onclick} disabled={disabled} className={styles[type]}>{
            children
        }
        </button>
    )
}
