import { Col, Container, Ratio, Row } from 'react-bootstrap'
import './Home.css'
import { Slider } from './Slider'
import { Gallery } from './Gallery'
export function Home () {
  return (
    <>
      <Container>
        <header>
          <nav className='mt-5 home-solar-submenu'>
            <a href='' target='_blank'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={50}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z' />
              </svg>
              Patrocinios y experiencias
            </a>
            <a href='' target='_blank'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={30}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6' />
              </svg>
              Resultados <br /> 2023
            </a>
            <a href='' target='_blank'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={30}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
              </svg>
              Factsheet <br /> 2024
            </a>
            <a href='' target='_blank'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={30}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z' />
              </svg> Plano SSM<br /> 2024
            </a>
            <a href='' target='_blank'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={30}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' />
              </svg> Directorio<br /> del expositor
            </a>
            <a href='' style={{ padding: 0, background: 'none' }} target='_blank'>
              <img width={150} src='/botone-ECO-esp.jpg' />
            </a>
          </nav>
        </header>
        <section>
          <Slider />
          <div className='text-center'>
            <p className='fw-bold fs-5'>Patrocinador Platinum:</p>
            <a href='https://consumer.huawei.com/mx/' target='_blank' rel='noreferrer'>
              <img width={200} src='/Huawei.webp' alt='Huawei' />
            </a>
            <p className='mt-5 fw-bold fs-5'>Patrocinador Gold:</p>
            <a href='https://www.longi.com/mx/' target='_blank' rel='noreferrer'>
              <img width={150} src='/LONGI.webp' alt='LONGI' />
            </a>
            <p className='mt-5 fw-bold fs-5'>Patrocinador Silver:</p>
            <a href='https://en.pylontech.com.cn/' target='_blank' rel='noreferrer'>
              <img width={200} src='/Pylontech.webp' alt='Pylontech' />
            </a>
            <p className='mt-5 fw-bold fs-5'>Patrocinador:</p>
            <a href='https://sunpower.maxeon.com/mx/por-que-sunpower' target='_blank' rel='noreferrer' className='p-3'>
              <img width={200} src='/SUNPOWER.webp' alt='SUNPOWER' />
            </a>
            <a href='https://www.iberdrolamexico.com/conocenos/iberdrola-en-mexico/' target='_blank' rel='noreferrer' className='p-3'>
              <img width={150} src='/Ibedrola.webp' alt='Ibedrola' />
            </a>
            <a href='https://solar-distribution.baywa-re.mx/es/' target='_blank' rel='noreferrer' className='p-3'>
              <img width={200} src='/BayWar.webp' alt='BayWar' />
            </a>
            <a href='https://es.s-5.com/' target='_blank' rel='noreferrer' className='p-3'>
              <img width={100} src='/S-5logo.webp' alt='S-5logo' />
            </a>
          </div>
          <Row className='mt-5 mb-5'>
            <Col md={4}>
              <Ratio aspectRatio='16x9'>
                <iframe
                  src='https://www.youtube-nocookie.com/embed/8sojVTHwz94'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                />
              </Ratio>
            </Col>
            <Col md={4}>
              <Ratio aspectRatio='16x9'>
                <iframe
                  src='https://www.youtube-nocookie.com/embed/YaE8Iv6DeQM'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                />
              </Ratio>
            </Col>
            <Col md={4}>
              <Ratio aspectRatio='16x9'>
                <iframe
                  src='https://www.youtube-nocookie.com/embed/Vgd9L5iemws'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                />
              </Ratio>
            </Col>
          </Row>
        </section>
        <article className='pt-5'>
          <Row>
            <Col md={8}>
              <p className='fw-bold fs-2'>SOLAR + STORAGE MEXICO 2024</p>
              <p className='fs-5'><strong>SOLAR + STORAGE MEXICO</strong> es la primera exposición y conferencia especializada en el segmento de energía y tecnología solar, un negocio con tasas de crecimiento superiores al 25% y una inversión esperada superior a los USD $100 mil millones en energías renovables hasta el 2031.<br /><br />
                Esta exposición es operada por Deutsche Messe e Italian Exhibition Group, dos de los organizadores más importantes a nivel global, SNEC PV Power Expo, el evento de tecnología solar más importante del mundo con sede en Shanghai, China y Solar Power International, organizadores de los eventos y congresos más importantes de América del Norte.
              </p>
            </Col>
            <Col md={4}>
              <img src='/SSM-2024_img.webp' alt='solar-2024' className='w-100' />
            </Col>
          </Row>
        </article>
        <section>
          <p className='fw-bold fs-2 text-center'>Galeria SSM 2023</p>
          <Gallery />
        </section>
      </Container>
    </>
  )
}
