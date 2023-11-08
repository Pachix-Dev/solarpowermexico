import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useTranslation } from 'react-i18next'
import { useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import { CustomRecaptcha } from '../CustomRecaptcha'
import { useLanguage } from '../hooks/useLanguage'

export function ContactForm () {
  const { t } = useTranslation()
  const { stateLang } = useLanguage()
  const captchaRef = useRef()
  const [captcha, setCaptcha] = useState(false)
  const [message, setMessage] = useState()
  const onChange = () => {
    setCaptcha(true)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (captcha === false) {
      event.stopPropagation()
      setMessage('Please verify you are not bot.')
    } else {
      const token = captchaRef.current.getValue()
      captchaRef.current.reset()
      setCaptcha(false)
      const formData = Object.fromEntries(new window.FormData(event.target))
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, formData })
      }
      try {
        const res = await fetch(
          'https://solarpowermexico.mx/newsletter/contact.php',
          requestOptions
        )
        const data = await res.json()
        if (data.status) {
          setMessage('Message send successfully!!')
        } else {
          setMessage('Sorry we couldn\'t verify you are not robot try again...')
        }
      } catch (error) {
        console.log(error)
      }
      document.getElementById('form-newsletter').reset()
    }
  }

  const renderReCAPTCHA = () => {
    return (
      <CustomRecaptcha
        sitekey='6LeljqwnAAAAAHcToBhu6iq8o4kahL9sopQjC1A3'
        onChange={onChange}
        language={stateLang === 'en' ? 'en' : 'es'}
        ref={captchaRef}
      />
    )
  }
  return (
    <>
      <Container className='mt-5 mb-5'>
        <h1 className='text-center fw-bold'>{t('contactForm.title')}</h1>
        <Form id='form-newsletter' onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>{t('footer.name')}</Form.Label>
            <Form.Control type='text' name='name' required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>{t('footer.email')}</Form.Label>
            <Form.Control type='email' name='email' required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasiSubject'>
            <Form.Label>{t('contactForm.subject')}</Form.Label>
            <Form.Control type='text' name='subject' required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicMessage'>
            <Form.Label>{t('contactForm.message')}</Form.Label>
            <Form.Control type='text' name='message' required />
          </Form.Group>
          {renderReCAPTCHA()}
          {captcha ? '' : <div style={{ color: '#dc3545' }}>{message}</div>}
          <Button variant='dark' type='submit' className='mt-3 fw-bold'>
            {t('contactForm.send')}
          </Button>
        </Form>
        <p className='text-center mt-5'>
          <strong>Deutsche Messe</strong><br />
          Messegelände<br />
          30521 Hannover<br />
          Alemania<br />
          Tel. +49 511 89-0<br />
          <a href='mailto:info@messe.de' target='_blank' rel='noreferrer'>
            info@messe.de
          </a><br />
          <a href='https://www.messe.de/en/' target='_blank' rel='noreferrer'>
            www.messe.de
          </a><br />
        </p>
        <p className='text-center mt-5'>
          <strong>IGECO</strong><br />
          Blvd. Francisco Villa 102, piso 14<br />
          Col. Oriental 37510<br />
          León Guanajuato, México<br />
          Tel. +49 511 89-0<br />
          <a href='mailto:info@igeco.mx' target='_blank' rel='noreferrer'>
            info@igeco.mx
          </a><br />
          <a href='https://www.igeco.mx' target='_blank' rel='noreferrer'>
            www.igeco.mx
          </a><br />
        </p>
      </Container>
    </>
  )
}
