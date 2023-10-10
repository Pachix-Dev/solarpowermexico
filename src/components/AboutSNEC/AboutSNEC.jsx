import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export function AboutSNEC () {
  const { t } = useTranslation()
  return (
    <section className='mt-5 pt-5 pb-5 bg-secondary-text'>
      <Container>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='fw-bold fs-3'>
            {t('AboutSNEC.title')}
          </p>
          <a href='http://www.snec.org.cn/' target='_blank' rel='noreferrer'>
            <img src='/snecPower.webp' alt='repluslogo' width={163} height={124} />
          </a>
        </div>
        <p className='mt-5' dangerouslySetInnerHTML={{ __html: t('AboutSNEC.description') }} />
      </Container>
    </section>
  )
}
