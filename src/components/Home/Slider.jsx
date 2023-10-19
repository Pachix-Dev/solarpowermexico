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
                    <svg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1501.17 1662.94' fill='none' stroke='white' strokeMiterlimit={10} strokeWidth={14} width={150}>
                      <path d='m203.31,1378.11l1033.86-552.09c2.48-1.32,1.73-5.06-1.07-5.32l-433.32-41.27c-2.26-.22-3.36-2.87-1.92-4.63l388.11-469.82c2.11-2.56-1.13-6.04-3.83-4.11L340.17,904.8c-2.19,1.57-1.17,5.02,1.53,5.14l297.38,12.71c2.46.11,3.62,3.08,1.89,4.82l-441.01,446.14c-2.28,2.31.48,6.02,3.35,4.49Z' />
                      <g>
                        <path d='m1188.25,300.74c330.64,247.06,402.98,716.46,169.33,1045.33-239.46,337.06-762.98,411.96-1076.84,158.99-1.84-1.48-1.15-4.43,1.15-4.96l155.69-36.03' />
                        <line x1='279.69' y1='1501.4' x2='315.69' y2='1661.4' />
                      </g>
                      <g>
                        <path d='m199.97,1378.47C-24.47,1127.73-56.37,756.83,121.3,473.13,294.25,196.98,686.78,51.42,961.71,156.41c2.73,1.04,5.07-2.2,3.21-4.45L842.64,4.47' />
                        <line x1='963.63' y1='154.96' x2='814.78' y2='280.08' />
                      </g>
                    </svg>
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
            <img src='/SSM-logo.webp' width={320} height={118} alt='Solarpowermexico' />
            <p className='mt-5 text-light text-center fs-4' dangerouslySetInnerHTML={{ __html: t('home.solar_bg_video') }} />
          </div>
          <video className='w-100' muted autoPlay loop playsInline poster='/bgVideo.webp'>
            <source src='/solarpowerBG.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
