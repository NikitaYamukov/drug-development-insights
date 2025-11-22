"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchTrials } from "./clinicalTrials";
import useTrialsStore from "../model/store";

const useTrialsQuery = () => {
  const appliedFilters = useTrialsStore((state) => state.appliedFilters);
  const currentPageToken = useTrialsStore((state) => state.currentPageToken);
  const hasSearched = useTrialsStore((state) => state.hasSearched);

  return useQuery({
    queryKey: ["trials", appliedFilters, currentPageToken],
    queryFn: () =>
      fetchTrials({
        filters: appliedFilters,
        pageToken: currentPageToken ?? undefined,
      }),
    enabled: hasSearched,
    staleTime: 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export default useTrialsQuery;
