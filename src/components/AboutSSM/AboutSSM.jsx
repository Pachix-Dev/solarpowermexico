import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './AboutSSM.css'
export function AboutSSM () {
  const { t } = useTranslation()
  return (
    <>
      <Container className='mt-5'>
        <i className='text-secondary'>
          SOLAR + STORAGE MEXICO
        </i>
        <p className='fs-2 fw-bold'>
          {t('AboutSSM.title')}
        </p>

        <section className='mt-5'>
          <Row className='m-0'>
            <Col md className='p-3 bg-secondary-text'>
              <p>
                <strong>SOLAR + STORAGE MEXICO</strong>
                <span dangerouslySetInnerHTML={{ __html: t('AboutSSM.description') }} />
              </p>
              <p className='text-center fw-bold'>{t('AboutSSM.description2')}</p>
            </Col>
            <Col md>
              <img src='/gallery/gallerySSM2023-7.jpg' alt='' className='w-100 h-100 object-fit-cover' />
            </Col>
          </Row>
        </section>
      </Container>
    </>
  )
}
