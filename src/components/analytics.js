// analytics.js

export function initializeGA () {
  window.dataLayer = window.dataLayer || []
  function gtag () {
    window.dataLayer.push(arguments)
  }

  gtag('js', new Date())
  gtag('config', 'G-6GJCSFD2EH')
}

export function logPageView () {
  window.dataLayer.push({
    event: 'page_view',
    page_path: window.location.pathname
  })
}

export function logEvent (eventCategory, eventAction, eventLabel) {
  window.dataLayer.push({
    event: 'event',
    event_category: eventCategory,
    event_action: eventAction,
    event_label: eventLabel
  })
}
