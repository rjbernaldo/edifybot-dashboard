export const SET_SUMMARY = 'SET_SUMMARY';

export function setSummary(summary) {
  return {
    type: SET_SUMMARY,
    summary: summary,
  };
}
