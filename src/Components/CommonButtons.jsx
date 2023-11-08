import React from 'react'
import '../index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Tilt from 'react-parallax-tilt';

export const Purplebutton = (ButtonProps) => {
  return (
    <>
      <a className='bunntonAnchor' href="">
         <Tilt>
         <div style={ButtonProps.style} className="purpleButton">
            <span className='Buttontxt'>
                {ButtonProps.name}
            </span>
        </div>
         </Tilt>
      </a>
    </>
  )
}


export const Pinkbutton = (ButtonProps) => {
  return (
    <>
      <a className='bunntonAnchor' href="">
         <Tilt>
         <div style={ButtonProps.style} className="pinkButton">
            <span className='Buttontxt'>
                {ButtonProps.name}
            </span>
        </div>
         </Tilt>
      </a>
    </>
  )
}
