interface ExamPart {
  id: string;
  title: string;
  duration: string;
  points: number;
  description: string;
  tips: string[];
  parts: {
    name: string;
    taskType: string;
    items: number;
    points: number;
    description?: string;
    checklist?: string[];
  }[];
}

export interface ExamLevel {
  id: string;
  level: string;
  title: string;

  category: string;
  description: string;
  totalDuration: string;
  passingScore: string;
  sections: ExamPart[];
}

export interface PhraseGroup {
  label: string;
  badge?: string;
  phrases: (string | PhraseGroup)[];
}

export interface RedemittelCategory {
  [key: string]: PhraseGroup[];
}

export interface RedemittelData {
  b1: RedemittelCategory;
  b2: RedemittelCategory;
}
