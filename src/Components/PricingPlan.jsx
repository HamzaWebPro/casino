import React from 'react'
import '../index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Tilt from 'react-parallax-tilt'
import { Purplebutton, Pinkbutton } from './CommonButtons'

export const PricingPlan = () => {
  return (
    <>
      <div id='action4' className="container-fluid PricingPlan_Container">
        <div className="container">
          <div className="row mb-5 text-center">
            <h2 className='mb-5'>Our Pricing Plan</h2>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-4 col-sm-4">
              <Tilt>
                <div className="Pricing_Card Pricing_CArd_1">
                  <h3>Trial Plan</h3>
                  <h1>0.00</h1>
                  <p>USD/Per Month</p>
                  <hr />
                  <p>Editable Game Timer</p>
                  <p>Upto 10 Plyers at a Time</p>
                  <p>Etitable Score Averaging</p>
                  <p>Printable Result Page</p>
                  <p>X</p>
                  <p>X</p>
                  <Purplebutton
                    style={{
                     position:"absolute",
                     width:"150px",
                     transform:"translateX(-50%)",
                    

                    }}
                    name="Choose Now"
                  />
                </div>
              </Tilt>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <Tilt>
                <div className="Pricing_Card FeaturedCard">
                  <div className='pinkButton Featured_btn'>
                      <span className='Buttontxt'>
                          Featured
                      </span>
                  </div>
                  <h3>Standard Plan</h3>
                  <h1>10.00</h1>
                  <p>USD/Per Month</p>
                  <hr />
                  <p>Editable Game Timer</p>
                  <p>Upto 10 Plyers at a Time</p>
                  <p>Etitable Score Averaging</p>
                  <p>Printable Result Page</p>
                  <p>X</p>
                  <p>X</p>
                  <Pinkbutton
                    style={{
                     position:"absolute",
                     width:"150px",
                     transform:"translateX(-50%)",
                    

                    }}
                    name="Choose Now"
                  />
                </div>
              </Tilt>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4">
              <Tilt>
                <div className="Pricing_Card">
                  <h3>Platinum Plan</h3>
                  <h1>20.00</h1>
                  <p>USD/Per Month</p>
                  <hr />
                  <p>Editable Game Timer</p>
                  <p>Upto 10 Plyers at a Time</p>
                  <p>Etitable Score Averaging</p>
                  <p>Printable Result Page</p>
                  <p>X</p>
                  <p>X</p>
                  <Purplebutton
                    style={{
                     position:"absolute",
                     width:"150px",
                     transform:"translateX(-50%)",
                    

                    }}
                    name="Choose Now"
                  />
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
