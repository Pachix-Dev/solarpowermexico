import Carousel from 'react-bootstrap/Carousel'
import { useLanguage } from '../hooks/useLanguage'
import { Link } from 'react-router-dom'

export function Slider () {
  const { stateLang } = useLanguage()
  return (
    <div className='position-relative mt-5'>
      <Carousel fade interval={5000} controls={false}>
        <Carousel.Item>
          {
            stateLang === 'en'
              ? <video className='w-100' muted autoPlay loop playsInline src='/SSM-ENG.mp4' preload='auto' />
              : <video className='w-100' muted autoPlay loop playsInline src='/SSM-ESP.mp4' preload='auto' />
            }
        </Carousel.Item>
        <Carousel.Item>
          <Link to='/energy-night'>
            {
            stateLang === 'en'
              ? <img
                  className='d-block w-100'
                  src='/banner2_eng.webp'
                  alt='energy night mexico'
                  loading='lazy'
                />
              : <img
                  className='d-block w-100'
                  src='/banner2_esp.webp'
                  alt='energy night mexico'
                  loading='lazy'
                />
            }
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
