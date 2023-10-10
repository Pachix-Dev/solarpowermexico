import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export function ExhibitorServices () {
  const { t } = useTranslation()
  return (
    <>
      <section className='bg-secondary-text pt-5 pb-5 mt-5 mb-5'>
        <Container>
          <i>SOLAR + STORAGE MEXICO</i>
          <p className='fw-bold fs-2' dangerouslySetInnerHTML={{ __html: t('menu.submenu_2.option_4') }} />
        </Container>
      </section>
      <Container>
        <Row>
          <Col md className='text-center'>
            <a className='p-3' href='/files/D-GE-010-KIT-BANQUETES-2023-Rev-6-1.pdf' target='_blank'>
              <img src='/kit-de-banquetes-2023.webp' alt='Kit de Banquetes' className='w-100' />
            </a>
            <p className='fw-bold fs-4'>
              {t('ExhibitorServicies.kit')}
            </p>
          </Col>
          <Col md className='text-center'>
            <a className='p-3' href='/files/F-CO-014-Catering-2023-Rev-1-12oct.xlsx' download>
              <img src='/FORMATO-GENERAL-DE-CONTRATACION-A-EXPOSITORES.webp' alt='Kit de Banquetes' className='w-100' />
            </a>
            <p className='fw-bold fs-4'>
              {t('ExhibitorServicies.contact')}
            </p>
          </Col>
          <Col md className='text-center'>
            <a className='p-3' href='/files/Formato-de-Contratacion-General-Servicios-Complementarios-2023.xlsx' download>
              <img src='/FORMATO-DE-CONTRATACION-DE-ALIMENTOS-Y-BEBIDAS.webp' alt='Kit de Banquetes' className='w-100' />
            </a>
            <p className='fw-bold fs-4'>
              {t('ExhibitorServicies.contract_food')}
            </p>
          </Col>
          <Col md className='text-center'>
            <a className='p-3' href='/files/Shipping-Instructions-SOLARpower.pdf' target='_blank'>
              <img src='/instrucciones_de_embarque.webp' alt='Kit de Banquetes' className='w-100' />
            </a>
            <p className='fw-bold fs-4'>
              {t('ExhibitorServicies.instructions')}
            </p>
          </Col>
        </Row>

      </Container>
    </>
  )
}
