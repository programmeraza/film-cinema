import React, { useState } from 'react'
import './App.css'
import { useLocation, useRoutes } from 'react-router-dom'
import routes from './routes'
import Header from './Layout/Header/Header'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { HelmetProvider } from 'react-helmet-async'

const App = () => {

  const [backgroundPosition, setBackgroundPosition] = useState('center');

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const { offsetWidth, offsetHeight } = currentTarget;

    const x = (clientX / offsetWidth) * 50;
    const y = (clientY / offsetHeight) * 50;

    setBackgroundPosition(`${x}% ${y}%`);
  };

  const location = useLocation()
  const routing = useRoutes(routes)

  return (
    <>
     <div
        className="bg"
        onMouseMove={handleMouseMove}
        style={{ backgroundPosition: backgroundPosition }}
      >

        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            classNames="fade"
            timeout={1500}
          >
            <div className='main-body'>
              <Header />
              <HelmetProvider>
                {routing}
              </HelmetProvider>
            </div>

          </CSSTransition>
         </SwitchTransition>


      </div>

    </>
  )
}

export default App