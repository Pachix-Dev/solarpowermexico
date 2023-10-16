import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import { Slider } from './Slider'
import Marquee from 'react-fast-marquee'
import { Gallery } from './Gallery'

export function Home () {
  const { t, i18n } = useTranslation()

  const YouTubeVideo = ({ videoId }) => {
    return (
      <Col md={4} className='mt-3 text-center'>
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
            alt='YouTube video preview'
            width={320}
            height={180}
            loading='lazy'
          />
        </a>
      </Col>
    )
  }

  const VideosGallery = () => {
    const videoIds = ['8sojVTHwz94', 'YaE8Iv6DeQM', 'Vgd9L5iemws']
    return (
      <Row className='mt-5 mb-5'>
        {videoIds.map((videoId, index) => (
          <YouTubeVideo key={index} videoId={videoId} />
        ))}
      </Row>
    )
  }

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Slider />
      <Container>
        <section>
          <div className='mt-5 pt-5 pb-5 text-center'>
            <p className='fw-bold fs-2'>{t('home.sponsor_platinum')}</p>
            <a href='https://consumer.huawei.com/mx/' target='_blank' rel='noreferrer'>
              <img width={200} height={45} src='/Huawei.webp' alt='Huawei' loading='lazy' />
            </a>
            <p className='mt-5 fw-bold fs-2'>{t('home.sponsor_gold')}</p>
            <a href='https://www.longi.com/mx/' target='_blank' rel='noreferrer'>
              <img width={150} height={68} src='/LONGI.webp' alt='LONGI' loading='lazy' />
            </a>
            <p className='mt-5 fw-bold fs-2'>{t('home.sponsor_silver')}</p>
            <a href='https://en.pylontech.com.cn/' target='_blank' rel='noreferrer'>
              <img width={200} height={50} src='/Pylontech.webp' alt='Pylontech' loading='lazy' />
            </a>
            <p className='mt-5 fw-bold fs-2'>{t('home.sponsor')}</p>

            <a href='https://sunpower.maxeon.com/mx/por-que-sunpower' target='_blank' rel='noreferrer' className='p-3'>
              <img width={200} height={47} src='/SUNPOWER.webp' alt='SUNPOWER' loading='lazy' />
            </a>

            <a href='https://www.iberdrolamexico.com/conocenos/iberdrola-en-mexico/' target='_blank' rel='noreferrer' className='p-3'>
              <img width={150} height={101} src='/Ibedrola.webp' alt='Ibedrola' loading='lazy' />
            </a>

            <a href='https://solar-distribution.baywa-re.mx/es/' target='_blank' rel='noreferrer' className='p-3'>
              <img width={200} height={76} src='/BayWar.webp' alt='BayWar' loading='lazy' />
            </a>

            <a href='https://es.s-5.com/' target='_blank' rel='noreferrer' className='p-3'>
              <img width={100} height={100} src='/S-5logo.webp' alt='S-5logo' loading='lazy' />
            </a>
          </div>
        </section>
        <article className='pt-5'>
          <Row className='pt-5'>
            <Col md={6}>
              <p className='fw-bold fs-2 home-text-color'>SOLAR + STORAGE MEXICO 2024</p>
              <p className='fs-5'><strong>SOLAR + STORAGE MEXICO </strong><span dangerouslySetInnerHTML={{ __html: t('home.solar_description') }} />
              </p>
            </Col>
            <Col md={6} className='my-auto'>
              {
          i18n.language === 'en'
            ? <video className='w-100' controls src='/SSM-2024-ENG.mp4' poster='/posterSolarVideo2024ENG.webp' loading='lazy' />
            : <video className='w-100' controls src='/SSM-2024-ES.mp4' poster='/posterSolarVideo2024.webp' loading='lazy' />

        }
            </Col>
          </Row>
        </article>
        <Row className='mt-5 mb-5'>
          <VideosGallery />
        </Row>
        <p className='text-center'>
          <Link to='/videos' aria-label='videos SSM' className='text-decoration-none'>
            <span className='learnmore'>{t('home.more_videos')}</span>
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
              <span className='learnmore'>{t('home.more_gallery')}</span>
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
                <img src='/italianExhibitionGroup.webp' width={150} height={82} loading='lazy' alt='italianExhibitionGroup' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.messe.de/en/' target='_blank' rel='noreferrer'>
                <img src='/deutscheMesse.webp' width={250} height={54} loading='lazy' alt='deutscheMesse' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='http://www.snec.org.cn/' target='_blank' rel='noreferrer'>
                <img src='/snecPower.webp' width={150} height={114} loading='lazy' alt='snecPower' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.re-plus.com/' target='_blank' rel='noreferrer'>
                <img src='/replus.webp' width={100} height={53} loading='lazy' alt='replus' />
              </a>
            </Col>
          </Row>
          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>Powered by:</p>
          <Row className='text-center'>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.amif.mx/' target='_blank' rel='noreferrer'>
                <img src='/amif.webp' width={200} height={59} loading='lazy' alt='amif' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://asolmex.org/' target='_blank' rel='noreferrer'>
                <img src='/asolmex.webp' width={150} height={150} loading='lazy' alt='asolmex' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://www.seia.org/' target='_blank' rel='noreferrer'>
                <img src='/seiaSolarEnergy.webp' width={200} height={62} loading='lazy' alt='seiaSolarEnergy' />
              </a>
            </Col>
            <Col md={3} className='mx-auto my-auto'>
              <a href='https://sepapower.org/' target='_blank' rel='noreferrer'>
                <img src='/SmartElectric.webp' width={200} height={62} loading='lazy' alt='SmartElectric' />
              </a>
            </Col>
          </Row>
          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>{t('home.strategic_partners')}:</p>
          <Marquee gradient>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.energypartnership.mx/es/home/' target='_blank' rel='noreferrer'>
                <img src='/AlianzaEnergetica.webp' width={200} height={67} loading='lazy' alt='AlianzaEnergetica' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://amsoc.mx/es/inicio/' target='_blank' rel='noreferrer'>
                <img src='/80-amsoc.webp' width={150} height={98} loading='lazy' alt='80-amsoc' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://mexiko.ahk.de/es/' target='_blank' rel='noreferrer'>
                <img src='/ahk.webp' width={250} height={65} loading='lazy' alt='ahk' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.emergealliance.org/' target='_blank' rel='noreferrer'>
                <img src='/emmerge.webp' width={200} height={85} loading='lazy' alt='emmerge' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.jalisco.gob.mx/' target='_blank' rel='noreferrer'>
                <img src='/gobiernoJalisco.webp' width={150} height={150} loading='lazy' alt='gobiernoJalisco' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://mermx.org/' target='_blank' rel='noreferrer'>
                <img src='/merm.webp' width={200} height={103} loading='lazy' alt='merm' />
              </a>
            </div>
          </Marquee>
          <Marquee gradient direction='letf'>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.eupd-research.com/' target='_blank' rel='noreferrer'>
                <img src='/EUPD-Research.webp' width={200} height={38} loading='lazy' alt='EUPD-Research' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='http://www.galoenergy.com/' target='_blank' rel='noreferrer'>
                <img src='/GaloEnergy.webp' width={150} height={76} loading='lazy' alt='GaloEnergy' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.giz.de/en/worldwide/33041.html' target='_blank' rel='noreferrer'>
                <img src='/giz.webp' width={250} height={108} loading='lazy' alt='giz' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://h2mex.org/' target='_blank' rel='noreferrer'>
                <img src='/h2mexico-asoc.webp' width={200} height={68} loading='lazy' alt='h2mexico-asoc' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.kas.de/es/web/mexiko' target='_blank' rel='noreferrer'>
                <img src='/KAS.webp' width={150} height={46} loading='lazy' alt='KAS' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.mujeresenergia.org/' target='_blank' rel='noreferrer'>
                <img src='/redMujeres.webp' width={200} height={65} loading='lazy' alt='redMujeres' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.solarenergy.org/' target='_blank' rel='noreferrer'>
                <img src='/SEI.webp' width={150} height={107} loading='lazy' alt='SEI' />
              </a>
            </div>
          </Marquee>

          <p className='mt-5 fw-bold fs-2 text-secondary text-center'>Broadcasting Media Partner</p>
          <Row className='text-center mb-5'>
            <Col md={3} className='mt-3 mx-auto my-auto'>
              <a href='https://heraldodemexico.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/El_Heraldo_de_Mexico.webp' width={250} height={37} loading='lazy' alt='El_Heraldo_de_Mexico' />
              </a>
            </Col>
          </Row>
          <Marquee gradient direction='letf'>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.eleconomista.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/economista.webp' width={200} height={19} loading='lazy' alt='economista' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.pv-magazine-mexico.com/' target='_blank' rel='noreferrer'>
                <img src='/pv-magazine-group.webp' width={200} height={68} loading='lazy' alt='pv-magazine-group' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://mexicoindustry.com/es' target='_blank' rel='noreferrer'>
                <img src='/mexicoIndustry.webp' width={150} height={53} loading='lazy' alt='mexicoIndustry' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.cosmos.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/onlineCosmos.webp' width={200} height={88} loading='lazy' alt='onlineCosmos' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://energyandcommerce.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/Energy-Commerce.webp' width={150} height={60} loading='lazy' alt='Energy-Commerce' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://energiaadebate.com/' target='_blank' rel='noreferrer'>
                <img src='/energiadebate.webp' width={130} height={75} loading='lazy' alt='energiadebate' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://energiahoy.com/' target='_blank' rel='noreferrer'>
                <img src='/EnergiaHoy.webp' width={200} height={45} loading='lazy' alt='EnergiaHoy' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://energy21.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/eneroy21.webp' width={200} height={40} loading='lazy' alt='eneroy21' />
              </a>
            </div>
          </Marquee>
          <Marquee gradient className='mt-3'>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://globalenergy.mx/' target='_blank' rel='noreferrer'>
                <img src='/Global-Energy.webp' width={140} height={62} loading='lazy' alt='Global-Energy' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://globalindustries.mx/' target='_blank' rel='noreferrer'>
                <img src='/global-industries.webp' width={200} height={62} loading='lazy' alt='global-industries' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://greentology.life/' target='_blank' rel='noreferrer'>
                <img src='/greentology.webp' width={200} height={55} loading='lazy' alt='greentology' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://revistaconsultoria.com.mx/' target='_blank' rel='noreferrer'>
                <img src='/revistaConsultoria.webp' width={200} height={50} loading='lazy' alt='revistaConsultoria' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://www.vanguardia-industrial.net/' target='_blank' rel='noreferrer'>
                <img src='/VanguardiaIndustrial.webp' width={150} height={79} loading='lazy' alt='VanguardiaIndustrial' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://worldconstruccion.mx/' target='_blank' rel='noreferrer'>
                <img src='/worldConstruccion.webp' width={200} height={34} loading='lazy' alt='worldConstruccion' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://discovercleantech.com/' target='_blank' rel='noreferrer'>
                <img src='/discoverCleanTech.webp' width={200} height={48} loading='lazy' alt='discoverCleanTech' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='http://www.revistadp.com/' target='_blank' rel='noreferrer'>
                <img src='/revista-de-preferencia.webp' width={200} height={57} loading='lazy' alt='revista-de-preferencia' />
              </a>
            </div>
            <div className='exibitorSlider text-center h-100'>
              <a href='https://petroleoenergia.com/' target='_blank' rel='noreferrer'>
                <img src='/petroleo_y_energia.webp' width={150} height={83} loading='lazy' alt='petroleo_y_energia' />
              </a>
            </div>
          </Marquee>
        </Container>
      </section>
    </>
  )
}
