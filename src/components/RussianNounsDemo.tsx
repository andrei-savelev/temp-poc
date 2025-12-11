import { DemoProps } from '../types';
import { getNounWithCount, articleLemma, replyLemma } from '../russianNouns';
import TextBlock from './TextBlock';

const RussianNounsDemo: React.FC<DemoProps> = ({
  articleCount,
  totalArticles,
  replyCount,
  authorGender,
  authorName,
  dateTime
}) => {
  // Article restoration text
  const articleNoun = getNounWithCount(articleLemma, articleCount);
  const articleText = articleCount === totalArticles
    ? `Восстановить ${articleCount} ${articleNoun}?`
    : `Восстановить ${articleCount} из ${totalArticles} статей?`;

  // Author attribution with gender-based verb
  const createdVerb = authorGender === 'male' ? 'Создал' : 'Создала';
  const authorText = `${createdVerb} ${authorName} ${dateTime}`;

  // Reply counter
  const replyNoun = getNounWithCount(replyLemma, replyCount);
  const replyText = `Посмотреть ${replyCount} ${replyNoun}`;

  return (
    <div className="demo-column">
      <h2>russian-nouns-js</h2>
      <TextBlock label="Восстановление статей" text={articleText} />
      <TextBlock label="Авторство" text={authorText} />
      <TextBlock label="Просмотр ответов" text={replyText} />
    </div>
  );
};

export default RussianNounsDemo;
