import { Container } from 'react-bootstrap'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import './Toolkit.css'
export function Toolkit () {
  return (
    <>
      <section className='bg-secondary-text pt-5 pb-5 mt-5 mb-5'>
        <Container>
          <i>SOLAR + STORAGE MEXICO</i>
          <p className='fw-bold fs-2'>Toolkit</p>
        </Container>
      </section>
      <Container className='toollkit'>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >

          <a
            data-src='/LinkedIn_ENG_SPM2024.webp'
            className='img-gallery'
          >
            <p className='text-center'>Linkedin</p>
            <img
              src='/LinkedIn_ENG_SPM2024.webp'
              className='w-100 p-2'
              loading='lazy'
            />
          </a>
          <a
            data-src='/Twitter_SPM2024_ESP-scaled.webp'
            className='img-gallery'
          >
            <p className='text-center'>Twitter</p>
            <img
              src='/Twitter_SPM2024_ESP-scaled.webp'
              className='w-100 p-2'
              loading='lazy'
            />
          </a>
          <a
            data-src='/Facebook_ESP_SPM2024-scaled.webp'
            className='img-gallery'
          >
            <p className='text-center'>Facebook</p>
            <img
              src='/Facebook_ESP_SPM2024-scaled.webp'
              className='w-100 p-2'
              loading='lazy'
            />
          </a>
          <a
            data-src='/Sigue_SSM2024.webp'
            className='img-gallery'
          >
            <p className='text-center'>Síguenos</p>
            <img
              src='/Sigue_SSM2024.webp'
              className='w-100 p-2'
              loading='lazy'
            />
          </a>
          <a
            data-src='/Expositores-SPM2024.webp'
            className='img-gallery'
          >
            <p className='text-center'>Expositor Confirmado</p>
            <img
              src='/Expositores-SPM2024.webp'
              className='w-100 p-2'
              loading='lazy'
            />
          </a>
          <a
            data-src='/AccesoCortesia_SPM2024.webp'
            className='img-gallery'
          >
            <p className='text-center'>Acceso de Cortesía</p>
            <img
              src='/AccesoCortesia_SPM2024.webp'
              className='w-100 p-2'
              loading='lazy'
            />
          </a>
        </LightGallery>
      </Container>
    </>
  )
}
