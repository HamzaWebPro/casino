import React from "react";
import "../index.css"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Accordion , Card, useAccordionButton} from "react-bootstrap";
import {AiOutlineCaretDown,AiOutlineCaretUp} from "react-icons/ai"
import $ from 'jquery'

 function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  
export  function ExampleAccordion() {
    return (
      <Accordion d>
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">01. How can play these games (for begineer)?&nbsp;&nbsp;&nbsp;&nbsp;<span id="accordion_arrow"><AiOutlineCaretDown/></span></CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <CustomToggle eventKey="1">02. If I play games and lost by any chance, How I’ll pay?&nbsp;&nbsp;&nbsp;&nbsp;<span id="accordion_arrow"><AiOutlineCaretDown/></span></CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
          <Card.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <CustomToggle eventKey="2">03. What are the benefits for gambiling?&nbsp;&nbsp;&nbsp;&nbsp;<span id="accordion_arrow"><AiOutlineCaretDown/></span></CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
          <Card.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <CustomToggle eventKey="3">04. What are the benefits for gambiling?&nbsp;&nbsp;&nbsp;&nbsp;<span id="accordion_arrow"><AiOutlineCaretDown/></span></CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
          <Card.Body>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incnt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }


// Jquery for Accordion Icon Toggle

  
    $('button').click(function () {
      $('.card-body').toggleClass('CArdBorder')
    
    })
