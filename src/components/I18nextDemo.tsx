import { useTranslation } from 'react-i18next';
import { DemoProps } from '../types';
import TextBlock from './TextBlock';

const I18nextDemo: React.FC<DemoProps> = ({
  articleCount,
  totalArticles,
  replyCount,
  authorGender,
  authorName,
  dateTime
}) => {
  const { t } = useTranslation();

  // Article restoration text
  const articleText = articleCount === totalArticles
    ? t('restore_articles', { count: articleCount })
    : t('restore_articles_with_total', { count: articleCount, total: totalArticles });

  // Author attribution with gender context
  const authorText = authorGender === 'male'
    ? t('created_male', { author: authorName, date: dateTime })
    : t('created_female', { author: authorName, date: dateTime });

  // Reply counter
  const replyText = t('view_replies', { count: replyCount });

  return (
    <div className="demo-column">
      <h2>react-i18next</h2>
      <TextBlock label="Восстановление статей" text={articleText} />
      <TextBlock label="Авторство" text={authorText} />
      <TextBlock label="Просмотр ответов" text={replyText} />
    </div>
  );
};

export default I18nextDemo;
