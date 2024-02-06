<template>
  <div
    v-if="talent"
    :id="`talent-resume__${talentId}`"
    class="print:my-8 print:mx-auto print:max-w-full print:p-0 g-gray-100 font-sans"
  >
    <div class="container mx-auto py-8 px-4 w-full h-full">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h1 v-if="fullName" class="text-3xl font-semibold">{{ fullName }}</h1>
        <p v-if="jobTitle" class="text-gray-600">{{ jobTitle }}</p>
        <ul
          v-if="links && links.length"
          class="list-disc list-inside text-gray-700"
        >
          <li v-for="(link, index) in links" :key="index">
            <a :href="link" class="text-blue-500 hover:underline">{{ link }}</a>
          </li>
        </ul>

        <hr class="my-4" />
        <div v-if="summary">
          <h2 class="text-xl font-semibold mb-2">Summary</h2>
          <p class="text-gray-700">
            {{ summary }}
          </p>
        </div>
        <div v-if="skills && skills.length">
          <h2 class="text-xl font-semibold mt-4 mb-2">Skills</h2>
          <ul class="list-disc list-inside text-gray-700">
            <li v-for="(skill, index) in skills" :key="index">
              {{ skill }}
            </li>
          </ul>
        </div>
        <div v-if="tools && tools.length">
          <h2 class="text-xl font-semibold mt-4 mb-2">Tools</h2>
          <ul class="list-disc list-inside text-gray-700">
            <li v-for="(tool, index) in tools" :key="index">
              {{ tool }}
            </li>
          </ul>
        </div>

        <div v-if="workExperiences && workExperiences.length">
          <h2 class="text-xl font-semibold mt-4 mb-2">Experience</h2>
          <div
            v-for="(workExperience, index) in workExperiences"
            :key="index"
            class="mb-4"
          >
            <h3 class="text-lg font-semibold">
              {{ workExperience.jobTitle }} - {{ workExperience.companyName }}
            </h3>
            <p class="text-gray-700">
              {{ workExperience.description }}
            </p>
            <p class="text-gray-600">
              {{ workExperience.from }} - {{ workExperience.to }}
            </p>
          </div>
        </div>

        <div v-if="education && education.length">
          <h2 class="text-xl font-semibold mt-4 mb-2">Education</h2>
          <div v-for="(degree, index) in education" :key="index" class="mb-4">
            <h3 class="text-lg font-semibold">
              {{ degree.degreeName }}
            </h3>
            <p class="text-gray-700">{{ degree.universityName }}e</p>
            <p class="text-gray-600">{{ degree.graduationYear }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const store = useTalentStore();

    const route = useRoute();

    onMounted(() => {
      store.setSelectedTalentId(Number(route.params.id));
    });
    const selectedTalent = computed(() => store.selectedTalent);

    const fullName = computed(
      () =>
        `${selectedTalent.value?.firstName} ${selectedTalent.value?.lastName}` ||
        ""
    );
    const links = computed(() => selectedTalent.value?.links || []);
    const summary = computed(() => selectedTalent.value?.summary || "");
    const jobTitle = computed(() => selectedTalent.value?.jobTitle || "");

    const tools = computed(() => selectedTalent.value?.tools || []);
    const skills = computed(() => selectedTalent.value?.skills || []);
    const workExperiences = computed(
      () => selectedTalent.value?.workExperiences || []
    );
    const education = computed(() => selectedTalent.value?.education || []);

    return {
      fullName,
      links,
      tools,
      skills,
      workExperiences,
      education,
      summary,
      jobTitle,
      talent: selectedTalent,
      talentId: store.selectedTalentId,
    };
  },
};
</script>

<style scoped>
@media print {
  /* Adjustments for the content to fit within A4 size */
  .print\:my-8 {
    margin-top: 2cm !important;
    margin-bottom: 2cm !important;
  }

  .print\:mx-auto {
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .print\:max-w-full {
    max-width: 100% !important;
  }

  .print\:p-0 {
    padding: 0 !important;
  }
}
</style>
