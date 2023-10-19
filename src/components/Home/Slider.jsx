import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'react-bootstrap'

export function Slider () {
  const { t } = useTranslation()
  return (
    <div className='mt-5'>
      <Carousel interval={5000} controls={false}>
        <Carousel.Item>
          <Link to='/energy-night' className='text-decoration-none'>
            <div className='slider-bg-energynight'>
              <Container fluid>
                <Row className='mt-5 pt-5'>
                  <Col md className='pt-5 mt-auto d-none d-sm-block'>
                    <p className='text-light fs-1' dangerouslySetInnerHTML={{ __html: t('home.energy_night') }} />
                    <div className='d-flex justify-content-center'><ul dangerouslySetInnerHTML={{ __html: t('home.energy_night_tags') }} /></div>
                  </Col>
                  <Col md className='pt-5 mt-auto'>
                    <img src='/logoEnergyNight.webp' alt='Energy Night' width={150} height={159} />
                    <p className='pt-5 fw-bold text-light fs-1 lh-1'>ENERGY<br /><span className='fw-light fs-3'>NIGHT</span></p>
                    <p className='mt-5 energy-description' dangerouslySetInnerHTML={{ __html: t('home.energy_night_description') }} />
                  </Col>
                  <Col md className='pt-5 mt-auto'>
                    <div className='d-flex justify-content-center'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='white' width={80}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z' />
                      </svg>
                      <div className='energy-date' dangerouslySetInnerHTML={{ __html: t('home.energy_night_date') }} />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Link>
        </Carousel.Item>
        <Carousel.Item className='bgsolarvideo pt-5 pb-5'>
          <div className='mt-5 mb-5 pt-5 pb-5 text-center'>
            <img src='/SSM-logo.webp' width={320} height={141} alt='Solarpowermexico' />
            <p className='text-light text-center fs-4' dangerouslySetInnerHTML={{ __html: t('home.solar_bg_video') }} />
          </div>
          <video className='w-100' muted autoPlay loop playsInline>
            <source src='/solarpowerBG.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
