import { useState } from 'react';
import './i18n';
import ControlPanel from './components/ControlPanel';
import I18nextDemo from './components/I18nextDemo';
import RussianNounsDemo from './components/RussianNounsDemo';
import { Gender } from './types';
import './App.css';

function App() {
  const [articleCount, setArticleCount] = useState<number>(5);
  const [replyCount, setReplyCount] = useState<number>(12);
  const [authorGender, setAuthorGender] = useState<Gender>('male');

  const totalArticles = 11;
  const authorName = 'Андрей Савельев';
  const dateTime = '15 июля 2025 в 12:43';

  return (
    <div className="app">
      <header>
        <h1>Сравнение локализации React</h1>
      </header>

      <ControlPanel
        articleCount={articleCount}
        replyCount={replyCount}
        authorGender={authorGender}
        onArticleCountChange={setArticleCount}
        onReplyCountChange={setReplyCount}
        onGenderChange={setAuthorGender}
      />

      <div className="comparison-container">
        <I18nextDemo
          articleCount={articleCount}
          totalArticles={totalArticles}
          replyCount={replyCount}
          authorGender={authorGender}
          authorName={authorName}
          dateTime={dateTime}
        />
        
        <RussianNounsDemo
          articleCount={articleCount}
          totalArticles={totalArticles}
          replyCount={replyCount}
          authorGender={authorGender}
          authorName={authorName}
          dateTime={dateTime}
        />
      </div>
    </div>
  );
}

export default App;
