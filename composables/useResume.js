export function useResume() {
  const generateCvTab = ref([
    {
      component: "UPLOAD_IMAGE",
      data: undefined,
      display: false,
    },
    {
      component: "PROFILE_ADDRESS",
      display: true,
      data: {
        stepName: "personal-details",
        stepSequence: 2,
        row: 1,
        type: "PROFILE_ADDRESS",
        name: "homeAddress",
        value: {
          homeStreet: "Anywhere St 123",
          homeAddressLine1: "Rachelle ",
          homeCity: "Schenectady",
          homeZip: "12345",
          homeState: "Utah",
          homeCountry: "US",
        },
        title: "custom.flow.onb.address.title",
        subtitle: "custom.flow.onb.address.subtitle",
        showOn: [
          "PROFILE_TALENT",
          "PROFILE_MSP",
          "PROFILE_HIRING",
          "LONG_ONBOARDING",
          "SHORT_ONBOARDING",
        ],
        form: [
          {
            row: 1,
            name: "homeStreet",
            label: "custom.flow.onb.label.personal.street",
            validation: {
              required: true,
              requiredMessage: "custom.flow.onb.validate.required.address",
            },
          },
          {
            row: 2,
            name: "homeAddressLine1",
            label: "custom.flow.onb.label.personal.line1",
            validation: {
              required: false,
              requiredMessage: "custom.flow.onb.validate.required.address",
            },
          },
          {
            row: 3,
            name: "homeZip",
            label: "custom.flow.onb.label.personal.zip",
            validation: {
              required: true,
              requiredMessage: "custom.flow.onb.validate.required.address",
            },
          },
          {
            row: 3,
            name: "homeCity",
            label: "custom.flow.onb.label.personal.city",
            validation: {
              required: true,
              requiredMessage: "custom.flow.onb.validate.required.address",
            },
          },
          {
            row: 4,
            name: "homeCountry",
            label: "custom.flow.onb.label.personal.country",
            validation: {
              required: true,
              requiredMessage: "custom.flow.onb.validate.required.address",
            },
          },
          {
            row: 4,
            name: "homeState",
            label: "custom.flow.onb.label.personal.state",
            validation: {
              required: false,
              requiredMessage: "custom.flow.onb.validate.required.generic",
            },
          },
        ],
      },
    },
    {
      component: "REPEATER",
      display: true,
      data: {
        type: "CERTIFICATE",
        name: "c_h",
        showOn: ["PROFILE_TALENT", "PROFILE_MSP", "PROFILE_HIRING"],
        title: "custom.flow.onb.ch.title",
        subtitle: "custom.flow.onb.ch.subtitle",
        value: [
          {
            description: "<p>salut toi </p>",
            title: "I am the best",
            startDate: "2023-01-01",
          },
        ],
        validation: {
          required: false,
          requiredMessage: "custom.flow.onb.validate.required.generic",
        },
        form: [
          {
            row: 0,
            type: "TEXT_FIELD",
            name: "title",
            value: "",
            label: "custom.flow.onb.label.ch.title",
            validation: {
              required: true,
              requiredMessage: "custom.flow.onb.validate.required.generic",
              maxCharLength: 255,
              maxCharLengthMessage: "custom.flow.onb.validate.maxChar.length",
            },
          },
          {
            row: 1,
            type: "TEXT_EDITOR",
            name: "description",
            value: "",
            label: "custom.flow.onb.label.ch.description",
            disabled: false,
            validation: {
              required: false,
              requiredMessage: "custom.flow.onb.validate.required.generic",
              maxCharLength: 4096,
              maxCharLengthMessage: "custom.flow.onb.validate.maxChar.length",
            },
          },
          {
            row: 2,
            type: "DATE_PICKER",
            name: "startDate",
            option: "DATE_YEAR_ONLY",
            value: "",
            label: "custom.flow.onb.label.ch.start.date",
            disabled: false,
            validation: {
              required: false,
              requiredMessage: "custom.flow.onb.validate.required.generic",
            },
          },
        ],
      },
    },
    {
      component: "TEXT_EDITOR",
      display: true,
      data: {
        type: "SUMMARY",
        name: "summary",
        value:
          "<p>GRAPHIC DESIGNER</p><p></p><p>PERSONAL PROFILE</p><p></p><p>With years of experience and a proven track</p><p>record of success, I am a creative and</p><p>innovative graphic designer fueled by my love of</p><p>all things design.</p><p></p><p></p><p></p><p>SPECIALIZATION</p><p></p><p>* Brand Identity and Logo Design</p><p>* Marketing and Advertising Design</p><p>* Traditional and Digital Illustration</p><p>* Web Design and Flash Animation</p><p>* Typography</p>",
        label: "custom.flow.onb.label.summary",
        title: "custom.flow.onb.label.summary",
        disabled: false,
        showOn: ["PROFILE_TALENT", "PROFILE_MSP", "PROFILE_HIRING"],
        validation: {
          required: false,
          requiredMessage: "custom.flow.onb.validate.required.generic",
          maxCharLength: 8096,
          maxCharLengthMessage: "custom.flow.onb.validate.maxChar.length",
        },
      },
    },
    {
      component: "REPEATER",
      display: true,
      data: {
        stepName: "work-experience",
        stepSequence: 3,
        row: 1,
        type: "WORK_EXPERIENCE",
        name: "j_h",
        value: [
          {
            description:
              "<ul><li>Conceptualized and produced excellent design</li><li>Managed multiple print and digital design projects</li><li>Collaborated with the marketing and editorial teams</li></ul>",
            ongoing: false,
            title: "SENIOR GRAPHIC DESIGNER",
            endDate: "2019-12-31",
            startDate: "2016-01-01",
            organization: "The Kyobi Imaging Studios",
          },
          {
            description:
              "<ul><li>Pitched graphic design layouts</li><li>Supported the creative team leaders in conceptualizing designs</li><li>Assisted in designing marketing materials for brands</li></ul>",
            ongoing: false,
            title: "GRAPHIC DESIGNER INTERN",
            endDate: "2016-01-01",
            startDate: "2014-01-01",
            organization: "Acacian Spring Studios, Co.",
          },
          {
            description:
              "<ul><li>Pitched graphic design layouts</li><li>Supported the creative team leaders in conceptualizing designs</li><li>Assisted in designing marketing materials for brands</li></ul>",
            ongoing: false,
            title: "GRAPHIC DESIGNER INTERN",
            endDate: "2016-01-01",
            startDate: "2014-01-01",
            organization: "Acacian Spring Studios, Co.",
          },    {
            description:
              "<ul><li>Pitched graphic design layouts</li><li>Supported the creative team leaders in conceptualizing designs</li><li>Assisted in designing marketing materials for brands</li></ul>",
            ongoing: false,
            title: "GRAPHIC DESIGNER INTERN",
            endDate: "2016-01-01",
            startDate: "2014-01-01",
            organization: "Acacian Spring Studios, Co.",
          },    {
            description:
              "<ul><li>Pitched graphic design layouts</li><li>Supported the creative team leaders in conceptualizing designs</li><li>Assisted in designing marketing materials for brands</li></ul>",
            ongoing: false,
            title: "GRAPHIC DESIGNER INTERN",
            endDate: "2016-01-01",
            startDate: "2014-01-01",
            organization: "Acacian Spring Studios, Co.",
          },
        ],
        showOn: [
          "PROFILE_TALENT",
          "PROFILE_MSP",
          "PROFILE_HIRING",
          "LONG_ONBOARDING",
          "SHORT_ONBOARDING",
        ],
        title: "custom.flow.onb.wh.title",
        subtitle: "custom.flow.onb.wh.subtitle",
        validation: {
          required: true,
          requiredMessage: "custom.flow.onb.validate.required.wh",
          min: 1,
          minMessage: "custom.flow.onb.validate.required.min",
        },
        form: [
          {
            row: 0,
            type: "TEXT_FIELD",
            name: "title",
            value: "",
            label: "custom.flow.onb.label.wh.title",
            disabled: false,
            validation: {
              required: true,
              requiredMessage: "custom.flow.onb.validate.required.generic",
              maxCharLength: 255,
              maxCharLengthMessage: "custom.flow.onb.validate.maxChar.length",
            },
          },
          {
            row: 1,
            type: "TEXT_FIELD",
            name: "organization",
            value: "",
            label: "custom.flow.onb.label.wh.organization",
            disabled: false,
            validation: {
              required: true,
              requiredMessage: "custom.flow.onb.validate.required.generic",
              maxCharLength: 255,
              maxCharLengthMessage: "custom.flow.onb.validate.maxChar.length",
            },
          },
          {
            row: 2,
            type: "TEXT_EDITOR",
            name: "description",
            value: "",
            label: "custom.flow.onb.label.wh.description",
            disabled: false,
            validation: {
              required: true,
              requiredMessage: "custom.flow.onb.validate.required.generic",
              maxCharLength: 4096,
              maxCharLengthMessage: "custom.flow.onb.validate.maxChar.length",
            },
          },
          {
            row: 3,
            type: "DATE_PICKER",
            name: "startDate",
            option: "DATE_MONTH",
            value: "",
            label: "custom.flow.onb.label.wh.start.date",
            disabled: false,
            validation: {
              required: true,
              requiredMessage: "custom.flow.onb.validate.required.start",
            },
          },
          {
            row: 3,
            type: "DATE_PICKER",
            name: "endDate",
            option: "DATE_MONTH",
            value: "",
            label: "custom.flow.onb.label.wh.end.date",
            disabled: false,
            validation: {
              required: false,
              requiredMessage: "custom.flow.onb.validate.required.end",
            },
          },
          {
            row: 3,
            type: "DATE_DISABLER",
            name: "ongoing",
            value: false,
            target: "endDate",
            label: "custom.flow.onb.label.wh.present",
          },
        ],
      },
    },
    {
      component: "REPEATER",
      display: true,
      data: {
        stepName: "education",
        stepSequence: 4,
        row: 1,
        type: "EDUCATION",
        name: "e_h",
        showOn: [
          "PROFILE_TALENT",
          "PROFILE_MSP",
          "PROFILE_HIRING",
          "LONG_ONBOARDING",
          "SHORT_ONBOARDING",
        ],
        title: "custom.flow.onb.eh.title",
        subtitle: "custom.flow.onb.eh.subtitle",
        validation: {
          required: true,
          requiredMessage: "custom.flow.onb.validate.required.eh",
          min: 1,
          minMessage: "custom.flow.onb.validate.required.min",
        },
        value: [
          {
            description: "Bachelor of Arts in Graphic Design",
            ongoing: false,
            title: "UNIVERSITY OF GREENWOOD",
            endDate: "2014-06-30",
            startDate: "2010-09-01",
          },
        ],
        form: [
          {
            row: 0,
            type: "TEXT_FIELD",
            name: "description",
            value: "",
            label: "custom.flow.onb.label.eh.degree",
            disabled: false,
            validation: {
              required: true,
              requiredMessage: "custom.flow.onb.validate.required.generic",
              maxCharLength: 255,
              maxCharLengthMessage: "custom.flow.onb.validate.maxChar.length",
            },
          },
          {
            row: 1,
            type: "TEXT_FIELD",
            name: "title",
            value: "",
            label: "custom.flow.onb.label.ch.uni",
            disabled: false,
            validation: {
              required: true,
              requiredMessage: "custom.flow.onb.validate.required.generic",
              maxCharLength: 255,
              maxCharLengthMessage: "custom.flow.onb.validate.maxChar.length",
            },
          },
          {
            row: 2,
            type: "DATE_PICKER",
            name: "startDate",
            option: "DATE_YEAR_ONLY",
            value: "",
            label: "custom.flow.onb.label.eh.start.date",
            disabled: false,
            validation: {
              required: true,
              requiredMessage: "custom.flow.onb.validate.required.start",
            },
          },
          {
            row: 2,
            type: "DATE_PICKER",
            name: "endDate",
            option: "DATE_YEAR_ONLY",
            value: "",
            label: "custom.flow.onb.label.eh.end.date",
            disabled: false,
            validation: { required: false },
          },
          {
            row: 2,
            type: "DATE_DISABLER",
            name: "ongoing",
            value: false,
            target: "endDate",
            label: "custom.flow.onb.label.eh.present",
          },
        ],
      },
    },
    {
      component: "REPEATER",
      display: true,
      data: {
        type: "REPEATER",
        name: "c_h",
        showOn: ["PROFILE_TALENT", "PROFILE_MSP", "PROFILE_HIRING"],
        title: "custom.flow.onb.ch.title",
        subtitle: "custom.flow.onb.ch.subtitle",
        value: [],
        validation: {
          required: false,
          requiredMessage: "custom.flow.onb.validate.required.generic",
        },
        form: [
          {
            row: 0,
            type: "TEXT_FIELD",
            name: "title",
            value: "",
            label: "custom.flow.onb.label.ch.title",
            validation: {
              required: true,
              requiredMessage: "custom.flow.onb.validate.required.generic",
              maxCharLength: 255,
              maxCharLengthMessage: "custom.flow.onb.validate.maxChar.length",
            },
          },
          {
            row: 1,
            type: "TEXT_EDITOR",
            name: "description",
            value: "",
            label: "custom.flow.onb.label.ch.description",
            disabled: false,
            validation: {
              required: false,
              requiredMessage: "custom.flow.onb.validate.required.generic",
              maxCharLength: 4096,
              maxCharLengthMessage: "custom.flow.onb.validate.maxChar.length",
            },
          },
          {
            row: 2,
            type: "DATE_PICKER",
            name: "startDate",
            option: "DATE_YEAR_ONLY",
            value: "",
            label: "custom.flow.onb.label.ch.start.date",
            disabled: false,
            validation: {
              required: false,
              requiredMessage: "custom.flow.onb.validate.required.generic",
            },
          },
        ],
      },
    },
    {
      component: "PICKER_TAGS",
      display: true,
      data: {
        stepName: "skills",
        stepSequence: 5,
        row: 1,
        type: "PICKER_TAGS",
        name: "skill",
        value: ["Organizational Skills", "Communication Skills", "creative"],
        showOn: [
          "PROFILE_TALENT",
          "PROFILE_MSP",
          "PROFILE_HIRING",
          "LONG_ONBOARDING",
          "SHORT_ONBOARDING",
        ],
        title: "custom.flow.onb.skills.title",
        validation: {
          required: false,
          requiredMessage: "custom.flow.onb.validate.required.skills",
          maxCharLength: 1024,
          maxCharLengthMessage: "custom.flow.onb.validate.maxChar.length",
        },
      },
    },
    {
      component: "PICKER_TAGS",
      display: true,
      data: {
        stepName: "skills",
        stepSequence: 5,
        row: 2,
        type: "PICKER_TAGS",
        name: "soft",
        value: [
          "brands",
          "Illustration",
          "digital design",
          "Brand Identity",
          "Logo Design",
          "Typography",
          "marketing materials",
          "Marketing",
          "innovative",
          "ACADEMIC HISTORY",
          "Time Management Skills",
          "Web Design",
          "Imaging",
          "Animation",
          "Flash",
          "Advertising",
          "Graphic Design",
          "graphic",
        ],
        showOn: [
          "PROFILE_TALENT",
          "PROFILE_MSP",
          "PROFILE_HIRING",
          "LONG_ONBOARDING",
          "SHORT_ONBOARDING",
        ],
        title: "custom.flow.onb.tools.title",
        validation: {
          required: false,
          requiredMessage: "custom.flow.onb.validate.required.soft",
          maxCharLength: 1024,
          maxCharLengthMessage: "custom.flow.onb.validate.maxChar.length",
        },
      },
    },
    {
      component: "PICKER_TAGS",
      display: true,
      data: {
        stepName: "skills",
        type: "PICKER_TAGS",
        name: "ind",
        value: [],
        showOn: ["PROFILE_TALENT", "PROFILE_MSP", "PROFILE_HIRING"],
        title: "custom.flow.onb.ind.title",
        validation: {
          required: false,
          requiredMessage: "custom.flow.onb.validate.required.ind",
          maxCharLength: 1024,
          maxCharLengthMessage: "custom.flow.onb.validate.maxChar.length",
        },
      },
    },
    {
      component: "PICKER_LANGUAGE",
      display: true,
      data: {
        type: "PICKER_LANGUAGE",
        name: "language",
        value: [{ language: "en", proficiency: 0 }],
        showOn: ["PROFILE_TALENT", "PROFILE_MSP", "PROFILE_HIRING"],
        title: "custom.flow.onb.languages.title",
      },
    },
  ]);

  const pickerArray = computed(() => {
    const types = ["PICKER_TAGS", "PICKER_LANGUAGE"];
    const sections = generateSection(generateCvTab.value, types);
    return orderByTypeIndex(sections, types);
  });

  const generateSection = (section, types) => {
    const sectionArray = [];
    section.forEach((tab) => {
      const { type, value } = tab.data || {};
      const { display } = tab;
      const isArrayOrString =
        Array.isArray(value) || (!Array.isArray(value) && value);

      if (types.includes(type) && isArrayOrString && value.length && display) {
        sectionArray.push(tab);
      }
    });

    return sectionArray;
  };

  function orderByTypeIndex(sections, types) {
    return sections.sort((a, b) => {
      const indexA = types.indexOf(a.data?.type);
      const indexB = types.indexOf(b.data?.type);

      if (indexA === -1 && indexB === -1) return 0;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;

      return indexA - indexB;
    });
  }

  const workSumEduCertExperience = computed(() => {
    const types = ["SUMMARY", "WORK_EXPERIENCE", "EDUCATION", "CERTIFICATE"];
    const sections = generateSection(generateCvTab.value, types);

    return orderByTypeIndex(sections, types);
  });

  return { generateCvTab, pickerArray, workSumEduCertExperience };
}
