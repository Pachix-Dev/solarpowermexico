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
              ? <img
                  className='d-block w-100'
                  src='/banner1_eng.webp'
                  alt='solar storage mexico'
                />
              : <img
                  className='d-block w-100'
                  src='/banner1_esp.webp'
                  alt='solar storage mexico'
                />
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
                />
              : <img
                  className='d-block w-100'
                  src='/banner2_esp.webp'
                  alt='energy night mexico'
                />
            }
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
