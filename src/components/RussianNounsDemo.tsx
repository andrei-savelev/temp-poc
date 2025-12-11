import { DemoProps } from '../types';
import { getNounWithCount, getNounWithCountAndCase, articleLemma, replyLemma, Case } from '../russianNouns';
import TextBlock from './TextBlock';

const RussianNounsDemo: React.FC<DemoProps> = ({
  replyCount,
  authorGender,
  authorName,
  dateTime
}) => {
  // Three static article restoration scenarios
  const scenario1Noun = getNounWithCount(articleLemma, 6);
  const scenario1 = `Восстановить 6 из 11 ${scenario1Noun}?`;
  const scenario2Noun = getNounWithCount(articleLemma, 1);
  const scenario2 = `Восстановить 1 ${scenario2Noun}?`;
  const scenario3Noun = getNounWithCount(articleLemma, 3);
  const scenario3 = `Восстановить 3 ${scenario3Noun}?`;
  // Special cases using russian-nouns-js
  const scenario4Noun = getNounWithCountAndCase(articleLemma, 0, Case.ACCUSATIVE); // 0 for "all" case
  const scenario4 = `Восстановить все ${scenario4Noun}`;
  const scenario5Noun = getNounWithCountAndCase(articleLemma, 1, Case.ACCUSATIVE);
  const scenario5 = `Восстановить ${scenario5Noun}`;

  // Complex multi-noun scenarios with explicit case control
  const buildComplexScenario = (count: number) => {
    const articleAccusative = getNounWithCountAndCase(articleLemma, count, Case.ACCUSATIVE);
    const replyGenitive = getNounWithCountAndCase(replyLemma, count, Case.GENITIVE);
    return `Восстановить ${count} ${articleAccusative} и к тому же посмотреть ${count} ${replyGenitive} из общего числа и ответить на ${count} ${replyGenitive}`;
  };

  const scenario6 = buildComplexScenario(1);
  const scenario7 = buildComplexScenario(2);
  const scenario8 = buildComplexScenario(5);

  // Author attribution with gender-based verb
  const createdVerb = authorGender === 'male' ? 'Создал' : 'Создала';
  const authorText = `${createdVerb} ${authorName} ${dateTime}`;

  // Reply counter
  const replyNoun = getNounWithCount(replyLemma, replyCount);
  const replyText = `Посмотреть ${replyCount} ${replyNoun}`;

  return (
    <div className="demo-column">
      <h2>russian-nouns-js</h2>
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: 600 }}>Базовая плюрализация</h3>
      <TextBlock label="Сценарий 1" text={scenario1} />
      <TextBlock label="Сценарий 2" text={scenario2} />
      <TextBlock label="Сценарий 3" text={scenario3} />
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: 600 }}>Особые случаи</h3>
      <TextBlock label="Сценарий 4" text={scenario4} />
      <TextBlock label="Сценарий 5" text={scenario5} />
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: 600 }}>Сложные сценарии</h3>
      <TextBlock label="Сценарий 6" text={scenario6} />
      <TextBlock label="Сценарий 7" text={scenario7} />
      <TextBlock label="Сценарий 8" text={scenario8} />
      
      <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: 600 }}>Динамический контент</h3>
      <TextBlock label="Авторство" text={authorText} />
      <TextBlock label="Просмотр ответов" text={replyText} />
    </div>
  );
};

export default RussianNounsDemo;