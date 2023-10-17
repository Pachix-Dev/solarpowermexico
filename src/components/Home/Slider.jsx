import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export function Slider () {
  const { i18n } = useTranslation()
  return (
    <div className='mt-5'>
      <Carousel interval={5000} controls={false}>
        <Carousel.Item>
          <Link to='/energy-night'>
            <picture>
              <source media='(min-width: 1000px)' srcSet='/banner2_esp.webp' />
              <source media='(min-width: 800px)' srcSet='/banner2_800esp.webp' />
              <source media='(min-width: 401px)' srcSet='/banner2_768esp.webp' />
              <img src={i18n.language === 'en' ? '/banner2_eng.webp' : '/banner2_400esp.webp'} alt='energy night' />
            </picture>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          {
          i18n.language === 'en'
            ? <video className='w-100' muted autoPlay loop playsInline><source src='/SSM-ENG.mp4' type='video/mp4' />Your browser does not support the video tag.</video>
            : <video className='w-100' muted autoPlay loop playsInline><source src='/SSM-ESP.webm' type='video/mp4' />Your browser does not support the video tag.</video>
          }

        </Carousel.Item>
      </Carousel>
    </div>
  )
}
