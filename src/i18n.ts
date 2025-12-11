import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ru: {
    translation: {
      restore_articles_one: 'Восстановить {{count}} статью?',
      restore_articles_few: 'Восстановить {{count}} статьи?',
      restore_articles_many: 'Восстановить {{count}} статей?',
      restore_articles_with_total: 'Восстановить {{count}} из {{total}} статей?',
      restore_all_articles: 'Восстановить все статьи',
      restore_single_article: 'Восстановить статью',
      created_male: 'Создал {{author}} {{date}}',
      created_female: 'Создала {{author}} {{date}}',
      view_replies_one: 'Посмотреть {{count}} ответ',
      view_replies_few: 'Посмотреть {{count}} ответа',
      view_replies_many: 'Посмотреть {{count}} ответов',
      // Complex scenario verb and connector phrases (no nouns)
      restore_verb: 'Восстановить',
      and_moreover: 'и к тому же',
      view_verb: 'посмотреть',
      from_total: 'из общего числа',
      and_reply_to: 'и ответить на',
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
