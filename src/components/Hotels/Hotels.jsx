import { Button, Card, ListGroup } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { hotels } from '../../constans_hotels'
import './Hotels.css'

export function Hotels () {
  const { t } = useTranslation()
  return (
    <>
      <div className='mt-5 container'>
        <h1>{t('home.hotels')}</h1>
        <p dangerouslySetInnerHTML={{ __html: t('hotels.description') }} />
        <div className='mt-5 hotels'>
          {hotels.map((hotel, index) => {
            return (
              <Card style={{ width: '18rem' }} key={index}>
                <Card.Img variant='top' src={hotel.src} height={280} className='object-fit-cover' />
                <Card.Body>
                  <Card.Title>{hotel.name}</Card.Title>
                  <Card.Text>
                    {hotel.address}<br />
                    <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' width={20}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3' />
                    </svg> {hotel.phone}
                  </Card.Text>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                  <ListGroup.Item>{t('hotels.rate')}{hotel.rate}</ListGroup.Item>
                  <ListGroup.Item>{hotel.email}</ListGroup.Item>
                  <ListGroup.Item>{t('hotels.code')} <strong>{hotel.code}</strong></ListGroup.Item>
                  <ListGroup.Item><img src='/walk_icon.webp' width={20} /> {hotel.time_walk}</ListGroup.Item>
                  <ListGroup.Item><img src='/car_icon.webp' width={20} /> {hotel.time_drive}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button href={hotel.link} target='_blank'>Reserva</Button>
                </Card.Body>
              </Card>
            )
          }
          )}
        </div>
      </div>
    </>
  )
}
