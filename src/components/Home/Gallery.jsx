import React from 'react'
import LightGallery from 'lightgallery/react'
import 'lightgallery/css/lightgallery.css'
import 'lightgallery/css/lg-zoom.css'
import 'lightgallery/css/lg-thumbnail.css'
import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'

const images = [
  { src: '/gallery/gallery1.webp', width: 300, height: 200 },
  { src: '/gallery/gallery2.webp', width: 300, height: 200 },
  { src: '/gallery/gallery3.webp', width: 300, height: 200 },
  { src: '/gallery/gallery4.webp', width: 300, height: 200 },
  { src: '/gallery/gallery5.webp', width: 300, height: 200 },
  { src: '/gallery/gallery6.webp', width: 300, height: 200 },
  { src: '/gallery/gallery7.webp', width: 300, height: 200 },
  { src: '/gallery/gallery8.webp', width: 300, height: 200 }

]

const Gallery = () => {
  return (
    <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
      {images.map((image, index) => (
        <figure key={index} data-src={image.src} className='gallery-item'>
          <img
            src={image.src}
            className='img-gallery'
            width={image.width}
            height={image.height}
            loading='lazy'
            alt='Energy Night 2023'
          />
        </figure>
      ))}
    </LightGallery>
  )
}

export { Gallery }
