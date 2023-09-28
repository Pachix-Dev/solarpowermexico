import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export function useLanguage () {
  const { i18n } = useTranslation()
  const [stateLang, setStateLang] = useState(i18n.language)

  const handleLanguageChange = () => {
    setStateLang(i18n.language)
  }

  useEffect(() => {
    i18n.on('languageChanged', handleLanguageChange)
    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [])

  return { stateLang }
}
