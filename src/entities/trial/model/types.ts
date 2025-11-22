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

export interface ClinicalStudy {
  protocolSection?: {
    identificationModule?: {
      nctId?: string;
      briefTitle?: string;
    };
    statusModule?: {
      overallStatus?: string;
      startDateStruct?: {
        date?: string;
      };
    };
    designModule?: {
      phases?: string[];
      phase?: string;
      enrollmentInfo?: {
        count?: string;
      };
    };
    armsInterventionsModule?: {
      interventions?: Array<{
        type?: string;
        name?: string;
      }>;
    };
    conditionsModule?: {
      conditions?: string[];
    };
    sponsorCollaboratorsModule?: {
      leadSponsor?: {
        name?: string;
      };
    };
    contactsLocationsModule?: {
      locations?: Array<{
        country?: string;
      }>;
    };
  };
}

export interface TrialsResponse {
  studies?: ClinicalStudy[];
  nextPageToken?: string | null;
}
