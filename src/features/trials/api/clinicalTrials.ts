import { TrialsResponse } from "@entities/trial/model/types";
import { TrialsFilters } from "../model/types";

const API_URL = "https://clinicaltrials.gov/api/v2/studies";

const normalizeCustomValue = (value: string, custom: string) => {
  if (value === "Other") return custom.trim();
  return value.trim();
};

export const buildQueryTerm = (filters: TrialsFilters) => {
  const parts: string[] = [];
  const condition = normalizeCustomValue(filters.condition, filters.customCondition);
  const company = normalizeCustomValue(filters.company, filters.customCompany);
  if (condition) parts.push(condition);
  if (company) parts.push(company);
  if (filters.phase) parts.push(filters.phase.trim());
  if (filters.status) parts.push(filters.status.trim());
  return parts.join(" ").trim();
};

interface FetchTrialsArgs {
  filters: TrialsFilters;
  pageToken?: string | null;
}

export const fetchTrials = async ({
  filters,
  pageToken,
}: FetchTrialsArgs): Promise<TrialsResponse> => {
  const term = buildQueryTerm(filters);
  const params = new URLSearchParams();
  params.set("query.term", term);
  params.set("pageSize", String(filters.pageSize));
  if (pageToken) {
    params.set("pageToken", pageToken);
  }

  const response = await fetch(`${API_URL}?${params.toString()}`);
  if (!response.ok) {
    throw new Error(`ClinicalTrials API error: ${response.status} ${response.statusText}`);
  }
  const data = (await response.json()) as TrialsResponse;
  return {
    studies: data.studies ?? [],
    nextPageToken: data.nextPageToken ?? null,
  };
};
