export interface CareerStage {
  id: string;
  period: string;
  stage: string;
  title: string;
  description: string;
  focus: string[];
  milestone: string;
  icon: string;
  accentClass: string;
  relatedCase?: string;
}
