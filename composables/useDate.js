import { formatDistance, format } from "date-fns";

export function useDate() {
  const getFormattedDuration = (start, end) => {
    return formatDistance(new Date(start), new Date(end), {
      addSuffix: false,
    });
  };

  const currentDate = computed(() => format(new Date(), "dd MMMM yyyy"));

  return {
    getFormattedDuration,
    currentDate,
  };
}
