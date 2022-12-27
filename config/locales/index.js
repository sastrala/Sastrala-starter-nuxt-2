import id from './id.json'
import en from './en.json'

export default {
  locales: [
    {
      code: 'id',
      name: 'Indonesia',
    },
    {
      code: 'en',
      name: 'English',
    },
  ],
  strategy: 'no_prefix',
  defaultLocale: 'id',
  vueI18nLoader: true,
  vueI18n: {
    fallbackLocale: 'id',
    messages: { id, en },
  },
}
