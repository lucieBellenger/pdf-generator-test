export function useRate() {
  const store = useApplicationStore();
  const rate = computed(() => store.rateInfos);

  const currencySignType = {
    USD: "$",
    EUR: "€",
  };

  const periodType = {
    HR: "HR",
    DAY: "DAY",
    WEEK: "WEEK",
    MONTH: "MONTH",
    YEAR: "YEAR",
    PROJECT: "PROJECT",
  };

  const formattedRateInfos = computed(() =>
    rate.value
      ? `${rate.value.value}${currencySignType[rate.value.currency]} / ${
          periodType[rate.value.period]
        }`
      : ""
  );

  // TODO add computed based on clientContext to indicate if rate should be displayed

  return {
    formattedRateInfos,
  };
}
