import React from 'react'
import Header from './Header';
import CartOverview from '../cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

export default function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"


    return (

        <div className='layout grid grid-rows-[auto_1fr_auto] h-screen bg-stone-100'>
            {isLoading && <Loader />}
            <Header />

            <main className='max-w-3xl mx-auto sm:w-screen py-10 '>
                <Outlet />
            </main>
            <footer className='fixed left-0 right-0 bottom-0'>

                <CartOverview />
            </footer>


        </div>
    )
}
