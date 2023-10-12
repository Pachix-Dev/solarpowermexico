import { Col, Container, Ratio, Row } from 'react-bootstrap'
import { useLanguage } from '../hooks/useLanguage'

export function Videos () {
  const { stateLang } = useLanguage()
  return (
    <>
      <section className='mt-5 pt-5'>
        <Container>
          <p className='fw-bold fs-1 text-center'>VIDEOS SPM 2019</p>
          {
            stateLang === 'en'
              ? <Row className='mt-5 mb-5'>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/cNiMY30oqzI'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/6nBz77engic'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/lAUZ8XF3qKc'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/V8mH9T_h3HU'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/IhZZAsJ1B4U'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/xOf6oTJTmrE'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/TmqEIvbtTwM'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/hQ_tnC8YGhM'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/2SKuGxrpmZ4'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/VnpRlzQ_ris'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/74-ZYl3o980'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/k05js9kBoyQ'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/uB4KxTjGIzQ'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
              </Row>
              : <Row className='mt-5 mb-5'>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/cNiMY30oqzI'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/IhZZAsJ1B4U'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/xOf6oTJTmrE'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/TmqEIvbtTwM'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/hQ_tnC8YGhM'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/2SKuGxrpmZ4'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/VnpRlzQ_ris'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/uB4KxTjGIzQ'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/uww4Fy5qWpI'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/fnO1Y-Sfolg'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/MbR_wVBQmAk'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/oQLBnX0CQlM'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                <Col md={4} className='mt-3'>
                  <Ratio aspectRatio='16x9'>
                    <iframe
                      src='https://www.youtube-nocookie.com/embed/4EhokXvwTCo'
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowFullScreen
                    />
                  </Ratio>
                </Col>
                </Row>
          }

        </Container>
      </section>
    </>
  )
}
