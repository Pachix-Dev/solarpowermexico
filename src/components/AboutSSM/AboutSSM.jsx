import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './AboutSSM.css'
export function AboutSSM () {
  const { t } = useTranslation()
  return (
    <>
      <Container fluid className='mt-5'>
        <i className='text-secondary'>
          SOLAR + STORAGE MEXICO
        </i>
        <p className='fs-2 fw-bold'>
          {t('AboutSSM.title')}
        </p>
      </Container>
      <section className='mt-5'>
        <Row className='m-0'>
          <Col md className='p-3 bg-secondary-text'>
            <p>
              <strong>SOLAR + STORAGE MEXICO</strong>
              <span dangerouslySetInnerHTML={{ __html: t('AboutSSM.description') }} />
            </p>
          </Col>
          <Col md className='bg-aboutssm' />
        </Row>
      </section>
    </>
  )
}
