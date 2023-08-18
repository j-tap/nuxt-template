export default {
  strategy: 'no_prefix',
  langDir: 'locales',
  vueI18nLoader: true,
  globalInjection: true,
  defaultLocale: 'ru-RU',
  locales: [
    {
      code: 'en',
      name: 'En',
      dir: 'ltr',
      iso: 'en-US',
      file: 'en-US.js'
    },
    {
      code: 'ru',
      name: 'Ru',
      dir: 'ltr',
      iso: 'ru-RU',
      file: 'ru-RU.js'
    },
  ],
  vueI18n: './config/i18n/i18n.config.js'
}
