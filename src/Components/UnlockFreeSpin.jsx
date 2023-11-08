import React from 'react'
import '../index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Tilt from 'react-parallax-tilt'
import { Purplebutton } from './CommonButtons'

export const UnlockFreeSpin = () => {
  return (
    <>
      <div id='action3' className="container-fluid">
        <div className="container UnlockFreeSpin_Container">
          <div className="row">
            <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center ">
              <Tilt className="d-flex justify-content-center">
                <img
                  className="img-fluid Card_image"
                  src="https://i.postimg.cc/xC9JZs9L/CAsino-6.png"
                />
              </Tilt>
            </div>
            <div className="col-lg-6 col-md-6 mt-3 d-flex align-items-center">
              <div>
                <h2 className="mb-4">Unlock Free Spin</h2>
                <p className='mt-4 mb-5'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit. Excepteur sint occaecat
                  cupidatat non proident, sunt inrunt mollit anim id est
                  laborum. Sed ut perspiciatis unde omnis iste.
                </p>
                <Purplebutton
                    name="Claim Now"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
