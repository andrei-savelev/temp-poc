import { DemoProps } from '../types';
import { getNounWithCount, articleLemma, replyLemma } from '../russianNouns';
import TextBlock from './TextBlock';

const RussianNounsDemo: React.FC<DemoProps> = ({
  replyCount,
  authorGender,
  authorName,
  dateTime
}) => {
  // Three static article restoration scenarios
  const scenario1 = `Восстановить 6 из 11 статей?`;
  const scenario2Noun = getNounWithCount(articleLemma, 1);
  const scenario2 = `Восстановить 1 ${scenario2Noun}?`;
  const scenario3Noun = getNounWithCount(articleLemma, 3);
  const scenario3 = `Восстановить 3 ${scenario3Noun}?`;

  // Author attribution with gender-based verb
  const createdVerb = authorGender === 'male' ? 'Создал' : 'Создала';
  const authorText = `${createdVerb} ${authorName} ${dateTime}`;

  // Reply counter
  const replyNoun = getNounWithCount(replyLemma, replyCount);
  const replyText = `Посмотреть ${replyCount} ${replyNoun}`;

  return (
    <div className="demo-column">
      <h2>russian-nouns-js</h2>
      <TextBlock label="Сценарий 1" text={scenario1} />
      <TextBlock label="Сценарий 2" text={scenario2} />
      <TextBlock label="Сценарий 3" text={scenario3} />
      <TextBlock label="Авторство" text={authorText} />
      <TextBlock label="Просмотр ответов" text={replyText} />
    </div>
  );
};

export default RussianNounsDemo;
