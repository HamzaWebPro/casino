import React from 'react'
import '../index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  AiFillFacebook,
  AiFillGoogleCircle,
  AiOutlineWechat,
  AiOutlineBehanceSquare,
} from 'react-icons/ai'
import Tilt from 'react-parallax-tilt'

export const Footer = () => {
  return (
    <>
      <div className="container-fluid footer_container">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 mt-4">
              <div className="footer_content">
                <h3 className="mb-4">About Jackpot</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco .
                </p>

                <ul className="SocialIcons mt-5" style={{ margin: '0' }}>
                  <Tilt>
                    <li style={{ marginLeft: '0' }}>
                      <a href="">
                        <AiFillFacebook />
                      </a>
                    </li>
                  </Tilt>
                  <Tilt>
                    <li>
                      <a href="">
                        <AiFillGoogleCircle />
                      </a>
                    </li>
                  </Tilt>
                  <Tilt>
                    <li>
                      <a href="">
                        <AiOutlineWechat />
                      </a>
                    </li>
                  </Tilt>
                  <Tilt>
                    <li>
                      <a href="">
                        <AiOutlineBehanceSquare />
                      </a>
                    </li>
                  </Tilt>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-4">
              <div className="footer_content">
                <h3 className="mb-4">Important Links</h3>
                <ul className="IMP_link">
                  <li style={{ marginTop: '0' }}>
                    <a href="">Live Score</a>
                  </li>
                  <li>
                    <a href="">How to Play</a>
                  </li>
                  <li>
                    <a href="">Tournaments</a>
                  </li>
                  <li>
                    <a href="">Registration Bonus</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    <a href="">FAQ</a>
                  </li>
                  <li>
                    <a href="">Support</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 mt-4">
              <div className="footer_content">
                <h3 className="mb-4">Security Info</h3>

                <div className="mb-3 row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <img src="https://i.postimg.cc/d1HvnNTP/CAsino-13.png" />
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 d-flex align-items-center">
                    <span>Safe & Secure Banking</span>
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <img src="https://i.postimg.cc/KvXcWVHx/CAsino-14.png" />
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-8 d-flex align-items-center">
                    <span>Total 203 Million Registered Users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row d-flex justify-content-center Copyright mt-5'>
              <h3 className='text-center'>PSD TO REACT BY HAMZA</h3>
          </div>
        </div>
      </div>
    </>
  )
}
