export function useTalent() {
  const talentStore = useTalentStore();
  const selectedTalent = computed(() => talentStore.selectedTalent);

  const fullName = computed(
    () => `${selectedTalent.value?.firstName} ${selectedTalent.value?.lastName}`
  );

  const jobTitle = computed(() => selectedTalent.value?.professionalTitle);

  const fullAddress = computed(() => {
    const parts = [
      selectedTalent.value.homeAddressCity,
      selectedTalent.value.homeAddressState,
      selectedTalent.value.homeAddressCountry,
    ];

    return parts.filter(Boolean).join(", ");
  });

  const contactLinks = computed(() => {
    const updatedInfoArray = [];

    if (selectedTalent.value.mobileCode && selectedTalent.value.mobileNumber) {
      updatedInfoArray.push({
        text: `+${selectedTalent.value.mobileCode} ${selectedTalent.value.mobileNumber}`,
        type: "MOBILE_NUMBER",
      });
    }

    if (selectedTalent.value.email) {
      updatedInfoArray.push({
        text: selectedTalent.value.email,
        type: "EMAIL",
      });
    }

    if (selectedTalent.value.linkedinHandle) {
      updatedInfoArray.push({
        text: selectedTalent.value.linkedinHandle,
        type: "LINKEDIN_HANDLE",
      });
    }

    if (fullAddress.value) {
      updatedInfoArray.push({
        text: fullAddress.value,
        type: "ADDRESS",
      });
    }

    return updatedInfoArray;
  });

  return { fullName, jobTitle, fullAddress, contactLinks };
}
