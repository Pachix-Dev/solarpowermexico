import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export function AboutReEvents() {
  const { t } = useTranslation()
  return (
    <section className='mt-5 pt-5 pb-5 bg-secondary-text'>
      <Container>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='fw-bold fs-3'>{t('AboutReEvents.title')}</p>
          <a href='https://re-plus.events' target='_blank' rel='noreferrer'>
            <img
              src='/RE_Events_orange.webp'
              alt='repluslogo'
              width={106}
              height={85}
            />
          </a>
        </div>
        <p
          className='mt-5'
          dangerouslySetInnerHTML={{ __html: t('AboutReEvents.description') }}
        />
      </Container>
    </section>
  )
}
