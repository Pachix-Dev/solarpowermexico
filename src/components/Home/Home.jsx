import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import Aos from 'aos'// Inicialisa AOS
import 'aos/dist/aos.css' // Importa los estilos CSS de AOS

import './Home.css'
import { Header } from './Header'
import { Slider } from './Slider'
import { Gallery } from './Gallery'
import { useNearScreen } from '../hooks/useNearScreen'
import {
  broadcasting,
  broadcasting2,
  exhibitors,
  exhibitors2,
  exhibitors3,
  exhibitors4,
  partners,
  partners2,
  exhibitors5,
} from '../../constans_logos'
import { Bullets } from './Bullets'

export function Home() {
  const { t, i18n } = useTranslation()
  const [show, ref] = useNearScreen()

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <section
        className='position-relative w-100 vh-100 d-flex align-items-center justify-content-center'
        style={{ textShadow: '4px 4px 4px black' }}
      >
        <video
          src='/background_Solar_Storage.mp4'
          autoPlay
          muted
          loop
          className='video-bg-ecomondo'
        ></video>
        <Container>
            <div className='text-center'>
              <img
                src='/SSM-logo.webp'
                width='250'
                alt='Solarpowermexico'
              />
              <p
                className='mt-5 text-center fs-4'
                dangerouslySetInnerHTML={{ __html: t('home.solar_bg_video') }}
              />
              <div className='mt-5 text-center'>
                <a
                  href='https://solarstorage.ahmreg.com/'
                  target='_blank'
                  className='bg-dark text-white text-decoration-none p-3 border border-light rounded-3 fs-5 fw-bold'
                >
                  <span className='text-uppercase'>{t('menu.banner')}</span>
                </a>
              </div>
              <p
                className='mt-5 text-f fs-4'
                dangerouslySetInnerHTML={{ __html: t('home.solar_date_hours') }}
              />
            </div>
        </Container>
      </section>
      <Container>
        <Header />
      </Container>
      <Container>
        <article className='mt-5 pt-5'>
          <Row className='pt-5'>
            <Col md={6}>
              <p className='fw-bold fs-2 home-text-color'>
                SOLAR + STORAGE MEXICO 2024
              </p>
              <p className='fs-5'>
                <strong>SOLAR + STORAGE MEXICO </strong>
                <span
                  dangerouslySetInnerHTML={{
                    __html: t('home.solar_description'),
                  }}
                />
              </p>
            </Col>
            <Col md={6} className='my-auto'>
              {i18n.language === 'en' ? (
                <video
                  className='w-100'
                  controls
                  src='/SSM-2024-ENG.mp4'
                  poster='/posterSolarVideo2024ENG.webp'
                  loading='lazy'
                />
              ) : (
                <video
                  className='w-100'
                  controls
                  src='/SSM-2024-ES.mp4'
                  poster='/posterSolarVideo2024.webp'
                  loading='lazy'
                />
              )}
            </Col>
          </Row>
        </article>
        <section className='py-5'>
          <p className='text-center fs-2 fw-bolder' style={{ color: '#8C3295' }}> {t("home.attend.reasons_visiting_title")} </p>
          <Row className='text-center fs-6 fw-semibold fst-italic pt-4'>
            <Col xs={12} md={4} lg={4}>
              <div data-aos="flip-left" data-aos-duration="1000">
                <img src="/attend_icon_1.webp" alt="" width='100' />
                <p className='mt-3 mx-5'> {t("home.attend.item_1")} </p>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <div data-aos="flip-left" data-aos-duration="1000">
                <img src="/attend_icon_2.webp" alt="" width='100' />
                <p className='mt-3 mx-5'> {t("home.attend.item_2")} </p>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <div data-aos="flip-left" data-aos-duration="1000">
                <img src="/attend_icon_3.webp" alt="" width='100' />
                <p className='mt-3 mx-5'> {t("home.attend.item_3")} </p>
              </div>
            </Col>
          </Row>
          <Row className='text-center fs-6 fw-semibold fst-italic mt-5'>
            <Col xs={4} lg={2}></Col>
            <Col xs={12} md={4} lg={4}>
              <div data-aos="flip-left" data-aos-duration="1000">
                <img src="/attend_icon_4.webp" alt="" width='100' />
                <p className='mt-3 mx-5'> {t("home.attend.item_4")} </p>
              </div>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <div data-aos="flip-left" data-aos-duration="1000">
                <img src="/attend_icon_5.webp" alt="" width='100' />
                <p className='mt-3 mx-5'> {t("home.attend.item_5")} </p>
              </div>
            </Col>
            <Col ls={2}></Col>
          </Row>
        </section>
      </Container>
      <Container fluid>
        <section className='mt-5'>
          <Row className='text-light'>
            <Col md className='background_num1 position-num'>
              <div>
                <Bullets number='7500' duration='4' simbol_1='+' />
                <div className='text-center fw-bold text-light'>
                  <i>{t('home.bullet_1')}</i>
                </div>
              </div>
            </Col>
            <Col md className='background_num2 position-num'>
              <div>
                <Bullets number='13000' duration='4' simbol_2='m&sup2;' />
                <div className='text-center fw-bold text-light'>
                  <i>{t('home.bullet_2')}</i>
                </div>
              </div>
            </Col>
            <Col md className='background_num3 position-num'>
              <div>
                <Bullets number='120' duration='4' simbol_1='+' />
                <div className='text-center fw-bold text-light'>
                  <i>{t('home.bullet_3')}</i><br /><br />
                </div>
              </div>
            </Col>
            <Col md className='background_num4 position-num'>
              <div>
                <Bullets number='462' duration='4' simbol_1='+' simbol_2='MDP' />
                <div className='text-center fw-bold text-light'>
                  <i>{t('home.bullet_4')}</i><br />
                  <i>(2023)</i>
                </div>
              </div>
            </Col>
            <Col md className='background_num5 position-num'>
              <div>
                <Bullets number='6' duration='4' simbol_1='+' simbol_2='MDP' />
                <div className='text-center fw-bold text-light'>
                  <i>{t('home.bullet_5')}</i>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
      <div className='visitor-background'>
        <Container className='py-5'>
          <p className='text-center fs-2 fw-bolder text-light'> {t("home.title-visitor-profile")} </p>
          <Row>
            <Col xs={12} lg={4} className='py-2'>
              <div data-aos="fade-down" data-aos-duration="1000">
                <ul class="list-group gap-3 justify-content-center fw-semibold fst-italic">
                  <li class="list-group-item visitor-profile d-flex align-items-center ">
                    <img src="/icon_check.webp" alt="solar-storage-check" width='50' />
                    <p className='px-2 mt-3 text-center'>{t("home.visitor-profile.item_1")} </p>
                  </li>
                  <li class="list-group-item visitor-profile d-flex align-items-center">
                    <img src="/icon_check.webp" alt="solar-storage-check" width='50' />
                    <p className='px-2 mt-3'>{t("home.visitor-profile.item_2")} </p>
                  </li>
                  <li class="list-group-item visitor-profile d-flex align-items-center">
                    <img src="/icon_check.webp" alt="solar-storage-check" width='50' />
                    <p className='px-2 mt-3'>{t("home.visitor-profile.item_3")} </p>
                  </li>
                  <li class="list-group-item visitor-profile d-flex align-items-center">
                    <img src="/icon_check.webp" alt="solar-storage-check" width='50' />
                    <p className='px-2 mt-3'>{t("home.visitor-profile.item_4")} </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={4} className='py-2'>
              <div data-aos="fade-down" data-aos-duration="1500">
                <ul class="list-group gap-3 justify-content-center fw-semibold fst-italic">
                  <li class="list-group-item visitor-profile d-flex align-items-center ">
                    <img src="/icon_check.webp" alt="solar-storage-check" width='50' />
                    <p className='px-2 mt-3 text-center'>{t("home.visitor-profile.item_5")} </p>
                  </li>
                  <li class="list-group-item visitor-profile d-flex align-items-center">
                    <img src="/icon_check.webp" alt="solar-storage-check" width='50' />
                    <p className='px-2 mt-3'>{t("home.visitor-profile.item_6")} </p>
                  </li>
                  <li class="list-group-item visitor-profile d-flex align-items-center">
                    <img src="/icon_check.webp" alt="solar-storage-check" width='50' />
                    <p className='px-2 mt-3'>{t("home.visitor-profile.item_7")} </p>
                  </li>
                  <li class="list-group-item visitor-profile d-flex align-items-center">
                    <img src="/icon_check.webp" alt="solar-storage-check" width='50' />
                    <p className='px-2 mt-3'>{t("home.visitor-profile.item_8")} </p>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={4} className='py-2'>
              <div data-aos="fade-down" data-aos-duration="2000">
                <ul class="list-group gap-3 justify-content-center fw-semibold fst-italic">
                  <li class="list-group-item visitor-profile d-flex align-items-center ">
                    <img src="/icon_check.webp" alt="solar-storage-check" width='50' />
                    <p className='px-2 mt-3 text-center'>{t("home.visitor-profile.item_9")} </p>
                  </li>
                  <li class="list-group-item visitor-profile d-flex align-items-center">
                    <img src="/icon_check.webp" alt="solar-storage-check" width='50' />
                    <p className='px-2 mt-3'>{t("home.visitor-profile.item_10")} </p>
                  </li>
                  <li class="list-group-item visitor-profile d-flex align-items-center">
                    <img src="/icon_check.webp" alt="solar-storage-check" width='50' />
                    <p className='px-2 mt-3'>{t("home.visitor-profile.item_11")} </p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <p className='my-5 fw-bold fs-2 text-secondary text-center text-uppercase'>{t('home.exhibitors')}</p>
        <Marquee gradient>
          {exhibitors.map((sponsor, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={sponsor.width}
                height={sponsor.height}
                src={sponsor.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
        <Marquee gradient direction='letf'>
          {exhibitors2.map((sponsor, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <a href={sponsor.link} target='_blank' rel='noreferrer'>
                <img
                  width={sponsor.width}
                  height={sponsor.height}
                  src={sponsor.image}
                  alt={`Sponsor ${index}`}
                  loading='lazy'
                />
              </a>
            </div>
          ))}
        </Marquee>
        <Marquee gradient>
          {exhibitors3.map((sponsor, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={sponsor.width}
                height={sponsor.height}
                src={sponsor.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
        <Marquee gradient direction='letf'>
          {exhibitors4.map((sponsor, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={sponsor.width}
                height={sponsor.height}
                src={sponsor.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
        <Marquee gradient>
          {exhibitors5.map((sponsor, index) => (
            <div key={index} className='exibitorSlider text-center h-100'>
              <img
                width={sponsor.width}
                height={sponsor.height}
                src={sponsor.image}
                alt={`exhibitor ${index}`}
                loading='lazy'
              />
            </div>
          ))}
        </Marquee>
      </Container>
      <Container>
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
          <p className='my-5 fw-bold fs-2 text-secondary text-center text-uppercase'>{t('home.title-testimonials')}</p>
          <Row className='mt-5 mb-5'>
            <Col lg={4} className='mt-3 text-center'>
              <a
                href='https://www.youtube.com/watch?v=FEN9FWUSjJs'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/video1.webp'
                  alt='YouTube video preview'
                  width={320}
                  height={180}
                  loading='lazy'
                />
              </a>
            </Col>
            <Col lg={4} className='mt-3 text-center'>
              <a
                href='https://www.youtube.com/watch?v=6ozntz0ZGXM'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/video2.webp'
                  alt='YouTube video preview'
                  width={320}
                  height={180}
                  loading='lazy'
                />
              </a>
            </Col>
            <Col lg={4} className='mt-3 text-center'>
              <a
                href='https://www.youtube.com/watch?v=LJ5uBtHnV34'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='/video3.webp'
                  alt='YouTube video preview'
                  width={320}
                  height={180}
                  loading='lazy'
                />
              </a>
            </Col>
          </Row>
          <p className='text-center'>
            <Link
              to='/videos'
              aria-label='Videos'
              className='text-decoration-none'
            >
              <span className='learnmore'>{t('home.more_videos')}</span>
            </Link>
          </p>
        </div>
      </Container>
      {/* <Container className='my-5'>
          <h2 className='fw-bold fs-2 pb-4 home-text-color text-uppercase text-center'
            style={{ color: '#288705' }}>SOLAR  + STORAGE MEXICO {t("home.rates.title")} 2024
          </h2>
          <p className='fst-italic fs-5 mb-5 text-center'>{t("home.rates.sub-title")}</p>
          <Row className='text-center'>
            <Col lg={4} md={4} sm={12} className="column-with-border p-4">
              <h4 className='fw-bolder'>{t("home.rates.item1.title1")}</h4>
              <p className='text-decoration-line-through fs-4 text fw-semibold'> {t("home.rates.item1.price1")} </p>
              <p className='fs-3 text fw-bolder text-danger'>{t("home.rates.item1.priece2")} </p>
              <p className='fs-4 text fw-semibold'>{t("home.rates.item1.title2")} </p>
              <ul class="list-group-flush p-0 m-0">
                <li class="list-group-item"> {t("home.rates.item1.topic1")} </li>
                <li class="list-group-item"> {t("home.rates.item1.topic2")} </li>
                <li class="list-group-item"> {t("home.rates.item1.topic3")} </li>
                <li class="list-group-item"> {t("home.rates.item1.topic4")} </li>
                <li class="list-group-item"> {t("home.rates.item1.topic5")} </li>
                <li class="list-group-item"> {t("home.rates.item1.topic6")} </li>
              </ul>
            </Col>
            <Col lg={4} md={4} sm={12} className="column-with-border p-4">
              <h4 className='fw-bolder'>{t("home.rates.item2.title1")}</h4>
              <p className='fs-3 text  fw-bolder'> {t("home.rates.item2.price1")} </p>
              <p className='fs-4 text fw-semibold'>{t("home.rates.item1.title2")} </p>
              <ul class="list-group-flush p-0 m-0">
                <li class="list-group-item"> {t("home.rates.item2.topic1")} </li>
                <li class="list-group-item"> {t("home.rates.item2.topic2")} </li>
                <li class="list-group-item"> {t("home.rates.item2.topic3")} </li>
                <li class="list-group-item"> {t("home.rates.item2.topic4")} </li>
                <li class="list-group-item"> {t("home.rates.item2.topic5")} </li>
                <li class="list-group-item"> {t("home.rates.item2.topic6")} </li>
                <li class="list-group-item"> {t("home.rates.item2.topic7")} </li>
                <li class="list-group-item"> {t("home.rates.item2.topic8")} </li>
              </ul>
            </Col>
            <Col lg={4} md={4} sm={12} className='p-4'>
              <h4 className='fw-bolder'>{t("home.rates.item3.title1")}</h4>
              <p className='fs-3 text fw-bolder'>{t("home.rates.item3.price1")} </p>
              <p className='fs-4 text fw-semibold'>{t("home.rates.item1.title2")} </p>
              <ul class="list-group-flush p-0 m-0">
                <li class="list-group-item"> {t("home.rates.item3.topic1")} </li>
                <li class="list-group-item"> {t("home.rates.item3.topic2")} </li>
                <li class="list-group-item"> {t("home.rates.item3.topic3")} </li><br />
                <li class="list-group-item fw-semibold"> {t("home.rates.item3.topic4")} </li>
              </ul>
            </Col>
          </Row>
      </Container> */}
      <Container>
        <section>
          <div className='mt-5 pt-5 pb-5 text-center'>
            <p className='fw-bold fs-2'>{t('home.sponsor_platinum')}</p>
            <a
              href='https://consumer.huawei.com/mx/'
              target='_blank'
              rel='noreferrer'
            >
              <img
                width={200}
                height={45}
                src='/Huawei.webp'
                alt='Huawei'
                loading='lazy'
              />
            </a>
            <p className='mt-5 fw-bold fs-2'>{t('home.sponsor_gold')}</p>
            <Row className='gap-2 d-flex align-items-start justify-content-center'>
              <Col sm={12} md={4} lg={2} className=''>
                <a
                  href='https://www.longi.com/mx/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    width={150}
                    height={68}
                    src='/LONGI.webp'
                    alt='LONGI'
                    loading='lazy'
                  />
                </a>

              </Col>
              <Col sm={12} md={4} lg={2} className=''>
                <a
                  href='https://www.enlight.mx/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    width={150}
                    height={78}
                    src='/enlight.webp'
                    alt='LONGI'
                    loading='lazy'
                  />
                </a>

              </Col>
            </Row>



            <p className='mt-5 fw-bold fs-2'>{t('home.sponsor')}</p>
            <div className='d-grid d-md-table gap-2'>
              <a
                href='https://sunpower.maxeon.com/mx/por-que-sunpower'
                target='_blank'
                rel='noreferrer'
                className='p-3'
              >
                <img
                  width={200}
                  height={47}
                  src='/SUNPOWER.webp'
                  alt='SUNPOWER'
                  loading='lazy'
                />
              </a>
              <a
                href='https://www.iberdrolamexico.com/conocenos/iberdrola-en-mexico/'
                target='_blank'
                rel='noreferrer'
                className='p-3'
              >
                <img
                  width={150}
                  height={101}
                  src='/Ibedrola.webp'
                  alt='Ibedrola'
                  loading='lazy'
                />
              </a>
              <a
                href='https://solar-distribution.baywa-re.mx/es/'
                target='_blank'
                rel='noreferrer'
                className='p-3'
              >
                <img
                  width={200}
                  height={76}
                  src='/BayWar.webp'
                  alt='BayWar'
                  loading='lazy'
                />
              </a>
              <a
                href='https://es.s-5.com/'
                target='_blank'
                rel='noreferrer'
                className='p-3'
              >
                <img
                  width={80}
                  height={80}
                  src='/S-5logo.webp'
                  alt='S-5logo'
                  loading='lazy'
                />
              </a>
              <a
                href='https://es.antaisolar.com/'
                target='_blank'
                rel='noreferrer'
                className='p-3'
              >
                <img
                  width={200}
                  height={70}
                  src='/antai.webp'
                  alt='Antai'
                  loading='lazy'
                />
              </a>
              <a
                href='https://latam.apsystems.com/'
                target='_blank'
                rel='noreferrer'
                className='p-3'
              >
                <img
                  width={200}
                  height={50}
                  src='/apSystems.webp'
                  alt='apSystems'
                  loading='lazy'
                />
              </a>
            </div>
          </div>
        </section>
      </Container>
      <section className='mt-5 home-whyexhibit'>
        <Container>
          <p
            className='fw-bold fs-2'
            dangerouslySetInnerHTML={{ __html: t('home.why_exhibit') }}
          />
          <p
            className='d-flex align-items-center gap-3'
            dangerouslySetInnerHTML={{
              __html: t('home.why_exhibit_description1'),
            }}
          />
          <p className='mt-4 d-flex align-items-center gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              width={40}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>{' '}
            {t('home.why_exhibit_option_1')}
          </p>
          <p className='d-flex align-items-center gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              width={40}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>{' '}
            {t('home.why_exhibit_option_2')}
          </p>
          <p className='d-flex align-items-center gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              width={40}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>{' '}
            {t('home.why_exhibit_option_3')}
          </p>
          <p className='d-flex align-items-center gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              width={40}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>{' '}
            {t('home.why_exhibit_option_4')}
          </p>
          <p className='d-flex align-items-center gap-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              width={40}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>{' '}
            {t('home.why_exhibit_option_5')}
          </p>
        </Container>
      </section>
      <Container className='mt-5'>
        <section className='pt-5' ref={ref}>
          <p className='fw-bold fs-2 text-center home-text-color'>
            {t('home.gallery')} SSM 2023
          </p>
          {show && <Gallery />}
          <p className='mt-5 text-center'>
            <Link
              to='/gallery'
              aria-label={t('home.more_gallery')}
              className='text-decoration-none'
            >
              <span className='learnmore'>{t('home.more_gallery')}</span>
            </Link>
          </p>
        </section>
      </Container>
      <section className='mt-5'>
        <Container>
          <p className='fw-bold fs-2 text-secondary text-center'>
            {t('home.organized_by')}:
          </p>
          <Row className='text-center'>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a
                href='https://www.iegexpo.it/en/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/italianExhibitionGroup.webp'
                  width={150}
                  height={82}
                  loading='lazy'
                  alt='italianExhibitionGroup'
                />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a
                href='https://www.messe.de/en/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/deutscheMesse.webp'
                  width={250}
                  height={54}
                  loading='lazy'
                  alt='deutscheMesse'
                />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a
                href='http://www.snec.org.cn/'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src='/snecPower.webp'
                  width={150}
                  height={114}
                  loading='lazy'
                  alt='snecPower'
                />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a href='https://re-plus.events' target='_blank' rel='noreferrer'>
                <img
                  src='/RE_Events_orange.webp'
                  width={100}
                  height={80}
                  loading='lazy'
                  alt='replus'
                />
              </a>
            </Col>
          </Row>
          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>
            Powered by:
          </p>
          <Row className='text-center'>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a href='https://www.amif.mx/' target='_blank' rel='noreferrer'>
                <img
                  src='/amif.webp'
                  width={200}
                  height={59}
                  loading='lazy'
                  alt='amif'
                />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a href='https://asolmex.org/' target='_blank' rel='noreferrer'>
                <img
                  src='/asolmex.webp'
                  width={150}
                  height={150}
                  loading='lazy'
                  alt='asolmex'
                />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a href='https://www.seia.org/' target='_blank' rel='noreferrer'>
                <img
                  src='/seiaSolarEnergy.webp'
                  width={200}
                  height={62}
                  loading='lazy'
                  alt='seiaSolarEnergy'
                />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto pt-4'>
              <a href='https://sepapower.org/' target='_blank' rel='noreferrer'>
                <img
                  src='/SmartElectric.webp'
                  width={200}
                  height={62}
                  loading='lazy'
                  alt='SmartElectric'
                />
              </a>
            </Col>
          </Row>

          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>
            {t('home.strategic_partners')}:
          </p>
          <Marquee gradient>
            {partners.map((sponsor, index) => (
              <div key={index} className='exibitorSlider text-center h-100'>
                <a href={sponsor.link} target='_blank' rel='noreferrer'>
                  <img
                    width={sponsor.width}
                    height={sponsor.height}
                    src={sponsor.image}
                    alt={`Sponsor ${index}`}
                    loading='lazy'
                  />
                </a>
              </div>
            ))}
          </Marquee>
          <Marquee gradient direction='letf'>
            {partners2.map((sponsor, index) => (
              <div key={index} className='exibitorSlider text-center h-100'>
                <a href={sponsor.link} target='_blank' rel='noreferrer'>
                  <img
                    width={sponsor.width}
                    height={sponsor.height}
                    src={sponsor.image}
                    alt={`Sponsor ${index}`}
                    loading='lazy'
                  />
                </a>
              </div>
            ))}
          </Marquee>
          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>
            Broadcasting Media Partner
          </p>
          <Marquee gradient direction='letf'>
            {broadcasting.map((sponsor, index) => (
              <div key={index} className='exibitorSlider text-center h-100'>
                <a href={sponsor.link} target='_blank' rel='noreferrer'>
                  <img
                    width={sponsor.width}
                    height={sponsor.height}
                    src={sponsor.image}
                    alt={`Sponsor ${index}`}
                    loading='lazy'
                  />
                </a>
              </div>
            ))}
          </Marquee>
          <Marquee gradient className='mt-3'>
            {broadcasting2.map((sponsor, index) => (
              <div key={index} className='exibitorSlider text-center h-100'>
                <a href={sponsor.link} target='_blank' rel='noreferrer'>
                  <img
                    width={sponsor.width}
                    height={sponsor.height}
                    src={sponsor.image}
                    alt={`Sponsor ${index}`}
                    loading='lazy'
                  />
                </a>
              </div>
            ))}
          </Marquee>
        </Container>
      </section>
      <section>
        <div data-aos="zoom-in" data-aos-duration="2500">
          <Container className='my-5'>
            <Row className='text-secondary text-center mb-5'>
              <Col lg={12} className='fs-1 fw-bolder' style={{ color: '#8C3295' }}>PRESENCIA EN REDES SOCIALES</Col>
              <Col lg={12} className=''>
                <img src="/instagram.webp" alt="" width={35} className='m-2' />
                <img src="/facebook.webp" alt="" width={35} className='m-2' />
                <img src="/twitter.webp" alt="" width={35} className='m-2' />
                <img src="/linkedin.webp" alt="" width={35} className='m-2' />
              </Col>
            </Row>
            <Row className='d-flex align-items-center justify-content-center'>
              <Col lg={4}>
                <img src="/social_networks.webp" alt="" height={350} />
              </Col>
              <Col lg={8}>
                <Row className='text-secondary d-flex align-items-center justify-content-center'>
                  <Col lg={3} className='text-center'>
                    <Bullets number='21000' duration='4' simbol_1='+' />
                    <p className='fs-6 text-uppercase'><span className='fs-3 fw-bolder' style={{ color: '#8C3295' }}>{t("home.social_networks.topic_1")}</span><br />{t("home.social_networks.dec_1")}</p>
                  </Col>
                  <Col lg={6} className='text-center'>
                    <Bullets number='2500000' duration='4' simbol_1='+' />
                    <p className='fs-6 text-uppercase'><span className='fs-3 fw-bolder' style={{ color: '#8C3295' }}>{t("home.social_networks.topic_2")}</span><br />{t("home.social_networks.dec_2")}</p>
                  </Col>
                  <Col lg={3} className='text-center'>
                    <p className='fs-6 text-uppercase'><span className='fs-3 fw-bolder' style={{ color: '#8C3295' }}>{t("home.social_networks.topic_3")}</span><br />{t("home.social_networks.dec_3")}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}
