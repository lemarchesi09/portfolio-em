import React from 'react'
import {BsLinkedin, BsGithub, BsGoogle} from "react-icons/bs"
import {Form, Button} from 'react-bootstrap'
import "./contact.css"


export default function Contact() {
  return (
    <div>
        <section className='contact' id='contact'>
            <h2>Conctact Me</h2>
            <div className='cont'>
              <div className='links-cont'>
                <div className='element'>
                  <a href="https://www.linkedin.com/in/lemarchesi/" target="_blank"><BsLinkedin className='icono'/> <span>lemarchesi</span></a> 
                </div>
                
                <div className="element">
                  <a href="https://github.com/lemarchesi09" target="_blank"><BsGithub/> <span>lemarchesi09</span></a>

                </div>

                <div className="element">
                  <a href="mailto:lemarchesi9@gmail.com" target="_blank"> <BsGoogle/> <span>lemarchesi9@gmail.com</span></a>

                </div>
              </div>
              <div className='form-cont'>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastname">
                  <Form.Control type="text" placeholder="Lastname" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control className='textarea' as="textarea" rows={6} placeholder="Your Message" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Send
                </Button>
              </Form>
                {/* <form action="mailto:lemarchesi9@gmail.com" method="post">
                  <input className='form-style' type="text" name="name" id='name' placeholder='Name' /> <br />
                  <input className='form-style' type="text" name='lastname' id='lastname' placeholder='Lastname'/> <br />
                  <input className='form-style' type="email" name="email" id="id" placeholder='Email' /> <br />
                  <textarea className='form-style' name="text" id="text" cols="50" rows="10" placeholder='Your Message'></textarea> <br />
                  <input type="submit" value="Send" />
                </form> */}

              </div>

            </div>
        </section>
    </div>
  )
}
