import React from 'react'
import Cinema from '../Layout/Cinema/Cinema'
import { Helmet } from 'react-helmet-async'

const CinemaPage = () => {
  return (
    <>
        <Helmet>
            <title>FilmCinema-Catalog</title>
        </Helmet>
        <Cinema/>
    </>
  )
}

export default CinemaPage