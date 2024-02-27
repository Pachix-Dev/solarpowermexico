import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Home.css'

export function Header() {
  const { t, i18n } = useTranslation()
  return (
    <header>
      <nav className='my-5 py-5 home-solar-submenu'>
        <Link to='/conference-program'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            width={40}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z'
            />
          </svg>
          {t('home.program')}
        </Link>
        <a
          href={
            i18n.language === 'en'
              ? '/files/SOLAR-STORAGE-MEXICO-SPONSORSHIPS-V6-ENG.pdf'
              : '/files/SOLAR-STORAGE-MEXICO-SPONSORSHIPS-V6.pdf'
          }
          target='_blank'
          rel='noreferrer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            width={50}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z'
            />
          </svg>
          {t('home.sponsorship')}
        </a>
        <a
          href={
            i18n.language === 'en'
              ? '/files/RESULTS-REPORT-SSM-2023-ENG.pdf'
              : '/files/REPORTE-DE-RESULTADOS-SSM-2023-ESP.pdf'
          }
          target='_blank'
          rel='noreferrer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            width={30}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6'
            />
          </svg>
          {t('home.results')}
        </a>
        <a
          href={
            i18n.language === 'en'
              ? '/files/FACTSHEET-SOLAR-STORAGE-MEXICO-EN-v221123-ACv2.pdf'
              : '/files/SOLAR-STORAGE-MEXICO-FACTSHEET-ESPAÑOLv6.pdf'
          }
          target='_blank'
          rel='noreferrer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            width={30}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
            />
          </svg>
          Factsheet 2024
        </a>
        <a
          href='https://spmx24.mapyourshow.com/8_0/exhview/index.cfm'
          target='_blank'
          rel='noreferrer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            width={30}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z'
            />
          </svg>{' '}
          {t('home.floorplan')}
        </a>
        <a
          href='/files/Directorio-SSM-2023.pdf'
          target='_blank'
          rel='noreferrer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            width={40}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
            />
          </svg>{' '}
          {t('home.exhibitor_directory')}
        </a>
        <Link to='/hotels'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            width={40}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'
            />
          </svg>

          {t('home.hotels')}
        </Link>
        <a
          href='https://hfmexico.mx/ecomondo/'
          aria-label='ecomondo'
          style={{ padding: 0, background: 'none' }}
          target='_blank'
          rel='noreferrer'
        >
          <img
            width={150}
            height={57}
            src='/botone-ECO-esp.webp'
            alt='ecomondo'
          />
        </a>
      </nav>
      <div className='mt-5 text-center'>
        <Link
          to='/hotels'
          target='_blank'
          className='button_hotels text-white text-decoration-none px-3 py-4 border border-light rounded-3 fs-5 fw-bold'
        >
          <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 19.25C1.58579 19.25 1.25 19.5858 1.25 20C1.25 20.4142 1.58579 20.75 2 20.75V19.25ZM22 20.75C22.4142 20.75 22.75 20.4142 22.75 20C22.75 19.5858 22.4142 19.25 22 19.25V20.75ZM4.97222 20C4.97222 16.1687 8.11154 13.05 12 13.05V11.55C7.29736 11.55 3.47222 15.3261 3.47222 20H4.97222ZM12 13.05C15.8885 13.05 19.0278 16.1687 19.0278 20H20.5278C20.5278 15.3261 16.7026 11.55 12 11.55V13.05ZM9.97222 11.475C9.97222 11.0646 10.1898 10.6401 10.5942 10.2963C10.9999 9.95147 11.5258 9.75 12 9.75V8.25C11.1337 8.25 10.2707 8.60258 9.62263 9.15348C8.97322 9.70554 8.47222 10.5185 8.47222 11.475H9.97222ZM12 9.75C12.4742 9.75 13.0001 9.95147 13.4058 10.2963C13.8102 10.6401 14.0278 11.0646 14.0278 11.475H15.5278C15.5278 10.5185 15.0268 9.70554 14.3774 9.15348C13.7293 8.60258 12.8663 8.25 12 8.25V9.75ZM14.0278 11.475V12.85H15.5278V11.475H14.0278ZM8.47222 11.475V12.85H9.97222V11.475H8.47222ZM2 20.75H22V19.25H2V20.75Z" fill="#ffffff"></path> <path d="M12 5V4M16.5 6.06219L15.5622 7M8.43781 7L7.5 6.06218" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          <span className='text-uppercase'> {t("home.button_hotels")}</span>
        </Link>
      </div>
    </header>
  )
}
