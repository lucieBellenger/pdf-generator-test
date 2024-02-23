import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTalentStore = defineStore("talent", () => {
  const talents = ref([
    {
      level: "",
      state: "ACTIVE",
      lastLogin: "2024-02-19T11:52:06",
      client: {
        id: 2,
        name: "philips",
      },
      aggregatorFreelancer: false,
      endOfValidWorkPermit: null,
      endOfValidVisa: null,
      consentTo: [
        {
          id: 2,
          name: "philips",
        },
      ],
      billingAddressLine1: null,
      billingAddressLine2: null,
      billingAddressStreet: null,
      billingAddressZip: null,
      billingAddressCity: null,
      billingAddressCountry: null,
      id: 1,
      firstName: "Ashanti",
      lastName: "Baby",
      professionalTitle: "SENIOR GRAPHIC DESIGNER",
      email: "ashanti@gmail.com",
      emailVerified: true,
      description:
        "<p>GRAPHIC DESIGNER</p><p></p><p>PERSONAL PROFILE</p><p></p><p>With years of experience and a proven track</p><p>record of success, I am a creative and</p><p>innovative graphic designer fueled by my love of</p><p>all things design.</p><p></p><p></p><p></p><p>SPECIALIZATION</p><p></p><p>* Brand Identity and Logo Design</p><p>* Marketing and Advertising Design</p><p>* Traditional and Digital Illustration</p><p>* Web Design and Flash Animation</p><p>* Typography</p>",
      mobileCode: "1",
      mobileNumber: "234567890",
      mobileVerified: false,
      fixedLineCode: null,
      fixedLineNumber: null,
      homeAddressLine1: "Rachelle ",
      homeAddressLine2: null,
      homeAddressStreet: "Anywhere St 123",
      homeAddressZip: "12345",
      homeAddressCity: "Schenectady",
      homeAddressState: "Utah",
      homeAddressCountry: "US",
      homeLatitude: null,
      homeLongitude: null,
      nonTimeAvailabilities: [],
      workingRadius: 5,
      remote: true,
      onsite: false,
      hybrid: false,
      hourRateValue: 0,
      hourRateCurrency: "EUR",
      linkedinHandle: "https://www.linkedin.com/",
      logoUUID: null,
      subscribed: false,
      jobNotificationsOptedIn: true,
      internalCommunicationsOptedIn: true,
      jobNotificationsDigestEnabled: false,
      cvAttachments: [
        {
          id: 215,
          uuid: "8b445817-951d-4558-9e86-b3e90e7ad74b",
          name: "CV Rachelle Beaudry EN (2).pdf",
          contentType: "application/pdf",
        },
      ],
      cvId: 460,
      securityIds: [
        {
          legalEntityName: "philips",
          securityId: "02022837",
        },
      ],
      applications: [
        {
          title: "Superstar",
          vmsId: "del-kwhefkwhfkwen",
          id: 221,
          jobHandleId: 1198,
          status: "a",
          label: null,
          labelKey: null,
        },
        {
          title: "Drag race super star",
          vmsId: "764584756jksdbf",
          id: 223,
          jobHandleId: 1200,
          status: "a",
          label: null,
          labelKey: null,
        },
        {
          title: "Project with motivation",
          vmsId: "PHIJshfslfsh8378474",
          id: 226,
          jobHandleId: 1198,
          status: "a",
          label: null,
          labelKey: null,
        },
      ],
    },
    {
      level: "",
      state: "ACTIVE",
      lastLogin: "2024-02-19T11:52:06",
      client: {
        id: 2,
        name: "philips",
      },
      aggregatorFreelancer: false,
      endOfValidWorkPermit: null,
      endOfValidVisa: null,
      consentTo: [
        {
          id: 2,
          name: "philips",
        },
      ],
      billingAddressLine1: null,
      billingAddressLine2: null,
      billingAddressStreet: null,
      billingAddressZip: null,
      billingAddressCity: null,
      billingAddressCountry: null,
      id: 2,
      firstName: "John",
      lastName: "Doe",
      professionalTitle: "WEB DEVELOPER",
      email: "john.doe@example.com",
      emailVerified: true,
      // Add other attributes for the second user as needed
    },
    {
      level: "",
      state: "ACTIVE",
      lastLogin: "2024-02-19T11:52:06",
      client: {
        id: 2,
        name: "philips",
      },
      aggregatorFreelancer: false,
      endOfValidWorkPermit: null,
      endOfValidVisa: null,
      consentTo: [
        {
          id: 2,
          name: "philips",
        },
      ],
      billingAddressLine1: null,
      billingAddressLine2: null,
      billingAddressStreet: null,
      billingAddressZip: null,
      billingAddressCity: null,
      billingAddressCountry: null,
      id: 3,
      firstName: "Jane",
      lastName: "Smith",
      professionalTitle: "SOFTWARE ENGINEER",
      email: "jane.smith@example.com",
      emailVerified: true,
      // Add other attributes for the third user as needed
    },
    {
      level: "",
      state: "ACTIVE",
      lastLogin: "2024-02-19T11:52:06",
      client: {
        id: 2,
        name: "philips",
      },
      aggregatorFreelancer: false,
      endOfValidWorkPermit: null,
      endOfValidVisa: null,
      consentTo: [
        {
          id: 2,
          name: "philips",
        },
      ],
      billingAddressLine1: null,
      billingAddressLine2: null,
      billingAddressStreet: null,
      billingAddressZip: null,
      billingAddressCity: null,
      billingAddressCountry: null,
      id: 4,
      firstName: "Michael",
      lastName: "Johnson",
      professionalTitle: "DATA SCIENTIST",
      email: "michael.johnson@example.com",
      emailVerified: true,
      // Add other attributes for the fourth user as needed
    },
    {
      level: "",
      state: "ACTIVE",
      lastLogin: "2024-02-19T11:52:06",
      client: {
        id: 2,
        name: "philips",
      },
      aggregatorFreelancer: false,
      endOfValidWorkPermit: null,
      endOfValidVisa: null,
      consentTo: [
        {
          id: 2,
          name: "philips",
        },
      ],
      billingAddressLine1: null,
      billingAddressLine2: null,
      billingAddressStreet: null,
      billingAddressZip: null,
      billingAddressCity: null,
      billingAddressCountry: null,
      id: 5,
      firstName: "Emily",
      lastName: "Brown",
      professionalTitle: "MARKETING MANAGER",
      email: "emily.brown@example.com",
      emailVerified: true,
      // Add other attributes for the fifth user as needed
    },
    {
      level: "",
      state: "ACTIVE",
      lastLogin: "2024-02-19T11:52:06",
      client: {
        id: 2,
        name: "philips",
      },
      aggregatorFreelancer: false,
      endOfValidWorkPermit: null,
      endOfValidVisa: null,
      consentTo: [
        {
          id: 2,
          name: "philips",
        },
      ],
      billingAddressLine1: null,
      billingAddressLine2: null,
      billingAddressStreet: null,
      billingAddressZip: null,
      billingAddressCity: null,
      billingAddressCountry: null,
      id: 6,
      firstName: "William",
      lastName: "Taylor",
      professionalTitle: "SOFTWARE DEVELOPER",
      email: "william.taylor@example.com",
      emailVerified: true,
      // Add other attributes for the sixth user as needed
    },
    {
      level: "",
      state: "ACTIVE",
      lastLogin: "2024-02-19T11:52:06",
      client: {
        id: 2,
        name: "philips",
      },
      aggregatorFreelancer: false,
      endOfValidWorkPermit: null,
      endOfValidVisa: null,
      consentTo: [
        {
          id: 2,
          name: "philips",
        },
      ],
      billingAddressLine1: null,
      billingAddressLine2: null,
      billingAddressStreet: null,
      billingAddressZip: null,
      billingAddressCity: null,
      billingAddressCountry: null,
      id: 7,
      firstName: "Olivia",
      lastName: "Anderson",
      professionalTitle: "GRAPHIC DESIGNER",
      email: "olivia.anderson@example.com",
      emailVerified: true,
      // Add other attributes for the seventh user as needed
    },
    {
      level: "",
      state: "ACTIVE",
      lastLogin: "2024-02-19T11:52:06",
      client: {
        id: 2,
        name: "philips",
      },
      aggregatorFreelancer: false,
      endOfValidWorkPermit: null,
      endOfValidVisa: null,
      consentTo: [
        {
          id: 2,
          name: "philips",
        },
      ],
      billingAddressLine1: null,
      billingAddressLine2: null,
      billingAddressStreet: null,
      billingAddressZip: null,
      billingAddressCity: null,
      billingAddressCountry: null,
      id: 8,
      firstName: "Daniel",
      lastName: "Martinez",
      professionalTitle: "FULL STACK DEVELOPER",
      email: "daniel.martinez@example.com",
      emailVerified: true,
      // Add other attributes for the eighth user as needed
    },
    {
      level: "",
      state: "ACTIVE",
      lastLogin: "2024-02-19T11:52:06",
      client: {
        id: 2,
        name: "philips",
      },
      aggregatorFreelancer: false,
      endOfValidWorkPermit: null,
      endOfValidVisa: null,
      consentTo: [
        {
          id: 2,
          name: "philips",
        },
      ],
      billingAddressLine1: null,
      billingAddressLine2: null,
      billingAddressStreet: null,
      billingAddressZip: null,
      billingAddressCity: null,
      billingAddressCountry: null,
      id: 9,
      firstName: "Ella",
      lastName: "Garcia",
      professionalTitle: "UI/UX DESIGNER",
      email: "ella.garcia@example.com",
      emailVerified: true,
      // Add other attributes for the ninth user as needed
    },
    {
      level: "",
      state: "ACTIVE",
      lastLogin: "2024-02-19T11:52:06",
      client: {
        id: 2,
        name: "philips",
      },
      aggregatorFreelancer: false,
      endOfValidWorkPermit: null,
      endOfValidVisa: null,
      consentTo: [
        {
          id: 2,
          name: "philips",
        },
      ],
      billingAddressLine1: null,
      billingAddressLine2: null,
      billingAddressStreet: null,
      billingAddressZip: null,
      billingAddressCity: null,
      billingAddressCountry: null,
      id: 10,
      firstName: "Henry",
      lastName: "Walker",
      professionalTitle: "DATA ANALYST",
      email: "henry.walker@example.com",
      emailVerified: true,
    },
  ]);

  const setMotivationById = (id, value) => {
    const talent = talents.value.find((talent) => talent.id === id);

    if (talent) {
      talent.motivation = value;
    }
  };

  const selectedTalentId = computed(() => {
    const store = useApplicationStore();
    return store.selectedTalentId;
  });

  const selectedTalent = computed(() =>
    talents.value.find((talent) => talent.id === selectedTalentId.value)
  );

  const setSelectedTalentId = (id) => {
    selectedTalentId.value = id;
  };

  const setTalents = (value) => {
    talents.value = value;
  };

  return {
    talents,
    selectedTalent,
    selectedTalentId,
    setTalents,
    setSelectedTalentId,
    setMotivationById,
  };
});
