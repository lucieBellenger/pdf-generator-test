export function useQuestions(specifiedView) {
  const views = {
    MSP_VIEW: "MSP_VIEW",
    TALENT_VIEW: "TALENT_VIEW",
  };

  const view = ref(specifiedView);

  const store = useApplicationStore();
  const questions = computed(() => store.questions);

  const visibleQuestions = computed(() => {
    if (view === views.MSP_VIEW) {
      return questions.value.filter((q) => q.mspVisibility);
    } else if (view === views.TALENT_VIEW) {
      return questions.value.filter((q) => q.talentVisibility);
    } else {
      return questions.value;
    }
  });

  return {
    visibleQuestions,
  };
}
