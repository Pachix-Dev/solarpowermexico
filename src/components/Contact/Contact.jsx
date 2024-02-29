import { Col, Container, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import './Contact.css'
import { ContactForm } from './ContactForm'
export function Contact () {
  const { t } = useTranslation()
  return (
    <>
      <section className='bg-contact pt-5 pb-5'>
        <Container>
          <p className='fw-bold fs-2 text-center'>{t('footer.contact')}</p>
          <Row className='mt-5'>
            <Col md>
              <img src='/samuel-ramirez.webp' alt='Samuel Ramirez' width={120} height={120} className='rounded-circle' />
              <p className='mt-3 fw-bold fs-5'>México, Centro & Sudamérica</p>
              <p className='m-0'>Samuel Ramírez</p>
              <a href='mailto:samuel.ramirez@igeco.mx'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='#1d7e7a' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={20}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' />
                </svg> samuel.ramirez@igeco.mx
              </a>
            </Col>
            <Col md>
              <img src='/raymanWu.webp' alt='Rayman Wu' width={120} height={120} className='rounded-circle' />
              <p className='mt-3 fw-bold fs-5'>China</p>
              <p className='m-0'>Rayman Wu</p>
              <a href='mailto:info@snec.org.cn'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='#1d7e7a' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={20}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' />
                </svg>  info@snec.org.cn
              </a>
            </Col>
            <Col md>
              <img src='/Pamela-velazquez.webp' alt='Pamela Velázquez' width={120} height={120} className='rounded-circle' />
              <p className='mt-3 fw-bold fs-5'>USA</p>
              <p className='m-0'>Pamela Velazco</p>
              <a href='mailto:pvelazco@re-plus.com'>
                <svg xmlns='http://www.w3.org/2000/svg' fill='#1d7e7a' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={20}>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' />
                </svg> pvelazco@re-plus.com
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <ContactForm />
      </Container>
    </>
  )
}
