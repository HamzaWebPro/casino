import React from 'react'
import '../index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {AiOutlineSend} from "react-icons/ai"
import Tilt from 'react-parallax-tilt'


export const PaymentMethod = () => {
    return(
        <>
            <div className=' container-fluid Payment_method_Container'>
               <div className='container'>
                  <div className='row d-flex justify-content-between'>
                     <div className="col-lg-5 col-md-5 mb-3">
                        <h3>
                        Subscribe for Offers
                        </h3>
                        <form className='mt-3 OfferForm'>
                           <input type="text" placeholder='Your E-mail Here'/>
                           <button className='Offer_submit_Button'><AiOutlineSend/></button>

                        </form>
                     </div>
                     <div className="col-lg-5 col-md-5 mb-3">
                        <h3>
                        Payment Method
                        </h3>
                        <ul className='mt-3'>
                           <li style={{marginLeft:"0"}}><Tilt><a href=''><img src='https://i.postimg.cc/K8qhN2DQ/CAsino-8.png'/></a></Tilt></li>
                           <li><Tilt><a href=''><img src='https://i.postimg.cc/bwszDT7Z/CAsino-9.png'/></a></Tilt></li>
                           <li><Tilt><a href=''><img src='https://i.postimg.cc/3w2Qmbnx/CAsino-10.png'/></a></Tilt></li>
                           <li><Tilt><a href=''><img src='https://i.postimg.cc/V6Thhq7V/CAsino-11.png'/></a></Tilt></li>
                           <li><Tilt><a href=''><img src='https://i.postimg.cc/xjzpCbp9/CAsino-12.png'/></a></Tilt></li>
                           
                        </ul>
                        
                     </div>
                  </div>
               </div>
            </div>
        </>
    )
}