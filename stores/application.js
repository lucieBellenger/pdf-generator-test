import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useApplicationStore = defineStore("application", () => {
  // TODO : find api that sends the talent motivation letter
  const applications = ref([
    {
      id: 226,
      jobHandle: 1201,
      shortListed: false,
      aggregatorShortListed: "na",
      status: "a",
      labels: [],
      rating: 0,
      vmsWorkOrderId: null,
      sentToClient: null,
      displayRate: {
        value: 225,
        currency: "EUR",
        period: "HR",
      },
      rate: {
        value: 225,
        currency: "EUR",
        period: "HR",
      },
      rateEditable: true,
      rateMspEdited: false,
      payRate: {
        value: 225,
        currency: "EUR",
        period: "HR",
      },
      payRateEditable: true,
      payRateMspEdited: false,
      billRate: {
        value: 225,
        currency: "EUR",
        period: "HR",
      },
      billRateEditable: true,
      billRateMspEdited: false,
      comment:
        "Dear Hiring Manager,\n\nI'm thrilled about the [Job Title] opportunity at [Company Name]. With a proven track record in [relevant skills/industry], I'm eager to contribute to your team's success. My dedication, coupled with [specific trait/experience], aligns perfectly with your company's ethos. Excited to discuss further.\n\nBest regards,\n[Your Name]",
      created: "2024-02-23T14:47:43",
      lastUpdated: "2024-02-23T14:47:43",
      shortAnswerElements: [],
      onDemandInterview: null,
      liveInterview: null,
      vmsInterview: {
        id: null,
        status: null,
        startTime: null,
        endTime: null,
        meetingType: null,
        meetingDetails: null,
        mspMeetingDetails: null,
        hiringManagerName: null,
        hiringManagerPhone: null,
        hiringManagerEmail: null,
        hiringManagerDetails: null,
        provideInterviewInfoFlag: null,
        interviewComments: null,
        partnerComments: null,
        availableDatesJson: null,
        rescheduleRequired: null,
      },
      vmsOffer: {
        id: null,
        status: null,
        startDate: null,
        endDate: null,
        payRateUnit: null,
        payRateCurrency: null,
        payRateAmount: null,
        onboardingInstructions: null,
        beelinePaymentModel: null,
      },
      job: {
        id: 212,
        title: "Project with motivation",
        vmsJobId: "PHIJshfslfsh8378474",
        closedForNewCandidates: false,
        rateRange: {
          minValue: 200,
          maxValue: 250,
          period: "HR",
          currency: "EUR",
          periodOverride: null,
          currencyOverride: null,
        },
      },
      freelancer: {
        id: 1,
        firstName: "Ru",
        lastName: "Paul",
        professionalTitle: "SENIOR GRAPHIC DESIGNER",
        logoUUID: null,
        euCitizen: false,
        emailVerified: true,
        mobileVerified: false,
        endOfValidWorkPermit: null,
        endOfValidVisa: null,
        availability: {
          workingRadius: 5,
          remote: true,
          onsite: false,
          hybrid: false,
        },
        homeAddressCity: "Schenectady",
        homeAddressState: "Utah",
        homeAddressCountry: "US",
        level: "",
        client: {
          id: 2,
          name: "philips",
        },
      },
      isComplete: true,
      uiActions: {
        NO_LABEL: [
          {
            name: "REJECT_AS_MSP",
            forward: false,
            type: "status",
          },
          {
            name: "SEND_EMAIL",
            type: "other",
          },
          {
            id: 59,
            nameKey: "philips.job_application_label_key.review",
            forward: true,
            type: "label",
          },
        ],
      },
    },
  ]);
  const selectedApplicationId = ref(null);

  const setSelectedApplicationId = (id) => {
    selectedApplicationId.value = id;
  };

  const selectedApplication = computed(() =>
    applications.value.find(
      (application) => application.id === selectedApplicationId.value
    )
  );

  const selectedTalentId = computed(() => selectedApplication.value?.freelancer?.id);

  const motivation = computed(() => selectedApplication.value?.comment || "");

  const rateInfos = computed(() => selectedApplication.value?.rate);

  return {
    applications,
    setSelectedApplicationId,
    selectedApplication,
    rateInfos,
    motivation,
    selectedTalentId
  };
});
