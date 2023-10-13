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
      <figure
        data-src='/gallery/gallery1.webp'
        className='gallery-item w-100 h-100'
      >
        <img
          src='/gallery/gallery1.webp'
          className='w-100 img-gallery'
          width={312}
          height={208}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </figure>
      <figure
        data-src='/gallery/gallery2.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery2.webp'
          className='img-gallery'
          width={300}
          height={200}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </figure>
      <figure
        data-src='/gallery/gallery3.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery3.webp'
          className='img-gallery'
          width={300}
          height={200.30}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </figure>
      <figure
        data-src='/gallery/gallery4.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery4.webp'
          className='img-gallery'
          width={300}
          height={200.30}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </figure>
      <figure
        data-src='/gallery/gallery5.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery5.webp'
          className='img-gallery'
          width={300}
          height={200.30}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </figure>
      <figure
        data-src='/gallery/gallery6.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery6.webp'
          className='img-gallery'
          width={300}
          height={200.30}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </figure>
      <figure
        data-src='/gallery/gallery7.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery7.webp'
          className='img-gallery'
          width={300}
          height={200}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </figure>
      <figure
        data-src='/gallery/gallery8.webp'
        className='gallery-item'
      >
        <img
          src='/gallery/gallery8.webp'
          className='img-gallery'
          width={300}
          height={168}
          loading='lazy'
          alt='Energy Night 2023'
        />
      </figure>
    </LightGallery>
  )
}
