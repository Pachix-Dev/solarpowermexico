import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../hooks/useLanguage'

export function Rates () {
  const { t } = useTranslation()
  const { stateLang } = useLanguage()
  return (
    <>
      <section className='bg-secondary-text pt-5 pb-5 mt-5 mb-5'>
        <Container>
          <i>SOLAR + STORAGE MEXICO</i>
          <p className='fw-bold fs-2'>{t('menu.submenu_2.option_10')} 2024</p>
        </Container>
      </section>
      <Container>
        {
        stateLang === 'en'
          ? <img src='/solar_tarifas_2024_en.webp' alt='tarifas' className='w-100' />
          : <img src='/solar_tarifas_2024_es.webp' alt='tarifas' className='w-100' />
        }
      </Container>
    </>
  )
}
