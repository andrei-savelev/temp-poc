import { useState } from 'react';
import './i18n';
import ControlPanel from './components/ControlPanel';
import I18nextDemo from './components/I18nextDemo';
import RussianNounsDemo from './components/RussianNounsDemo';
import { Gender } from './types';
import './App.css';

function App() {
  const [replyCount, setReplyCount] = useState<number>(12);
  const [authorGender, setAuthorGender] = useState<Gender>('male');

  const authorName = authorGender === 'male' ? 'Андрей Савельев' : 'Наталья Николаева';
  const dateTime = '15 июля 2025 в 12:43';

  return (
    <div className="app">
      <header>
        <h1>Сравнение локализации React</h1>
      </header>

      <ControlPanel
        replyCount={replyCount}
        authorGender={authorGender}
        onReplyCountChange={setReplyCount}
        onGenderChange={setAuthorGender}
      />

      <div className="comparison-container">
        <I18nextDemo
          replyCount={replyCount}
          authorGender={authorGender}
          authorName={authorName}
          dateTime={dateTime}
        />
        
        <RussianNounsDemo
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
