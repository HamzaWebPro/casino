import React, { useState } from 'react'
import '../index.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Button, Nav, Container, Navbar, Modal,Form,Row,Col,InputGroup } from 'react-bootstrap'
import { Purplebutton, Pinkbutton } from './CommonButtons'
import $ from 'jquery'
import Tilt from 'react-parallax-tilt'

export const NavigationBar = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
  return (
    <>
      
      {/* login modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <h2 className="modal-title">Login</h2>
        </Modal.Header>
        <Modal.Body>

        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{textAlign:"center"}}>
        <Row className="mb-3 d-flex justify-content-center">
        <Form.Group as={Col} md="4" lg="7" controlId="validationCustom03">
          <Form.Label>Email or Username</Form.Label>
          <Form.Control type="Email" placeholder="Enter Your Email..." required />
          <Form.Control.Feedback type="invalid">
            Please Enter Your Email
          </Form.Control.Feedback>
        </Form.Group>
       
      </Row>
      <Row className="mb-3 d-flex justify-content-center">
        <Form.Group as={Col} md="4" lg="7" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Your Password..." required />
          <Form.Control.Feedback type="invalid">
            Please Enter Your Password
          </Form.Control.Feedback>
        </Form.Group>
       
      </Row>
     
    <Button className='LoginBtn' type='submit'>
     <Tilt>
     <div className="d-flex justify-content-center">
            <div
            type="submit"
              style={{
                marginLeft: '0px',
                width: '90px',
                textAlign: 'center',
                padding: '10px 0',
                cursor: 'pointer',
                marginTop: '0',
              }}
              className="purpleButton"
            >
              <span className="Buttontxt">Login</span>
            </div>
          </div>
     </Tilt>
    </Button>
    <div className='row d-flex justify-content-between p-4'>
      <a className='forgot_pass_text'  href=''>Forgot Password?</a>
      <Tilt>
          <div className="d-flex justify-content-center mt-3">
            <div
              style={{
                width: '170px',
                textAlign: 'center',
                padding: '10px 0',
                cursor: 'pointer',
              }}
              className="pinkButton"
              onClick={handleClose}
            >
              <span className="Buttontxt">Create a New Account</span>
            </div>
          </div>
          </Tilt>
    </div>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Tilt>
          <div className="d-flex justify-content-center">
            <div
              style={{
                width: '90px',
                textAlign: 'center',
                padding: '10px 0',
                cursor: 'pointer',
              }}
              className="pinkButton"
              onClick={handleClose}
            >
              <span className="Buttontxt">Close</span>
            </div>
          </div>
          </Tilt>
          
        </Modal.Footer>
      </Modal>

      {/* login modal */}

      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
              className="NavbarLogo"
              src="https://i.postimg.cc/Vkp1hXY5/CAsino-1.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '300px' }}
              navbarScroll
            >
              <Nav.Link style={{ marginLeft: '0' }} href="#action1">
                Home
              </Nav.Link>
              <Nav.Link href="#action3">About us</Nav.Link>
              <Nav.Link href="#action2">Games</Nav.Link>
              <Nav.Link href="#action4">Pricing</Nav.Link>
              <Nav.Link href="#action5">FAQ</Nav.Link>
            </Nav>

            <Tilt>
            <div className="d-flex justify-content-center">
              <div
                style={{
                  marginLeft: '15px',
                  width: '90px',
                  textAlign: 'center',
                  padding: '10px 0',
                  cursor: 'pointer',
                }}
                className="pinkButton"
              >
                <span className="Buttontxt">Signup</span>
              </div>
            </div>
            </Tilt>
            <Tilt>
            <div className="d-flex justify-content-center">
              <div
                style={{
                  marginLeft: '15px',
                  width: '90px',
                  textAlign: 'center',
                  padding: '10px 0',
                  cursor: 'pointer',
                }}
                className="purpleButton"
                onClick={handleShow}
              >
                <span className="Buttontxt">Login</span>
              </div>
            </div>
            </Tilt>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

// nav scroll fixed start
$(function () {
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop()
    if (scrolling > 10) {
      $('nav').addClass('navdown')
    } else {
      $('nav').removeClass('navdown')
    }
  })
})
// nav scroll fixed end



