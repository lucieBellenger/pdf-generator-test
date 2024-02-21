<template>
  <div class="flex flex-col p-5">
    <div class="flex justify-between">
      <img
        src="assets/logos/philips.svg"
        class="box-content w-[110px] self-start pb-5"
      />
      <img
        src="assets/logos/rsr.svg"
        class="box-content w-[110px] self-start pb-5"
      />
    </div>

    <BasicDivider />

    <div class="flex justify-between items-start py-5">
      <div class="flex flex-col">
        <div class="flex flex-col">
          <h1 class="text-lg font-semibold">{{ fullName }}</h1>
          <p class="text-sm font-light">{{ jobTitle }}</p>
        </div>
        <IconTextItem
          v-for="(link, idx) in contactLinks"
          class="mt-1"
          :key="idx"
          :text="link.text"
          :type="link.type"
        />
      </div>
      <talent-picture></talent-picture>
    </div>
    <div class="grid grid-cols-3">
      <div class="bg-blue-grey-800 flex-1 space-y-3 py-4 px-2">
        <ListSection
          v-for="(item, idx) in pickerArray"
          :key="`picker__${idx}`"
          :title="item.data.title"
          :list="item.data.value"
          :type="item.data.type"
        />
      </div>
      <div class="col-span-2 space-y-6 pl-4">
        <BlockTitle
          v-for="item in workSumEduCertExperience"
          :title="item.data.title"
        >
          <BasicSection
            v-if="item.data.type === 'SUMMARY'"
            :type="item.data.type"
            :summary="item.data.value"
          >
          </BasicSection>
          <template v-else>
            <BasicSection
              :type="item.data.type"
              v-for="(entry, idx) in item.data.value"
              :key="idx"
              class="mb-2"
              :education-entry="item.data.type === 'EDUCATION' ? entry : {}"
              :work-experience="
                item.data.type === 'WORK_EXPERIENCE' ? entry : {}
              "
              :certificate="item.data.type === 'CERTIFICATE' ? entry : {}"
            >
            </BasicSection>
          </template>
        </BlockTitle>
      </div>
    </div>
  </div>
</template>

<script>
import BasicDivider from "~/components/resume/BasicDivider";
import IconTextItem from "~/components/resume/IconTextItem";
import ListSection from "~/components/resume/ListSection";
import TalentPicture from "~/components/resume/TalentPicture";
import BlockTitle from "~/components/resume/BlockTitle";
import BasicSection from "~/components/resume/BasicSection";

export default {
  name: "BasicResume",
  components: {
    BasicDivider,
    IconTextItem,
    TalentPicture,
    ListSection,
    BlockTitle,
    BasicSection,
  },
  props: {
    talentData: {
      type: Object,
      default: {
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
        id: 466,
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
        ],
      },
    },
    clientName: {
      type: String,
      default: "philips",
    },
  },
  setup(props) {
    const { fullName, jobTitle, fullAddress, contactLinks } = useTalent(
      props.talentData
    );
    const { pickerArray, workSumEduCertExperience } = useResume();

    const totalPages = ref(0);

    // TODO get real data from app
    const skills = computed(() => [
      "End to End Product Design",
      "UX/UI Design",
      "Visual Design",
      "User Research & Testing",
      "User and Task flows",
      "Storyboarding & Wireframing",
      "Prototyping",
      "Sketching and Illustration",
      "Brand Identity",
      "Web Design & Development",
    ]);
    // TODO get real data from app
    const tools = computed(() => [
      "Photoshop",
      "Figma",
      "Creative Suite",
      "Photoshop",
      "User and Task flows",
      "Illustrator",
      "InDesign",
      "Sketch",
      "Jira",
      "Slack",
    ]);

    // TODO get real data from app
    const summary = computed(() => {
      return {
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. ",
      };
    });

    const jobExperience = computed(() => {
      return {
        title: "Head Java Developer",
        company: "Booking.com",
        from: "Mrz 2013",
        to: "Mrz 2013",
        from: "Jul 2015",
        totalDuration: "2 years",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.`,
      };
    });

    const education = computed(() => {
      return {
        title: "Bachelor's degree Business Administration",
        school: "Hogeschool van Arnhem en Nijmegen",
        from: "Sep 2009",
        to: "Sep 2013",
      };
    });
    const certificate = computed(() => {
      return {
        title:
          "Microsoft Certified IT Professional 2008 Enterprise Administrator (MCITP)",
        date: "Nov 2009",
      };
    });

    onMounted(() => {
      totalPages.value = getTotalPages();
      totalPages.value;
    });

    const getTotalPages = () => {
      const pageHeightMM = 297;
      const DPI = 96;
      const totalHeight = document.documentElement.scrollHeight;
      const pageHeightPX = (pageHeightMM / 25.4) * DPI;
      return Math.ceil(totalHeight / pageHeightPX);
    };

    return {
      fullName,
      jobTitle,
      fullAddress,
      contactLinks,
      skills,
      tools,
      summary,
      jobExperience,
      education,
      certificate,
      pickerArray,
      workSumEduCertExperience,
      totalPages,
    };
  },
};
</script>

<style scoped>
@page {
  size: A4;
  margin: 0;
}

@media print {
  .h-full-print {
    height: calc(100vh - 140px);
  }
}
</style>
