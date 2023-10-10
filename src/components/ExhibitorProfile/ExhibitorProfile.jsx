import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './ExhibitorProfile.css'
export function ExhibitorProfile () {
  const { t } = useTranslation()
  return (
    <>
      <section className='bg-secondary-text pt-5 pb-5 mt-5 mb-5'>
        <Container>
          <i>SOLAR + STORAGE MEXICO</i>
          <p className='fw-bold fs-2' dangerouslySetInnerHTML={{ __html: t('menu.submenu_2.option_3') }} />
        </Container>
      </section>
      <Container>
        <p dangerouslySetInnerHTML={{ __html: t('ExhibitorProfile.description') }} />
      </Container>
      <Row className='mt-5 m-0 bg-secondary-text'>
        <Col md className='p-3' dangerouslySetInnerHTML={{ __html: t('ExhibitorProfile.description2') }} />
        <Col md className='bg-exhibitor-profile' />
      </Row>
      <Row className='mt-5 m-0 bg-secondary-text'>
        <Col md className='bg-exhibitor-profile2' />
        <Col md className='p-3' dangerouslySetInnerHTML={{ __html: t('ExhibitorProfile.description3') }} />
      </Row>
    </>
  )
}
