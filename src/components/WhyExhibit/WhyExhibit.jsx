import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../hooks/useLanguage'

export function WhyExhibit () {
  const { t } = useTranslation()
  const { stateLang } = useLanguage()
  return (
    <>
      <section className='bg-secondary-text pt-5 pb-5 mt-5 mb-5'>
        <Container>
          <i>SOLAR + STORAGE MEXICO</i>
          <p className='fw-bold fs-2' dangerouslySetInnerHTML={{ __html: t('menu.submenu_2.option_2') }} />
        </Container>
      </section>
      <Container>
        {
        stateLang === 'es'
          ? <img src='/BeneficiosExpositor.webp' alt='beneficios-expositor' className='w-100' />
          : <img src='/WhyExhibit.webp' alt='beneficios-expositor' className='w-100' />
        }
      </Container>
    </>
  )
}
