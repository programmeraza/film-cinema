import React, { useEffect, useState } from 'react'
import "./Product.scss"
import { useParams } from 'react-router-dom'
import dataFilms from '../../db/data'

const Product = () => {

        const { id } = useParams();

        const [dataMain, setDataMain] = useState([])
        const [isModal, isModalOpen] = useState(false)
        const [videoSrc, setVideoSrc] = useState('')

        const toggleModal = () => {
            isModalOpen(prev => !prev)
        }

        const toggleOverModal = (e) => {
            if (e.target.className == 'product__modal modal-open') {
                toggleModal()
            }
            console.log(e.target.className);
        }

        useEffect(() => {
            if (!isModal) {
                setVideoSrc('');
            } else {
                const film = dataMain[0];
                if (film) {
                    setVideoSrc(film.videoSrc);
                }
            }
        }, [isModal, dataMain]);


        useEffect(() => {
           const film = dataFilms.find(film => film.id === parseInt([id]))

           if (film) {
            setDataMain([film])
           }
        }, [id])

        console.log(dataMain);

  return (
    <section className={`product product-${id}`}>
        <div className="container">
            {dataMain.map((card) => (
                <>
                    <div key={card.id} className="product__wrapper">
                        <img className='product__img' src={card.image} alt="img" />
                        <div className="product__content">
                            <h2>{card.title}</h2>
                            <h4>{card.releaseDate}</h4>

                            <div className="product__inner">
                                <h3>{card.rating}</h3>
                                <h5><span>{card.duration}</span></h5>
                                <h6>Budget: <span>{card.budget}</span></h6>
                            </div>

                            <p>{card.description}</p>
                            <button onClick={toggleModal} className='btn-main'>Watch trailer</button>
                        </div>
                </div>
                <div onClick={toggleOverModal} className={`product__modal ${isModal ? 'modal-open' : ''}`}>
                    <iframe width="560" height="315" src={`${videoSrc}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                </>
            ))}
        </div>
    </section>
  )
}

export default Product