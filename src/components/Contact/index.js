import React from 'react'
import {ContactSection , Contactitle , Span , FormInput , InputText , InputEmail , InputExp , TextArea , Form , InputSubmit} from './style.js'
import Footer from '../Footer/index.js'
function Contact() {
  return (
    <>
      <ContactSection>
        <div class="container">
          <Contactitle><Span>Drop </Span>Me A line</Contactitle>
          <Form action="">
            <FormInput>
                <InputText type="text" placeholder="Your Name"/>
                <InputEmail type="email" placeholder="Your Email"/>
            </FormInput>
            <InputExp type="text" placeholder="Your Subject"/>
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <InputSubmit type="submit" value="Send Message"/>
          </Form>
        </div>
      </ContactSection>
      <Footer/>
    </>
    
  )
}

export default Contact