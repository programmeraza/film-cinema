import React from 'react'
import "./Cinema.scss"
import { Link } from 'react-router-dom'

const Cinema = () => {
  return (
    <>
        <section className='cinema'>
            <div className="container">
                <div className="cinema__wrapper">
                    <Link to={'/film/1'}>
                        <div className="cinema__card">
                            <img src="/public/cinema-1.webp" alt="img" />
                            <p>Echoes of Eternity's Silent Symphony</p>
                        </div>
                    </Link>
                    <Link to={'/film/2'}>
                        <div className="cinema__card">
                            <img src="/public/cinema-2.webp" alt="img" />
                            <p> Whispers of Time's Forgotten Tales</p>
                        </div>
                    </Link>
                    <Link to={'/film/3'}>
                        <div className="cinema__card">
                            <img src="/public/cinema-3.webp" alt="img" />
                            <p>Shadows of Dawn's First Light</p>
                        </div>
                    </Link>
                    <Link to={'/film/4'}>
                        <div className="cinema__card">
                            <img src="/public/cinema-4.webp" alt="img" />
                            <p>Ephemeral Dreams of Distant Stars</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Cinema