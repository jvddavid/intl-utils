const locales = [
  'en-US',
  'pt-BR',
  'es-ES',
  'fr-FR',
  'de-DE',
  'it-IT',
  'ja-JP',
  'ko-KR',
  'zh-CN',
  'zh-TW',
  'ru-RU',
  'tr-TR',
  'ar-SA',
  'hi-IN',
  'bn-BD',
  'pa-IN',
  'te-IN',
  'ta-IN',
  'ml-IN',
] as const

export type Locale = typeof locales[number]

export { locales }
