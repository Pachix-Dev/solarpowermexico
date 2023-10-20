import { Col, Container, Row } from 'react-bootstrap'
import { useLanguage } from '../hooks/useLanguage'
import './EnergyNight.css'
import { CounterDown } from './CounterDown'
import { useTranslation } from 'react-i18next'

export function EnergyNight () {
  const { t } = useTranslation()
  const { stateLang } = useLanguage()
  return (
    <>
      <CounterDown />
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
      <section className='mt-5 pt-5 pb-5 bg-energy-night'>
        <Container className='pt-5 pb-5'>
          <p className='fs-2' dangerouslySetInnerHTML={{ __html: t('counterDown.description') }} />
          <Row>
            <Col md={5} className='mx-auto'>
              <img src='/ENERGY-NIGHT.webp' alt='energy-night' className='w-100' />
            </Col>
          </Row>

        </Container>
      </section>
    </>
  )
}
