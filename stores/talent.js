import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTalentStore = defineStore("talent", () => {
  const talents = ref([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      jobTitle: "Software Engineer",
      links: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/johndoe" },
        { name: "GitHub", url: "https://github.com/johndoe" },
      ],
      summary:
        "Experienced software engineer with a passion for web development.",
      skills: ["JavaScript", "React", "Node.js"],
      tools: ["VSCode", "Git"],
      workExperiences: [
        {
          jobTitle: "Full Stack Developer",
          companyName: "Tech Co.",
          description: "Developed and maintained web applications.",
          from: "2020-01-01",
          to: "2022-12-31",
        },
      ],
      education: [
        {
          degreeName: "Bachelor of Science in Computer Science",
          universityName: "University of Tech",
          graduationYear: "2019-05-01",
        },
      ],
      motivation:
        "As an experienced software engineer, I am passionate about web development and enjoy tackling complex challenges in the field. My goal is to continuously learn and contribute to innovative projects.",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      jobTitle: "UX Designer",
      links: [{ name: "Portfolio", url: "https://www.janesmith.design" }],
      summary:
        "Passionate UX designer creating user-centered and visually appealing designs.",
      skills: ["UI/UX Design", "Prototyping", "Usability Testing"],
      workExperiences: [
        {
          jobTitle: "UX Designer",
          companyName: "Design Studio",
          description: "Designed intuitive and engaging user interfaces.",
          from: "2018-06-01",
          to: "2021-02-28",
        },
      ],
      education: [
        {
          degreeName: "Master of Fine Arts in Design",
          universityName: "Creative University",
          graduationYear: "2018-05-15",
        },
      ],
    },
    {
      id: 3,
      firstName: "Alex",
      lastName: "Johnson",
      jobTitle: "Marketing Specialist",
      summary:
        "Marketing professional with a focus on digital marketing strategies.",
      skills: ["Digital Marketing", "Social Media Management"],
      motivation:
        "I am excited to embark on a journey of learning and growth. Being in the tech industry, I am enthusiastic about exploring new skills and technologies to stay at the forefront of innovation.",
    },
    {
      id: 4,
      firstName: "Eva",
      lastName: "Brown",
      jobTitle: "Frontend Developer",
      links: [
        { name: "Portfolio", url: "https://www.evabrown.dev" },
        { name: "GitHub", url: "https://github.com/evabrown" },
      ],
      summary:
        "Frontend developer passionate about creating responsive and user-friendly web applications.",
      skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
      tools: ["Git", "VsCode", "Nuxt"],

      workExperiences: [
        {
          jobTitle: "Frontend Developer",
          companyName: "Tech Startup",
          description: "Built and maintained modern web applications.",
          from: "2019-09-01",
          to: "2023-03-31",
        },
        {
          jobTitle: "Frontend Developer",
          companyName: "Tech Startup",
          description: "Built and maintained modern web applications.",
          from: "2019-09-01",
          to: "2023-03-31",
        },
        {
          jobTitle: "Frontend Developer",
          companyName: "Tech Startup",
          description: "Built and maintained modern web applications.",
          from: "2019-09-01",
          to: "2023-03-31",
        },
        {
          jobTitle: "Frontend Developer",
          companyName: "Tech Startup",
          description: "Built and maintained modern web applications.",
          from: "2019-09-01",
          to: "2023-03-31",
        },
        {
          jobTitle: "Frontend Developer",
          companyName: "Tech Startup",
          description: "Built and maintained modern web applications.",
          from: "2019-09-01",
          to: "2023-03-31",
        },
        {
          jobTitle: "Frontend Developer",
          companyName: "Tech Startup",
          description: "Built and maintained modern web applications.",
          from: "2019-09-01",
          to: "2023-03-31",
        },
      ],
      education: [
        {
          degreeName: "Bachelor of Science in Computer Science",
          universityName: "Tech University",
          graduationYear: "2019-06-15",
        },
        {
          degreeName: "Bachelor of Science in Computer Science",
          universityName: "Tech University",
          graduationYear: "2019-06-15",
        },
      ],
    },
    {
      id: 5,
      firstName: "Sarah",
      lastName: "Jones",
      jobTitle: "Data Scientist",
      links: [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/sarahjones" },
      ],
      summary:
        "Data scientist with expertise in machine learning and statistical analysis.",
      skills: ["Python", "Machine Learning", "Data Analysis"],
      tools: ["Jupyter", "TensorFlow"],
      workExperiences: [
        {
          jobTitle: "Data Scientist",
          companyName: "Data Analytics Inc.",
          description:
            "Applied machine learning techniques to analyze large datasets.",
          from: "2020-03-01",
          to: "2022-11-30",
        },
      ],
      motivation:
        "With expertise in data science, I am dedicated to applying machine learning techniques for insightful data analysis. My focus is on leveraging data to drive informed decision-making and solve real-world problems.",
      education: [
        {
          degreeName: "Master of Science in Data Science",
          universityName: "Data University",
          graduationYear: "2020-02-15",
        },
      ],
    },
    {
      id: 6,
      firstName: "Mike",
      lastName: "Taylor",
      jobTitle: "Graphic Designer",
      summary:
        "Creative graphic designer specializing in branding and digital illustrations.",
      skills: ["Graphic Design", "Illustration", "Branding"],
      motivation:
        "As a creative graphic designer, I am passionate about crafting visually appealing designs that resonate with users. My expertise lies in branding and digital illustrations, where I bring ideas to life through compelling visuals.",
    },
    {
      id: 7,
      firstName: "Chris",
      lastName: "White",
      jobTitle: "Backend Developer",
      links: [{ name: "GitHub", url: "https://github.com/chriswhite" }],
      skills: ["Java", "Spring Boot", "MongoDB"],
      tools: ["IntelliJ", "Postman"],
      workExperiences: [
        {
          jobTitle: "Backend Developer",
          companyName: "Tech Solutions",
          description:
            "Developed server-side logic and integrated with databases.",
          from: "2018-09-01",
          to: "2023-05-31",
        },
        {
          jobTitle: "Backend Developer",
          companyName: "Tech Solutions",
          description:
            "Developed server-side logic and integrated with databases.",
          from: "2018-09-01",
          to: "2023-05-31",
        },
        {
          jobTitle: "Backend Developer",
          companyName: "Tech Solutions",
          description:
            "Developed server-side logic and integrated with databases.",
          from: "2018-09-01",
          to: "2023-05-31",
        },
        {
          jobTitle: "Backend Developer",
          companyName: "Tech Solutions",
          description:
            "Developed server-side logic and integrated with databases.",
          from: "2018-09-01",
          to: "2023-05-31",
        },
        {
          jobTitle: "Backend Developer",
          companyName: "Tech Solutions",
          description:
            "Developed server-side logic and integrated with databases.",
          from: "2018-09-01",
          to: "2023-05-31",
        },
        {
          jobTitle: "Backend Developer",
          companyName: "Tech Solutions",
          description:
            "Developed server-side logic and integrated with databases.",
          from: "2018-09-01",
          to: "2023-05-31",
        },
        {
          jobTitle: "Backend Developer",
          companyName: "Tech Solutions",
          description:
            "Developed server-side logic and integrated with databases.",
          from: "2018-09-01",
          to: "2023-05-31",
        },
        {
          jobTitle: "Backend Developer",
          companyName: "Tech Solutions",
          description:
            "Developed server-side logic and integrated with databases.",
          from: "2018-09-01",
          to: "2023-05-31",
        },
        {
          jobTitle: "Backend Developer",
          companyName: "Tech Solutions",
          description:
            "Developed server-side logic and integrated with databases.",
          from: "2018-09-01",
          to: "2023-05-31",
        },
        {
          jobTitle: "Backend Developer",
          companyName: "Tech Solutions",
          description:
            "Developed server-side logic and integrated with databases.",
          from: "2018-09-01",
          to: "2023-05-31",
        },
        {
          jobTitle: "Backend Developer",
          companyName: "Tech Solutions",
          description:
            "Developed server-side logic and integrated with databases.",
          from: "2018-09-01",
          to: "2023-05-31",
        },
      ],
      education: [
        {
          degreeName: "Bachelor of Science in Computer Science",
          universityName: "Tech University",
          graduationYear: "2018-06-30",
        },
        {
          degreeName: "Bachelor of Science in Computer Science",
          universityName: "Tech University",
          graduationYear: "2018-06-30",
        },
        {
          degreeName: "Bachelor of Science in Computer Science",
          universityName: "Tech University",
          graduationYear: "2018-06-30",
        },
        {
          degreeName: "Bachelor of Science in Computer Science",
          universityName: "Tech University",
          graduationYear: "2018-06-30",
        },
        {
          degreeName: "Bachelor of Science in Computer Science",
          universityName: "Tech University",
          graduationYear: "2018-06-30",
        },
        {
          degreeName: "Bachelor of Science in Computer Science",
          universityName: "Tech University",
          graduationYear: "2018-06-30",
        },
      ],
      motivation:
        "Building scalable and efficient backend solutions is my forte. With skills in Java, Spring Boot, and MongoDB, I enjoy developing server-side logic and integrating systems to create robust and reliable applications.",
    },
    {
      id: 8,
      firstName: "Megan",
      lastName: "Clark",
      jobTitle: "Content Writer",
      summary:
        "Experienced content writer with a focus on creating engaging and informative content.",
      skills: ["Content Writing", "SEO"],
      workExperiences: [
        {
          jobTitle: "Content Writer",
          companyName: "Digital Marketing Agency",
          description: "Produced high-quality content for various clients.",
          from: "2017-05-15",
          to: "2021-12-31",
        },
      ],
      education: [
        {
          degreeName: "Bachelor of Arts in English",
          universityName: "Literature College",
          graduationYear: "2017-04-30",
        },
      ],
      motivation:
        "With a background in content writing, I am experienced in producing high-quality and engaging content. My focus is on creating informative and compelling narratives that captivate audiences and deliver value.",
    },
    {
      id: 9,
      firstName: "Ryan",
      lastName: "Williams",
      jobTitle: "Mobile App Developer",
      links: [{ name: "Portfolio", url: "https://www.ryanwilliams.dev" }],
      summary:
        "Mobile app developer specializing in Android and iOS development.",
      skills: ["Android", "iOS", "React Native"],
      tools: ["Android Studio", "Xcode"],
      workExperiences: [
        {
          jobTitle: "Mobile App Developer",
          companyName: "App Tech",
          description:
            "Developed and maintained mobile applications for clients.",
          from: "2019-02-01",
          to: "2023-06-30",
        },
      ],
      education: [
        {
          degreeName: "Master of Science in Mobile App Development",
          universityName: "Tech University",
          graduationYear: "2019-01-15",
        },
      ],
    },
    {
      id: 10,
      firstName: "Emma",
      lastName: "Miller",
      jobTitle: "UI/UX Designer",
      links: [{ name: "Portfolio", url: "https://www.emmamiller.design" }],
      skills: ["UI Design", "Wireframing", "User Research"],
      workExperiences: [
        {
          jobTitle: "UI/UX Designer",
          companyName: "Design Innovations",
          description:
            "Created visually appealing and user-friendly interfaces.",
          from: "2020-07-01",
          to: "2023-04-30",
        },
      ],
      education: [
        {
          degreeName: "Bachelor of Fine Arts in Design",
          universityName: "Art & Design College",
          graduationYear: "2020-06-15",
        },
      ],
    },
  ]);

  const setMotivationById = (id, value) => {
    const talent = talents.value.find((talent) => talent.id === id);

    if (talent) {
      talent.motivation = value;
    }

    console.log(talent?.motivation);
  };
  const selectedTalentId = ref(null);

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
