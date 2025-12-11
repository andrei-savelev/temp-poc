import { ControlPanelProps, Gender } from '../types';

const ControlPanel: React.FC<ControlPanelProps> = ({
  articleCount,
  replyCount,
  authorGender,
  onArticleCountChange,
  onReplyCountChange,
  onGenderChange
}) => {
  return (
    <div className="control-panel">
      <div className="control-group">
        <label htmlFor="article-count">
          Количество статей: <strong>{articleCount}</strong>
        </label>
        <input
          id="article-count"
          type="range"
          min="1"
          max="11"
          value={articleCount}
          onChange={(e) => onArticleCountChange(parseInt(e.target.value))}
        />
        <div className="preset-buttons">
          <button onClick={() => onArticleCountChange(1)}>1</button>
          <button onClick={() => onArticleCountChange(3)}>3</button>
          <button onClick={() => onArticleCountChange(11)}>11</button>
        </div>
      </div>

      <div className="control-group">
        <label htmlFor="reply-count">
          Количество ответов: <strong>{replyCount}</strong>
        </label>
        <input
          id="reply-count"
          type="range"
          min="1"
          max="20"
          value={replyCount}
          onChange={(e) => onReplyCountChange(parseInt(e.target.value))}
        />
      </div>

      <div className="control-group">
        <span>Пол автора:</span>
        <div className="gender-toggle">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={authorGender === 'male'}
              onChange={() => onGenderChange('male' as Gender)}
            />
            Мужской
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={authorGender === 'female'}
              onChange={() => onGenderChange('female' as Gender)}
            />
            Женский
          </label>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
