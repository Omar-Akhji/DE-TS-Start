export interface Thema {
  text?: string | undefined;
  id: string;
  label: string;
  cat: string;

  pro?: string[] | undefined;
  con?: string[] | undefined;
  isTextOnly?: boolean | undefined;
  sampleText?: string | undefined;
}
