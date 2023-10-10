import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './VisitorProfile.css'
export function VisitorProfile () {
  const { t } = useTranslation()
  return (
    <>
      <section className='visitor-profile bg-secondary-text pt-5 pb-5 mt-5 mb-5'>
        <Container>
          <i>SOLAR + STORAGE MEXICO</i>
          <p className='fw-bold fs-1'>
            {t('VisitorProfile.title')}
          </p>
          <Row className='mt-5 mb-5'>
            <Col className='pt-5 pb-5' md dangerouslySetInnerHTML={{ __html: t('VisitorProfile.description') }} />
            <Col md className='bg-visitorProfile' />
          </Row>
          <Row className='mt-5 mb-5'>
            <Col md className='bg-visitorProfile2' />
            <Col className='pt-5 pb-5' md dangerouslySetInnerHTML={{ __html: t('VisitorProfile.description2') }} />
          </Row>
        </Container>
      </section>
    </>
  )
}
