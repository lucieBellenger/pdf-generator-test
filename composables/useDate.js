import { formatDistance } from "date-fns";

export function useDate() {
  const getFormattedDuration = (start, end) => {
    return formatDistance(new Date(start), new Date(end), {
      addSuffix: false,
    });
  };

  return {
    getFormattedDuration,
  };
}
