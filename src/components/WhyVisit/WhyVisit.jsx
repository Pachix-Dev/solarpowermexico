import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './WhyVisit.css'
import { useLanguage } from '../hooks/useLanguage'
export function WhyVisit () {
  const { t } = useTranslation()
  const { StateLang } = useLanguage()
  return (
    <>
      <section className='bg-secondary-text pt-5 pb-5 mt-5 mb-5'>
        <Container>
          <p className='fw-bold fs-1'>SOLAR + STORAGE MEXICO</p>
          <Row className='mt-5 mb-5'>
            <Col md dangerouslySetInnerHTML={{ __html: t('WhyVisit.description') }} />
            <Col md className='bg-whyvisit' />
          </Row>
        </Container>
        {StateLang === 'en'
          ? <img src='/WhyAttend.webp' alt='why-visit' className='w-100' />
          : <img src='/PorQueAsistir.webp' alt='why-visit' className='w-100' />}
      </section>
    </>
  )
}
