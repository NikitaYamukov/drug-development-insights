export type TrialStatus =
  | "Recruiting"
  | "Active, not recruiting"
  | "Completed"
  | "Terminated"
  | string;

export interface Trial {
  nctId: string;
  title: string;
  condition: string;
  phase: string;
  interventionType: string;
  interventionName: string;
  enrollment: string | number;
  startDate: string;
  status: TrialStatus;
  sponsor: string;
  country: string;
}

export interface TrialsResponse {
  studies: Trial[];
  nextPageToken?: string;
}
