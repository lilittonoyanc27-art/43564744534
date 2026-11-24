export type TableCategory =
  | 'all'
  | 'genres'
  | 'words'
  | 'phrases'
  | 'figures'
  | 'functions'
  | 'modalities'
  | 'communication'
  | 'grammar'
  | 'literature_types'
  | 'forms'
  | 'style'
  | 'resumen';

export interface BilingualRow {
  id: string;
  category: Exclude<TableCategory, 'all'>;
  categoryLabel: string;
  es: string;
  hy: string;
  extraEs?: string;
  extraHy?: string;
  note?: string;
}

export interface BilingualLine {
  es: string;
  hy: string;
  highlight?: string;
  speaker?: string;
  isStageDirection?: boolean;
}

export interface ExamQA {
  id: string;
  label: string;
  questionEs: string;
  questionHy: string;
  points?: string;
  answerEs: string;
  answerHy: string;
  subItems?: {
    termEs: string;
    termHy: string;
    explanationEs: string;
    explanationHy: string;
  }[];
  bulletsEs?: string[];
}

export interface SimpleQA {
  questionEs: string;
  questionHy: string;
  answerEs: string;
  answerHy: string;
}

export interface FigurePracticeItem {
  id: number;
  sentenceEs: string;
  sentenceHy: string;
  figureEs: string;
  figureHy: string;
  justificationEs: string;
  justificationHy: string;
}

export interface QuizQuestion {
  id: number;
  questionEs: string;
  questionHy: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    textEs: string;
    textHy: string;
  }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanationEs: string;
  explanationHy: string;
}

export interface TheoryQA {
  number: string;
  questionEs: string;
  questionHy?: string;
  answerEs: string;
  answerHy: string;
  examples?: { es: string; hy: string }[];
  bulletsEs?: string[];
  bulletsHy?: string[];
}

export interface SentenceExerciseRow {
  sentenceEs: string;
  sentenceHy: string;
  targetWord?: string;
  answerEs: string;
  answerHy: string;
}

export interface FigureDetail {
  number: number;
  level: 'fonico' | 'morfosintactico' | 'semantico';
  nameEs: string;
  nameHy: string;
  definitionEs: string;
  definitionHy: string;
  examples: { es: string; hy: string }[];
  justificationEs?: string;
  justificationHy?: string;
  note?: string;
}

export interface ChecklistTopic {
  id: string;
  titleEs: string;
  titleHy: string;
}
