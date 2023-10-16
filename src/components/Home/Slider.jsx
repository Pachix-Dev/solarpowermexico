import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function Slider () {
  const { i18n } = useTranslation()
  return (
    <div className='position-relative mt-5'>
      <Carousel fade interval={5000} controls={false}>
        <Carousel.Item>
          <Link to='/energy-night'>
            <img
              className='d-block w-100'
              src={i18n.language === 'en' ? '/banner2_eng.webp' : '/banner2_esp.webp'}
              alt='energy night mexico'
              fetchpriority='high'
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          {
          i18n.language === 'en'
            ? <video className='w-100' muted autoPlay loop playsInline><source src='/SSM-ENG.mp4' type='video/mp4' />Your browser does not support the video tag.</video>
            : <video className='w-100' muted autoPlay loop playsInline><source src='/SSM-ESP.mp4' type='video/mp4' />Your browser does not support the video tag.</video>
          }

        </Carousel.Item>
      </Carousel>
    </div>
  )
}
