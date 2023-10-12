import { Container } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { useCountdown } from '../hooks/useCountDown'

export function CounterDown () {
  const { t } = useTranslation()
  const { days, hours, minutes, seconds } = useCountdown('17 april 2024 19:00:00')

  if (days + hours + minutes + seconds <= 0) {
    return <span />
  } else {
    return (
      <Container className='pt-5 mt-5 text-center'>
        <div className='counterdown-timer d-flex justify-content-center'>
          <div className='timer-numbers'>
            <span>{days}</span>
            <p className='timer-text'>
              {t('counterDown.days')}
            </p>
          </div>
          <div className='timer-numbers'>
            <span>{hours}</span>
            <p className='timer-text'>
              {t('counterDown.hours')}
            </p>
          </div>
          <div className='timer-numbers'>
            <span>{minutes}</span>
            <p className='timer-text'>
              {t('counterDown.minutes')}
            </p>
          </div>

          <div className='timer-numbers'>
            <span>{seconds}</span>
            <p className='timer-text'>
              {t('counterDown.seconds')}
            </p>
          </div>
        </div>
      </Container>
    )
  }
}
