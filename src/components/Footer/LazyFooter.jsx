import { Suspense, lazy } from 'react'
import { useNearScreen } from '../hooks/useNearScreen'

const Footer = lazy(() => import('./Footer'))

export default function LazyFooter () {
  const [isNear, fromRef] = useNearScreen()
  return (
    <div className='footerweb' ref={fromRef}>
      <Suspense fallback={<p>cargando...</p>}>
        {isNear ? <Footer /> : ''}
      </Suspense>
    </div>
  )
}
