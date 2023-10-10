import { useTranslation } from 'react-i18next'
import './GalleryPage.css'
import { Container } from 'react-bootstrap'
import { gallery2023, gallery2022, gallery2021, gallery2019 } from './constans_gallery'
import { GalleryYear } from './GalleryYear'

export function GallgeryPage () {
  const { t } = useTranslation()

  return (
    <>
      <Container className='galleryPage mt-5'>
        <h1 className='gallery-title'>{t('menu.submenu_5.option_1')} SSM 2023</h1>
        <GalleryYear year={gallery2023} />

        <h1 className='mt-5 gallery-title'>{t('menu.submenu_5.option_1')} SSM 2022</h1>
        <GalleryYear year={gallery2022} />

        <h1 className='mt-5 gallery-title'>{t('menu.submenu_5.option_1')} SSM 2021</h1>
        <GalleryYear year={gallery2021} />

        <h1 className='mt-5 gallery-title'>{t('menu.submenu_5.option_1')} SSM 2019</h1>
        <GalleryYear year={gallery2019} />
      </Container>
    </>
  )
}
