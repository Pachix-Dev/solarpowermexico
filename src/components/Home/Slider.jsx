import Carousel from 'react-bootstrap/Carousel'
import { useLanguage } from '../hooks/useLanguage'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'

export function Slider () {
  const { stateLang } = useLanguage()

  const videoSource = useMemo(() => {
    return stateLang === 'en' ? '/SSM-ENG.mp4' : '/SSM-ESP.mp4'
  }, [stateLang])

  return (
    <div className='position-relative mt-5'>
      <Carousel fade interval={5000} controls={false}>
        <Carousel.Item>
          <video className='w-100' muted autoPlay loop playsInline preload='auto'>
            <source src={videoSource} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>
        <Carousel.Item>
          <Link to='/energy-night'>
            <img
              className='d-block w-100'
              src={stateLang === 'en' ? '/banner2_eng.webp' : '/banner2_esp.webp'}
              alt='energy night mexico'
              loading='lazy'
            />
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
