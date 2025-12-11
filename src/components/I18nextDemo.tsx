import { useTranslation } from 'react-i18next';
import { DemoProps } from '../types';
import TextBlock from './TextBlock';

const I18nextDemo: React.FC<DemoProps> = ({
  replyCount,
  authorGender,
  authorName,
  dateTime
}) => {
  const { t } = useTranslation();

  // Three static article restoration scenarios
  const scenario1 = t('restore_articles_with_total', { count: 6, total: 11 });
  const scenario2 = t('restore_articles', { count: 1 });
  const scenario3 = t('restore_articles', { count: 3 });

  // Author attribution with gender context
  const authorText = authorGender === 'male'
    ? t('created_male', { author: authorName, date: dateTime })
    : t('created_female', { author: authorName, date: dateTime });

  // Reply counter
  const replyText = t('view_replies', { count: replyCount });

  return (
    <div className="demo-column">
      <h2>react-i18next</h2>
      <TextBlock label="Сценарий 1" text={scenario1} />
      <TextBlock label="Сценарий 2" text={scenario2} />
      <TextBlock label="Сценарий 3" text={scenario3} />
      <TextBlock label="Авторство" text={authorText} />
      <TextBlock label="Просмотр ответов" text={replyText} />
    </div>
  );
};

export default I18nextDemo;
