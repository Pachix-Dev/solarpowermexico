import { Col, Container, NavDropdown, Row } from 'react-bootstrap'
import './Footer.css'
import { useTranslation } from 'react-i18next'
import { Subscribe } from '../Suscribe/Suscribe'
export function Footer () {
  const { t, i18n } = useTranslation()
  return (
    <footer className='mt-5'>
      <Container fluid>
        <img src='/plecaSolar.webp' className='w-100' alt='Italian Exhibition Group' loading='lazy' />
      </Container>
      <Container>
        <div className='footer-socialmedia mt-5'>
          <a href='https://www.facebook.com/solar.storage.mexico' target='_blank' rel='noreferrer'>
            <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <title>Facebook</title>
              <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
            </svg>
          </a>
          <a href='https://www.linkedin.com/company/solarstoragemexico/' target='_blank' rel='noreferrer'>
            <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <title>LinkedIn</title>
              <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
            </svg>
          </a>
          <a href='https://twitter.com/SolarPowerMx' target='_blank' rel='noreferrer' aria-label='Twitter Link'>
            <svg viewBox='0 0 24 24' aria-hidden='true'>
              <title>Twitter</title>
              <g>
                <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
              </g>
            </svg>
          </a>
          <a href='https://www.instagram.com/solarstoragemx/' target='_blank' rel='noreferrer'>
            <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <title>Instagram</title>
              <path d='M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' />
            </svg>
          </a>
        </div>
        <Row className='mt-5'>
          <Col md>
            <p><strong>SOLAR + STORAGE MEXICO 2024</strong></p>
            <p>17 – 19 de Abril, 2024<br />
              Expo Guadalajara,<br />
              Guadalajara, Jalisco, México
            </p>
          </Col>
          <Col md>
            <p>
              <strong>Directora de Proyecto Solar<br />
                + Storage México
              </strong><br />
              Sandra Elías<br />
              Tel. +52 55 7028 3335 ext. 806<br />
              <a href='mailto:sandra.elias@hfmexico.mx'>sandra.elias@hfmexico.mx</a>
            </p>
            <p>
              <strong>Patrocinios y Experiencias</strong><br />
              Samuel Ramírez<br />
              Tel. +52 (55) 70 28 33 35 ext. 806<br />
              <a href='mailto:samuel.ramirez@hfmexico.mx'>samuel.ramirez@hfmexico.mx</a>
            </p>
            <p>
              <strong>Ejecutivo de Ventas</strong><br />
              Marissa Franco Zermeño<br />
              Tel. +52 55 7028 3335 ext. 806<br />
              <a href='mailto:marissa.franco@hfmexico.mx'>marissa.franco@hfmexico.mx</a>
            </p>
          </Col>
          <Col md>
            <Subscribe />
          </Col>
        </Row>
        <div className='mt-5 footer-language d-flex'>
          <strong>Italian German Exhibition Company</strong>
          <div className='language-option-footer ms-auto'>
            <NavDropdown
              className='language-dropdown'
              title={
                <>
                  <svg height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
                    <path clipRule='evenodd' d='m7.10319 18.721c1.44393.8125 3.11001 1.2768 4.88431 1.279-.2692 0-.4875.2183-.4875.4875v.5125c0 .5523-.4477 1-1 1h-3c-.27614 0-.5.2239-.5.5s.22386.5.50001.5h8.99999c.2761 0 .5-.2239.5-.5s-.2239-.5-.5-.5h-3c-.5523 0-1-.4477-1-1v-.5125c0-.2692-.2183-.4875-.4875-.4875 5.5171-.0068 9.9875-4.4813 9.9875-10.00001 0-3.6579-1.964-6.85708-4.895-8.60058-.231-.13742-.5264-.05181-.6608.18098-.1417.24537-.0501.55823.1926.70441 2.6145 1.57468 4.3632 4.44072 4.3632 7.71519 0 4.97061-4.0294 9.00001-9 9.00001-1.5829 0-3.07031-.4086-4.36257-1.1262-.248-.1377-.56522-.0607-.70705.1849-.13422.2325-.06112.5307.17281.6623zm4.89681-.721c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm0-1c2.4116 0 4.5384-1.2195 5.7973-3.0756l-1.7255-.9962c-1.248 1.9812-2.9042 3.4124-4.5242 4.0574.1496.0096.3004.0144.4524.0144zm6.002-3.3957c.0436-.0724.0859-.1458.1269-.2199zm-1.4302-1.5421 1.7263.9967c.4496-.9242.7019-1.9621.7019-3.0589 0-1.43763-.4334-2.77403-1.1766-3.8857.2517 1.72562-.1596 3.87609-1.2516 5.9479zm-.6659-7.8275c1.4232 1.29546 1.3536 4.36603-.2005 7.3273l-3.0224-1.745zm-.866-.5-3.2229 5.5823-3.02242-1.74497c1.78752-2.8265 4.41182-4.4221 6.24532-3.83733zm-3.7229 6.4483-3.02242-1.74495c-1.55404 2.96125-1.62368 6.03175-.20051 7.32725zm1.1353-7.16862c-1.6199.64499-3.27617 2.07624-4.52413 4.05743l-1.72548-.99621c1.25887-1.85604 3.38567-3.0756 5.79731-3.0756.152 0 .3028.00484.4523.01438zm-6.5821 3.60277c.04159-.07519.08451-.14953.12875-.22299zm1.55798 1.32068-1.72627-.99665c-.44966.92412-.70191 1.96201-.70191 3.05882 0 1.4376.43339 2.774 1.17664 3.8857-.25177-1.7256.15954-3.8761 1.25154-5.94787zm7.77722 4.49017-3.0224-1.745-3.22291 5.5823c1.83351.5847 4.45781-1.0108 6.24531-3.8373z' fillRule='evenodd' />
                  </svg> {i18n.language === 'es' ? 'ES' : 'EN'}
                </>
                      }
            >
              <NavDropdown.Item as='button' onClick={() => i18n.changeLanguage('es')}>
                ES
              </NavDropdown.Item>
              <NavDropdown.Item as='button' onClick={() => i18n.changeLanguage('en')}>
                EN
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </div>
        <div className='pt-5 pb-5'>
          <a href='https://hfmexico.mx/aviso-de-privacidad/' target='_blank' rel='noreferrer'>{t('footer.privacy_policy')}</a> | <a href='/contact'>{t('footer.contact')}</a>
        </div>
      </Container>
    </footer>
  )
}
