export type TrialStatus =
  | "Recruiting"
  | "Active, not recruiting"
  | "Completed"
  | "Terminated"
  | "Enrolling by invitation"
  | "Not yet recruiting"
  | "Suspended"
  | "Withdrawn"
  | "Unknown status";

export interface Trial {
  nctId: string;
  title: string;
  condition: string;
  phase: string;
  interventionType: string;
  interventionName: string;
  enrollment: number;
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

export interface ClinicalTrialsApiResponse {
  studies?: ClinicalStudy[];
  nextPageToken?: string | null;
}

export interface TrialsResponse {
  studies?: Trial[];
  nextPageToken?: string | null;
}
