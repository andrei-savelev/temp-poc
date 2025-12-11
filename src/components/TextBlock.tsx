import { TextBlockProps } from '../types';

const TextBlock: React.FC<TextBlockProps> = ({ label, text }) => {
  return (
    <div className="text-block">
      <h3>{label}</h3>
      <p className="text-output">{text}</p>
    </div>
  );
};

export default TextBlock;
