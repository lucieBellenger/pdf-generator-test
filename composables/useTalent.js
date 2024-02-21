export function useTalent(talentData) {
  const fullName = computed(
    () => `${talentData.firstName} ${talentData.lastName}`
  );

  const jobTitle = computed(() => talentData?.professionalTitle);

  const fullAddress = computed(() => {
    const parts = [
      talentData.homeAddressCity,
      talentData.homeAddressState,
      talentData.homeAddressCountry,
    ];

    return parts.filter(Boolean).join(", ");
  });

  const contactLinks = computed(() => {
    const updatedInfoArray = [];

    if (talentData.mobileCode && talentData.mobileNumber) {
      updatedInfoArray.push({
        text: `+${talentData.mobileCode} ${talentData.mobileNumber}`,
        type: "MOBILE_NUMBER",
      });
    }

    if (talentData.email) {
      updatedInfoArray.push({
        text: talentData.email,
        type: "EMAIL",
      });
    }

    if (talentData.linkedinHandle) {
      updatedInfoArray.push({
        text: talentData.linkedinHandle,
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
