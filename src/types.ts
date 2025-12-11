export type Gender = 'male' | 'female';

export interface AppState {
  articleCount: number;
  totalArticles: number;
  replyCount: number;
  authorGender: Gender;
  authorName: string;
  dateTime: string;
}

export interface DemoProps {
  articleCount: number;
  totalArticles: number;
  replyCount: number;
  authorGender: Gender;
  authorName: string;
  dateTime: string;
}

export interface ControlPanelProps {
  articleCount: number;
  replyCount: number;
  authorGender: Gender;
  onArticleCountChange: (count: number) => void;
  onReplyCountChange: (count: number) => void;
  onGenderChange: (gender: Gender) => void;
}

export interface TextBlockProps {
  label: string;
  text: string;
}
