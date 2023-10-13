import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

export function Gallery () {
  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
    >
      <span
        data-src='/gallery/gallery1.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery1.webp'
          className='w-100 p-2 img-gallery'
          width={300}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </span>
      <span
        data-src='/gallery/gallery2.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery2.webp'
          className='p-2 img-gallery'
          width={300}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </span>
      <span
        data-src='/gallery/gallery3.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery3.webp'
          className='p-2 img-gallery'
          width={300}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </span>
      <span
        data-src='/gallery/gallery4.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery4.webp'
          className='p-2 img-gallery'
          width={300}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </span>
      <span
        data-src='/gallery/gallery5.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery5.webp'
          className='p-2 img-gallery'
          width={300}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </span>
      <span
        data-src='/gallery/gallery6.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery6.webp'
          className='p-2 img-gallery'
          width={300}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </span>
      <span
        data-src='/gallery/gallery7.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery7.webp'
          className='p-2 img-gallery'
          width={300}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </span>
      <span
        data-src='/gallery/gallery8.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery8.webp'
          className='p-2 img-gallery'
          width={300}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </span>
    </LightGallery>
  )
}
