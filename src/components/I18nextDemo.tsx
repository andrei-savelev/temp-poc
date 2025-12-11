import { useTranslation } from 'react-i18next';
import { DemoProps } from '../types';
import { getNounWithCountAndCase, articleLemma, replyLemma, Case } from '../russianNouns';
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
  const scenario4 = t('restore_all_articles');
  const scenario5 = t('restore_single_article');

  // Complex multi-noun scenarios using hybrid approach (translation keys + russian-nouns-js)
  const buildComplexScenario = (count: number) => {
    const articleAccusative = getNounWithCountAndCase(articleLemma, count, Case.ACCUSATIVE);
    const replyGenitive = getNounWithCountAndCase(replyLemma, count, Case.GENITIVE);
    return `${t('restore_verb')} ${count} ${articleAccusative} ${t('and_moreover')} ${t('view_verb')} ${count} ${replyGenitive} ${t('from_total')} ${t('and_reply_to')} ${count} ${replyGenitive}`;
  };

  const scenario6 = buildComplexScenario(1);
  const scenario7 = buildComplexScenario(2);
  const scenario8 = buildComplexScenario(5);

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
      <TextBlock label="Сценарий 4" text={scenario4} />
      <TextBlock label="Сценарий 5" text={scenario5} />
      <TextBlock label="Сценарий 6" text={scenario6} />
      <TextBlock label="Сценарий 7" text={scenario7} />
      <TextBlock label="Сценарий 8" text={scenario8} />
      <TextBlock label="Авторство" text={authorText} />
      <TextBlock label="Просмотр ответов" text={replyText} />
    </div>
  );
};

export default I18nextDemo;
