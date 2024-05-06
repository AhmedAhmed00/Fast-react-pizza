import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateName } from '../user/userSlice'

export default function SearchOrder() {


    const [query, setQuery] = useState('')
    const navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault() // prevent Reload
        if (!query) return
        navigate(`/order/${query}`)

        setQuery('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='serach order#'
                value={query}
                onChange={(e) => { setQuery(e.target.value) }}
                className='w-28 rounded-full
             bg-yellow-100
              px-4 text-sm placeholder:text-stone-400 sm:w-64 transition-all duration-300
              sm:focus:w-72 sm:foucs:sm:w-64 focus:outline-none'
            />
        </form>

    )
}
