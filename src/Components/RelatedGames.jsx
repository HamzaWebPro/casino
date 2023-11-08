import React from 'react'
import '../index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Tilt from 'react-parallax-tilt'
import { Purplebutton } from './CommonButtons'
import RelatedGamesSlider from './SlickSliders'


export const RelatedGames = () => {
    return(
        <>
           <div id='action2' className='container-fluid Related_Games_container'>
               <div className='container'>
               <div className='row mb-5 text-center'>
                    <h2>
                        Related Games
                    </h2>
               </div>
               <div className='row mt-4'>
                   <RelatedGamesSlider
                   />
               </div>

               </div>
           </div>
        </>
    )
}