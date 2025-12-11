import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      restore_articles_one: 'Восстановить {{count}} статью?',
      restore_articles_few: 'Восстановить {{count}} статьи?',
      restore_articles_many: 'Восстановить {{count}} статей?',
      restore_articles_with_total: 'Восстановить {{count}} из {{total}} статей?',
      created_male: 'Создал {{author}} {{date}}',
      created_female: 'Создала {{author}} {{date}}',
      view_replies_one: 'Посмотреть {{count}} ответ',
      view_replies_few: 'Посмотреть {{count}} ответа',
      view_replies_many: 'Посмотреть {{count}} ответов',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ru',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
