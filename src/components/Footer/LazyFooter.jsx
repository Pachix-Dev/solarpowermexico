import { useNearScreen } from '../hooks/useNearScreen'
import { Footer } from './Footer'

export function LazyFooter () {
  const [show, ref] = useNearScreen()
  return (
    <div className='footerweb' ref={ref}>
      {show && <Footer />}
    </div>
  )
}
