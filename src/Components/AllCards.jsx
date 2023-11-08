import React from 'react'
import '../index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Tilt from 'react-parallax-tilt'
import { Purplebutton } from './CommonButtons'




export const RelateGamesCard = (RGCardProps) => {
    return(
        <>
            <div className='col RGCard'>
               <Tilt>
               <div className='RGCardInner'>
                <div className='RGCardOverlay'>
                    <div className='OverlayContent'>
                        <p>{RGCardProps.gamename}</p>
                        <Purplebutton
                            name="Play Now"
                        />
                    </div>
                </div>
                <img className='img-fluid' src={RGCardProps.img}/>
                </div>
               </Tilt>
            </div>
        </>
    )
}