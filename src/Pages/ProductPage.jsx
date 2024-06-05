import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dataFilms from '../db/data'

const ProductPage = () => {

    const { id } = useParams();

    const [dataMain, setDataMain] = useState([])

    useEffect(() => {
       const film = dataFilms.find(film => film.id === parseInt([id]))

       if (film) {
        setDataMain([film])
       }
    }, [id])

    console.log(dataMain);

  return (
    <>
    {dataMain.map((card) => (
        <div className="card" key={card.id}>
            <h4>{card.id}</h4>
            <h4>{card.title}</h4>
            <h4>{card.rating}</h4>
            <h4>{card.releaseDate}</h4>
        </div>
    ))}
    </>
  )
}

export default ProductPage