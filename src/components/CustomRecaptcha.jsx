import React, { Suspense, lazy, useRef, forwardRef, useImperativeHandle } from 'react'

const ReCAPTCHA = lazy(() => import('react-google-recaptcha'))

const CustomRecaptcha = forwardRef(({ sitekey, onChange, language }, ref) => {
  const captchaRef = useRef()

  // Expose methods to the parent through the forwarded ref
  useImperativeHandle(ref, () => ({
    getValue: () => {
      return captchaRef.current.getValue()
    },
    reset: () => {
      captchaRef.current.reset()
    }
  }))

  return (
    <Suspense fallback={<div>Loading reCAPTCHA...</div>}>
      <ReCAPTCHA sitekey={sitekey} ref={captchaRef} onChange={onChange} hl={language} />
    </Suspense>
  )
})

export { CustomRecaptcha }
