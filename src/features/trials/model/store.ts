"use client";

import { create } from "zustand";
import { TrialsFilters } from "./types";

const DEFAULT_FILTERS: TrialsFilters = {
  condition: "",
  customCondition: "",
  company: "",
  customCompany: "",
  phase: "",
  status: "",
  pageSize: 20,
};

interface TrialsState {
  filters: TrialsFilters;
  appliedFilters: TrialsFilters;
  pageNumber: number;
  currentPageToken: string | null;
  prevTokens: Array<string | null>;
  hasSearched: boolean;
  setFilter: <K extends keyof TrialsFilters>(
    key: K,
    value: TrialsFilters[K]
  ) => void;
  resetFilters: () => void;
  applyFilters: () => void;
  goToNext: (token: string) => void;
  goToPrev: () => void;
}

const useTrialsStore = create<TrialsState>((set) => ({
  filters: { ...DEFAULT_FILTERS },
  appliedFilters: { ...DEFAULT_FILTERS },
  pageNumber: 1,
  currentPageToken: null,
  prevTokens: [],
  hasSearched: true,
  setFilter: (key, value) =>
    set((state) => ({
      filters: { ...state.filters, [key]: value } as TrialsFilters,
    })),
  resetFilters: () =>
    set({
      filters: { ...DEFAULT_FILTERS },
    }),
  applyFilters: () =>
    set((state) => ({
      appliedFilters: { ...state.filters },
      currentPageToken: null,
      prevTokens: [],
      pageNumber: 1,
      hasSearched: true,
    })),
  goToNext: (token) =>
    set((state) => {
      if (!token) return {};
      return {
        currentPageToken: token,
        pageNumber: state.pageNumber > 0 ? state.pageNumber + 1 : 2,
        prevTokens: [...state.prevTokens, state.currentPageToken],
      };
    }),
  goToPrev: () =>
    set((state) => {
      if (!state.prevTokens.length) return {};
      const updatedPrev = state.prevTokens.slice(0, -1);
      const prevToken = state.prevTokens[state.prevTokens.length - 1] ?? null;
      return {
        currentPageToken: prevToken,
        pageNumber: Math.max(1, state.pageNumber - 1),
        prevTokens: updatedPrev,
      };
    }),
}));

export default useTrialsStore;
