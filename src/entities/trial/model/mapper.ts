import {
  ClinicalStudy,
  ClinicalTrialsApiResponse,
  Trial,
  TrialStatus,
  TrialsResponse,
} from "./types";

export const mapClinicalStudyToTrial = (study: ClinicalStudy): Trial | null => {
  const protocol = study.protocolSection;
  if (!protocol?.identificationModule?.nctId) return null;

  const interventions = protocol.armsInterventionsModule?.interventions ?? [];
  const firstIntervention = interventions[0];

  const locations = protocol.contactsLocationsModule?.locations ?? [];
  const firstCountry = locations[0]?.country ?? "Unknown";

  const enrollmentCount = protocol.designModule?.enrollmentInfo?.count;
  const enrollment =
    typeof enrollmentCount === "number"
      ? enrollmentCount
      : parseInt(String(enrollmentCount ?? "0"), 10) || 0;

  const phase =
    protocol.designModule?.phase ??
    protocol.designModule?.phases?.[0] ??
    "Not Applicable";

  return {
    nctId: protocol.identificationModule.nctId,
    title: protocol.identificationModule.briefTitle ?? "Untitled",
    condition: protocol.conditionsModule?.conditions?.[0] ?? "Unknown",
    phase,
    interventionType: firstIntervention?.type ?? "Unknown",
    interventionName: firstIntervention?.name ?? "Unknown",
    enrollment,
    startDate: protocol.statusModule?.startDateStruct?.date ?? "Unknown",
    status: (protocol.statusModule?.overallStatus ??
      "Unknown status") as TrialStatus,
    sponsor:
      protocol.sponsorCollaboratorsModule?.leadSponsor?.name ?? "Unknown",
    country: firstCountry,
  };
};

export const mapTrialsResponse = (
  response: ClinicalTrialsApiResponse
): TrialsResponse => {
  const studies = (response.studies ?? [])
    .map(mapClinicalStudyToTrial)
    .filter((trial): trial is Trial => trial !== null);

  return {
    studies,
    nextPageToken: response.nextPageToken ?? null,
  };
};
