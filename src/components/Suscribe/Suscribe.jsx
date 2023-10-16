import React, { Suspense, lazy, useRef, useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { useLanguage } from '../hooks/useLanguage'
import { useTranslation } from 'react-i18next'

const ReCAPTCHA = lazy(() => import('react-google-recaptcha'))

export function Subscribe () {
  const { t } = useTranslation()
  const { stateLang } = useLanguage()
  const captchaRef = useRef()

  const [captcha, setCaptcha] = useState(false)
  const [message, setMessage] = useState('')

  const onChange = () => {
    setCaptcha(true)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      if (!captcha) {
        setMessage('Please verify that you are not a bot.')
        return
      }

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

      const res = await fetch('https://solarpowermexico.mx/newsletter/suscribe.php', requestOptions)
      const data = await res.json()

      if (data?.status === true || data === '23000') {
        setMessage('You are subscribed now!')
      } else {
        setMessage("Sorry, we couldn't verify that you are not a robot. Please try again.")
      }

      document.getElementById('form-newsletter').reset()
    } catch (error) {
      console.error('Error:', error)
      setMessage('An error occurred while processing your request. Please try again later.')
    }
  }

  return (
    <Row>
      <Col className='mx-auto'>
        <Form id='form-newsletter' onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>{t('footer.name')}</Form.Label>
            <Form.Control type='text' name='name' required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>{t('footer.email')}</Form.Label>
            <Form.Control type='email' name='email' required />
          </Form.Group>
          <Suspense fallback={<div>Loading reCAPTCHA...</div>}>
            {stateLang === 'en'
              ? (
                <>
                  <p className='d-none'>hola</p>
                  <ReCAPTCHA sitekey='6LeljqwnAAAAAHcToBhu6iq8o4kahL9sopQjC1A3' ref={captchaRef} onChange={onChange} hl='en' />
                </>
                )
              : (
                <ReCAPTCHA sitekey='6LeljqwnAAAAAHcToBhu6iq8o4kahL9sopQjC1A3' ref={captchaRef} onChange={onChange} hl='es' />
                )}
          </Suspense>
          <div style={{ color: '#dc3545' }}>{message}</div>
          <Button variant='dark' type='submit' className='mt-3'>
            {t('footer.subscription')}
          </Button>
        </Form>
      </Col>
    </Row>
  )
}
