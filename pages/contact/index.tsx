import React, { useState, useEffect } from 'react'
import Link from "next/link"
import Swal from 'sweetalert2';

import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  HEADER_LINKS,
  CONTACT_HEADER,
  CONTACT_SOCIALS
} from '../../variables'
import { sendContactForm } from '@/lib/api';

interface IContactData {
  name: string,
  email: string,
  message: string
}

function Contact() {
  const [contactData, setContactData] = useState<IContactData>({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);


  useEffect(() => {
    console.log('Contact > contactData', contactData)
  }, [contactData])


  const onFormSubmit = async (e: any) => {
    e.preventDefault();
    // console.log('Contact > onFormSubmit event', e)

    if(isLoading) {
      return;
    }

    const payload: any = {
      ...contactData,
      subject: 'Marc Escatron - Portfolio (Client)'
    };
    console.log('Contact > onFormSubmit payload', payload)
    
    setIsLoading(true);
    await sendContactForm(payload)
    .then(
      (res) => {
        console.log('sendContactForm > res', res)
        setIsLoading(false);
        Swal.fire({
          icon: 'success',
          title: 'Email sent!',
          text: 'Thank you for your message!',	
        });	
      },
      (err) => {
        console.log('sendContactForm > err', err)
        setIsLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Email not sent!',
          text: 'Something went wrong...',				
        });
      },
    )
  }

  const onInputChange = (e: any, fieldName: string) => {
    setContactData({
      ...contactData,
      [fieldName]: e.target.value
    })
  }

  return (
    <section id="contact" className="page-section">
      <div className="container">
        <h6 className="section-header">
          <span className="header-content">
            <span className="link-bullet">{HEADER_LINKS && HEADER_LINKS[3].id}</span> {HEADER_LINKS && HEADER_LINKS[3].name}
          </span>        
        </h6>
        <form className="contact-form row mt-4 py-4" onSubmit={onFormSubmit}>
          <div className="col-lg-12 pb-2 px-4">
            <div className="row theme-container">
              <div className="col-lg-9 my-2 contact-header">
                <p>{CONTACT_HEADER}</p>
              </div>
              <div className="col-lg-3 my-2 contact-socials">
                <p>Social Media:</p>
                <div className="row">
                  {CONTACT_SOCIALS && CONTACT_SOCIALS.map((social, idx) => {
                    return (
                      <div key={idx} className="col-3">
                        <Link className="contact-link" href={social.url} title={social.title} target="_blank">
                          <FontAwesomeIcon size="xl" icon={social.icon} />
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 py-2 px-4">
            <div className="row theme-container">
              <div className="col-12 my-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input type="text" id="name" name="name" className="form-control" onChange={(e) => onInputChange(e, 'name')} value={contactData['name']} disabled={isLoading} required />
              </div>
              <div className="col-12 my-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" id="email" name="email" className="form-control" onChange={(e) => onInputChange(e, 'email')} value={contactData['email']} disabled={isLoading} required />
              </div>
            </div>
          </div>
          <div className="col-lg-7 py-2 px-4">
            <div className="row theme-container">
                <div className="col-12 my-3">
                  <label htmlFor="message" className="form-label">Message:</label>
                  <textarea id="message" name="message" className="form-control custom-scrollbar" onChange={(e) => onInputChange(e, 'message')} value={contactData['message']} disabled={isLoading} required></textarea>
                </div>
                <div className="col-12 my-3 d-flex justify-content-end">
                  <Button 
                    type="submit"
                    variant="outlined"
                    color="secondary"
                    endIcon={isLoading ? <CircularProgress color="secondary" size={20} /> : null}
                  >
                    Send
                  </Button>
                </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact