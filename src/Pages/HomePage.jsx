import React from 'react'
import Hero from '../Layout/Hero/Hero'
import { Helmet } from 'react-helmet-async'

const HomePage = () => {
    return (
        <>
        <Helmet>
            <title>FilmCinema-Home</title>
        </Helmet>
        <Hero/>
        </>
    )
}

export default HomePage