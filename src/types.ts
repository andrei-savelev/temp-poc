export type Gender = 'male' | 'female';

export interface AppState {
  replyCount: number;
  authorGender: Gender;
  authorName: string;
  dateTime: string;
}

export interface DemoProps {
  replyCount: number;
  authorGender: Gender;
  authorName: string;
  dateTime: string;
}

export interface ControlPanelProps {
  replyCount: number;
  authorGender: Gender;
  onReplyCountChange: (count: number) => void;
  onGenderChange: (gender: Gender) => void;
}

export interface TextBlockProps {
  label: string;
  text: string;
}
