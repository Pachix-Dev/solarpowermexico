import { Container, Tab, Tabs } from 'react-bootstrap'
import { programSolar } from '../../constans_program'
import { useTranslation } from 'react-i18next'
import './Program.css'
export function Program () {
  const { t } = useTranslation()
  return (
    <div className='program-solar'>
      <Container className='mt-5'>
        <a href='/files/SSM-2024-ENL-ESP-V8.pdf' target='_blank' className='fw-bold fs-2 text-decoration-none text-black'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={50}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M7.5 7.5h-.75A2.25 2.25 0 004.5 9.75v7.5a2.25 2.25 0 002.25 2.25h7.5a2.25 2.25 0 002.25-2.25v-7.5a2.25 2.25 0 00-2.25-2.25h-.75m-6 3.75l3 3m0 0l3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 012.25 2.25v7.5a2.25 2.25 0 01-2.25 2.25h-7.5a2.25 2.25 0 01-2.25-2.25v-.75' />
          </svg> Enlightenment Area
        </a>
        <Tabs
          defaultActiveKey='day1'
          id='fill-tab-example'
          className='mb-3 mt-5 pt-5'
        >
          <Tab
            eventKey='day1'
            title={
              <>
                <strong>{t('program.day')} 1<br />
                  {t('program.day_1')}, 17 {t('program.month')}
                </strong>
              </>
                }
          >
            {programSolar?.april_17.map((program, index) => {
              return (
                <div key={index} className='program-date-item d-flex align-items-center'>
                  <div style={{ width: '200px' }}>
                    <p>

                      <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg> {program.duration}
                      <strong>{program.hour}</strong>
                    </p>
                  </div>

                  <div className='d-flex align-items-center justify-content-between w-100'>
                    <div className='w-100'>
                      <h2>{program.name}</h2>
                    </div>
                  </div>
                </div>
              )
            })}
          </Tab>
          <Tab
            eventKey='day2'
            title={
              <>
                <strong>{t('program.day')} 2<br />
                  {t('program.day_2')}, 18 {t('program.month')}
                </strong>
              </>
                }
          >
            {programSolar?.april_18.map((program, index) => {
              return (
                <div key={index} className='program-date-item d-flex align-items-center'>
                  <div style={{ width: '200px' }}>
                    <p>
                      <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg> {program.duration}
                      <strong>{program.hour}</strong>
                    </p>
                  </div>
                  <div className='d-flex align-items-center justify-content-between w-100'>
                    <div className='w-100'>
                      <h2>{program.name}</h2>
                    </div>
                  </div>
                </div>
              )
            })}
          </Tab>
          <Tab
            eventKey='day3'
            title={
              <>
                <strong>{t('program.day')} 3<br />
                  {t('program.day_3')}, 19 {t('program.month')}
                </strong>
              </>
                }
          >
            {programSolar?.april_19.map((program, index) => {
              return (
                <div key={index} className='program-date-item d-flex align-items-center'>
                  <div style={{ width: '200px' }}>
                    <p>
                      <svg width={20} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                      </svg> {program.duration}
                      <strong>{program.hour}</strong>
                    </p>
                  </div>
                  <div className='d-flex align-items-center justify-content-between w-100'>
                    <div>
                      <h2>{program.name}</h2>
                    </div>
                  </div>
                </div>
              )
            })}
          </Tab>
        </Tabs>
      </Container>
    </div>
  )
}
