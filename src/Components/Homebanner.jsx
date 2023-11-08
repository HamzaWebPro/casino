import React from 'react'
import '../index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Tilt from 'react-parallax-tilt'
import { Purplebutton } from './CommonButtons'

export const Homebanner = () => {
  return (
    <>
      <div id='action1' className="container-fluid homeBannerContainer">
        <div className="container Homebanner_innerContainer">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="banner_img">
                <img
                  className="img-fluid banner_spin_img"
                  src="https://i.postimg.cc/y6t9X9yf/CAsino-2.png"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
              <div className="banner_text ">
                <div className="text-center">
                  <p className=" todays_jackpot">Today’s Jackpot</p>
                  <h1>777</h1>
                </div>
                <div className="mb-2 text-center banner_lorem">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud.
                </div>
                <div className="row d-flex justify-content-center mt-4 banner_btn">
                  <Purplebutton
                   style={{
                       width:"100px",
                       paddingLeft:"0",
                       paddingRight:"0",
                       display:"flex",
                       justifyContent:"center"
                   }}
                   name="Play Now" />
                </div>
              </div>
            </div>
          </div>
          <div className='row home_banner_bottom_content mt-5'>
              <div className='col-lg-4 col-md-4 mt-2 Home_banner_bottom_items'>
                  <h2>01</h2>
                  <h3>Register</h3>
                  <p>
                  Download the app and signup for account
                  </p>
              </div>
              <div className='col-lg-4 col-md-4 mt-2 Home_banner_bottom_items'>
                  <h2>02</h2>
                  <h3>Get Ready</h3>
                  <p>
                  Deposit & get ready for play betting
                  </p>
              </div>
              <div className='col-lg-4 col-md-4 mt-2 Home_banner_bottom_items'>
                  <h2>03</h2>
                  <h3>Enjoy</h3>
                  <p>
                  Betting more and more & enjoy game
                  </p>
              </div>
          </div>
        </div>
      </div>
      <div className='container-fluid bottom_dark_part'>

      </div>
    </>
  )
}
