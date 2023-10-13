import { Col, Container, Ratio, Row } from 'react-bootstrap'
import './Home.css'
import { Slider } from './Slider'
import { Gallery } from './Gallery'
import { useTranslation } from 'react-i18next'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'
export function Home () {
  const { t, i18n } = useTranslation()
  return (
    <>
      <Container>
        <header>
          <nav className='mt-5 home-solar-submenu'>
            <a
              href={i18n.language === 'en'
                ? '/files/ENG-SPONSORSHIPS-SSM-v4.pdf'
                : '/files/PATROCINIOS-SSM-2024-V4.pdf'}
              target='_blank' rel='noreferrer'
            >
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={50}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z' />
              </svg>
              {t('home.sponsorship')}
            </a>
            <a
              href={i18n.language === 'en'
                ? '/files/RESULTS-REPORT-SSM-2023-ENG.pdf'
                : '/files/REPORTE-DE-RESULTADOS-SSM-2023-ESP.pdf'}
              target='_blank' rel='noreferrer'
            >
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={30}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6' />
              </svg>
              {t('home.results')}
            </a>
            <a
              href={i18n.language === 'en'
                ? '/files/SOLAR-STORAGE-MEXICO-FACTSHEET-INGLÉS.pdf'
                : '/files/SOLAR-STORAGE-MEXICO-FACTSHEET-ESPAÑOL.pdf'}
              target='_blank' rel='noreferrer'
            >
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={30}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' />
              </svg>
              Factsheet 2024
            </a>
            <a href='https://spmx24.mapyourshow.com/8_0/floorplan/index.cfm' target='_blank' rel='noreferrer'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={30}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z' />
              </svg> {t('home.floorplan')}
            </a>
            <a href='/files/Directorio-SSM-2023.pdf' target='_blank' rel='noreferrer'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={30}>
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25' />
              </svg> {t('home.exhibitor_directory')}
            </a>
            <a href='https://hfmexico.mx/ecomondo/' aria-label='ecomondo' style={{ padding: 0, background: 'none' }} target='_blank' rel='noreferrer'>
              <img width={150} src='/botone-ECO-esp.jpg' alt='ecomondo' />
            </a>
          </nav>
        </header>
      </Container>
      <Slider />
      <Container>
        <section>
          <div className='mt-5 pt-5 pb-5 text-center'>
            <p className='fw-bold fs-2'>{t('home.sponsor_platinum')}</p>
            <Marquee gradient>
              <div className='exibitorSlider text-center h-100'>
                <a href='https://consumer.huawei.com/mx/' target='_blank' rel='noreferrer'>
                  <img width={200} src='/Huawei.webp' alt='Huawei' />
                </a>
              </div>
              <div className='exibitorSlider text-center h-100'>
                <a href='https://www.longi.com/mx/' target='_blank' rel='noreferrer'>
                  <img width={150} src='/LONGI.webp' alt='LONGI' />
                </a>
              </div>
              <div className='exibitorSlider text-center h-100'>
                <a href='https://en.pylontech.com.cn/' target='_blank' rel='noreferrer'>
                  <img width={200} src='/Pylontech.webp' alt='Pylontech' />
                </a>
              </div>
              <div className='exibitorSlider text-center h-100'>
                <a href='https://sunpower.maxeon.com/mx/por-que-sunpower' target='_blank' rel='noreferrer' className='p-3'>
                  <img width={200} src='/SUNPOWER.webp' alt='SUNPOWER' />
                </a>
              </div>
              <div className='exibitorSlider text-center h-100'>
                <a href='https://www.iberdrolamexico.com/conocenos/iberdrola-en-mexico/' target='_blank' rel='noreferrer' className='p-3'>
                  <img width={150} src='/Ibedrola.webp' alt='Ibedrola' />
                </a>
              </div>
              <div className='exibitorSlider text-center h-100'>
                <a href='https://solar-distribution.baywa-re.mx/es/' target='_blank' rel='noreferrer' className='p-3'>
                  <img width={200} src='/BayWar.webp' alt='BayWar' />
                </a>
              </div>
              <div className='exibitorSlider text-center h-100'>
                <a href='https://es.s-5.com/' target='_blank' rel='noreferrer' className='p-3'>
                  <img width={100} src='/S-5logo.webp' alt='S-5logo' />
                </a>
              </div>
            </Marquee>
          </div>
        </section>
        <article className='pt-5'>
          <Row className='pt-5'>
            <Col md={8}>
              <p className='fw-bold fs-2 home-text-color'>SOLAR + STORAGE MEXICO 2024</p>
              <p className='fs-5'><strong>SOLAR + STORAGE MEXICO </strong><span dangerouslySetInnerHTML={{ __html: t('home.solar_description') }} />
              </p>
            </Col>
            <Col md={4}>
              <img src='/SSM-2024_img.webp' alt='solar-2024' className='w-100' />
            </Col>
          </Row>
        </article>
        <div className='mt-5'>
          {
          i18n.language === 'en'
            ? <video className='w-100' controls src='/SSM-2024-ENG.mp4' poster='/posterSolarVideo2024ENG.webp' />
            : <video className='w-100' controls src='/SSM-2024-ES.mp4' poster='/posterSolarVideo2024.webp' />

        }
        </div>

        <Row className='mt-5 mb-5'>
          <Col md={4} className='mt-3'>
            <Ratio aspectRatio='16x9'>
              <iframe
                src='https://www.youtube-nocookie.com/embed/8sojVTHwz94'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </Ratio>
          </Col>
          <Col md={4} className='mt-3'>
            <Ratio aspectRatio='16x9'>
              <iframe
                src='https://www.youtube-nocookie.com/embed/YaE8Iv6DeQM'
                title='YouTube video player'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </Ratio>
          </Col>
          <Col md={4} className='mt-3'>
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
        <p className='text-center'>
          <Link to='/videos' aria-label='videos SSM' className='text-decoration-none'>
            <span className='learnmore'>{t('home.learn_more')}</span>
          </Link>
        </p>

      </Container>
      <section className='mt-5 home-whyexhibit'>
        <p className='fw-bold fs-2'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={80}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z' />
            <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
          </svg> {t('home.why_exhibit')}
        </p>
        <p className='d-flex align-items-center gap-3'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={40}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg> {t('home.why_exhibit_description1')}
        </p>
        <p className='d-flex align-items-center gap-3'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={40}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg> {t('home.why_exhibit_description2')}
        </p>
        <p className='d-flex align-items-center gap-3'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={40}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
          </svg> {t('home.why_exhibit_description3')}
        </p>
      </section>
      <Container className='mt-5'>
        <Row>
          <Col md className='text-center'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={60}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z' />
              <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z' />
            </svg>
            <p className='fw-bold fs-5'>{t('home.why_exhibit_select')}</p>
            <p>{t('home.why_exhibit_select_desc')}</p>
          </Col>
          <Col md className='text-center'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={60}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z' />
            </svg>
            <p className='fw-bold fs-5'>{t('home.why_exhibit_visit')}</p>
            <p>{t('home.why_exhibit_visit_desc')}</p>
          </Col>
          <Col md className='text-center'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={60}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25' />
            </svg>
            <p className='fw-bold fs-5'>{t('home.why_exhibit_general')}</p>
            <p>{t('home.why_exhibit_general_desc')}</p>
          </Col>
        </Row>
        <section className='pt-5'>
          <p className='fw-bold fs-2 text-center home-text-color'>{t('home.gallery')} SSM 2023</p>
          <Gallery />
          <p className='mt-5 text-center'>
            <Link to='/gallery' aria-label='gallery SSM' className='text-decoration-none'>
              <span className='learnmore'>{t('home.learn_more')}</span>
            </Link>
          </p>
        </section>
      </Container>

      <section className='mt-5'>
        <Container>
          <p className='fw-bold fs-2 text-secondary text-center'>{t('home.organized_by')}:</p>
          <Row className='text-center'>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.iegexpo.it/en/' target='_blank' rel='noreferrer'>
                <img src='/italianExhibitionGroup.webp' width={150} loading='lazy' alt='italianExhibitionGroup' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.messe.de/en/' target='_blank' rel='noreferrer'>
                <img src='/deutscheMesse.webp' width={250} loading='lazy' alt='deutscheMesse' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='http://www.snec.org.cn/' target='_blank' rel='noreferrer'>
                <img src='/snecPower.webp' width={150} loading='lazy' alt='snecPower' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.re-plus.com/' target='_blank' rel='noreferrer'>
                <img src='/replus.webp' width={100} loading='lazy' alt='replus' />
              </a>
            </Col>
          </Row>
          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>Powered by:</p>
          <Row className='text-center'>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.amif.mx/' target='_blank' rel='noreferrer'>
                <img src='/amif.webp' width={200} loading='lazy' alt='amif' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://asolmex.org/' target='_blank' rel='noreferrer'>
                <img src='/asolmex.webp' width={150} loading='lazy' alt='asolmex' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.seia.org/' target='_blank' rel='noreferrer'>
                <img src='/seiaSolarEnergy.webp' width={200} loading='lazy' alt='seiaSolarEnergy' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://sepapower.org/' target='_blank' rel='noreferrer'>
                <img src='/SmartElectric.webp' width={200} loading='lazy' alt='SmartElectric' />
              </a>
            </Col>
          </Row>
          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>{t('home.strategic_partners')}:</p>
          <Row className='text-center'>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.energypartnership.mx/es/home/' target='_blank' rel='noreferrer'>
                <img src='/AlianzaEnergetica.webp' width={200} loading='lazy' alt='AlianzaEnergetica' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://amsoc.mx/es/inicio/' target='_blank' rel='noreferrer'>
                <img src='/80-amsoc.webp' width={150} loading='lazy' alt='80-amsoc' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://mexiko.ahk.de/es/' target='_blank' rel='noreferrer'>
                <img src='/ahk.webp' width={250} loading='lazy' alt='ahk' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.emergealliance.org/' target='_blank' rel='noreferrer'>
                <img src='/emmerge.webp' width={200} loading='lazy' alt='emmerge' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.jalisco.gob.mx/' target='_blank' rel='noreferrer'>
                <img src='/gobiernoJalisco.webp' width={150} loading='lazy' alt='gobiernoJalisco' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://mermx.org/' target='_blank' rel='noreferrer'>
                <img src='/merm.webp' width={200} loading='lazy' alt='merm' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.eupd-research.com/' target='_blank' rel='noreferrer'>
                <img src='/EUPD-Research.webp' width={200} loading='lazy' alt='EUPD-Research' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='http://www.galoenergy.com/' target='_blank' rel='noreferrer'>
                <img src='/GaloEnergy.webp' width={150} loading='lazy' alt='GaloEnergy' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.giz.de/en/worldwide/33041.html' target='_blank' rel='noreferrer'>
                <img src='/giz.webp' width={250} loading='lazy' alt='giz' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://h2mex.org/' target='_blank' rel='noreferrer'>
                <img src='/h2mexico-asoc.webp' width={200} loading='lazy' alt='h2mexico-asoc' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.kas.de/es/web/mexiko' target='_blank' rel='noreferrer'>
                <img src='/KAS.webp' width={150} loading='lazy' alt='KAS' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.mujeresenergia.org/' target='_blank' rel='noreferrer'>
                <img src='/redMujeres.webp' width={200} loading='lazy' alt='redMujeres' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.solarenergy.org/' target='_blank' rel='noreferrer'>
                <img src='/SEI.webp' width={150} loading='lazy' alt='SEI' />
              </a>
            </Col>
          </Row>
          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>Broadcasting Media Partner</p>
          <Row className='text-center mb-5'>
            <Col md={3} className='mt-3 mx-auto my-auto'>
              <a href='https://heraldodemexico.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/El_Heraldo_de_Mexico.webp' width={250} loading='lazy' alt='El_Heraldo_de_Mexico' />
              </a>
            </Col>
          </Row>
          <Marquee gradient direction='letf'>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.eleconomista.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/economista.webp' width={200} loading='lazy' alt='economista' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.pv-magazine-mexico.com/' target='_blank' rel='noreferrer'>
                <img src='/pv-magazine-group.webp' width={200} loading='lazy' alt='pv-magazine-group' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://mexicoindustry.com/es' target='_blank' rel='noreferrer'>
                <img src='/mexicoIndustry.webp' width={150} loading='lazy' alt='mexicoIndustry' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.cosmos.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/onlineCosmos.webp' width={200} loading='lazy' alt='onlineCosmos' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://energyandcommerce.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/Energy-Commerce.webp' width={150} loading='lazy' alt='Energy-Commerce' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://energiaadebate.com/' target='_blank' rel='noreferrer'>
                <img src='/energiadebate.webp' width={130} loading='lazy' alt='energiadebate' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://energiahoy.com/' target='_blank' rel='noreferrer'>
                <img src='/EnergiaHoy.webp' width={200} loading='lazy' alt='EnergiaHoy' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://energy21.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/eneroy21.webp' width={200} loading='lazy' alt='eneroy21' />
              </a>
            </div>
          </Marquee>
          <Marquee gradient className='mt-3'>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://globalenergy.mx/' target='_blank' rel='noreferrer'>
                <img src='/Global-Energy.webp' width={140} loading='lazy' alt='Global-Energy' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://globalindustries.mx/' target='_blank' rel='noreferrer'>
                <img src='/global-industries.webp' width={200} loading='lazy' alt='global-industries' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://greentology.life/' target='_blank' rel='noreferrer'>
                <img src='/greentology.webp' width={200} loading='lazy' alt='greentology' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://revistaconsultoria.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/revistaConsultoria.webp' width={200} loading='lazy' alt='revistaConsultoria' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.vanguardia-industrial.net/' target='_blank' rel='noreferrer'>
                <img src='/VanguardiaIndustrial.webp' width={150} loading='lazy' alt='VanguardiaIndustrial' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://worldconstruccion.mx/' target='_blank' rel='noreferrer'>
                <img src='/worldConstruccion.webp' width={200} loading='lazy' alt='worldConstruccion' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://discovercleantech.com/' target='_blank' rel='noreferrer'>
                <img src='/discoverCleanTech.webp' width={200} loading='lazy' alt='discoverCleanTech' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='http://www.revistadp.com/' target='_blank' rel='noreferrer'>
                <img src='/revista-de-preferencia.webp' width={200} loading='lazy' alt='revista-de-preferencia' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://petroleoenergia.com/' target='_blank' rel='noreferrer'>
                <img src='/petroleo_y_energia.webp' width={150} loading='lazy' alt='petroleo_y_energia' />
              </a>
            </div>
          </Marquee>
        </Container>
      </section>
    </>
  )
}
