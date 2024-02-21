<template>
  <div
    :id="`talent-resume__${talentId}`"
    class="h-[297mm] w-[210mm] p-12"
    :style="{ fontFamily: fontFamily + ', sans-serif !important' }"
  >
    <div class="flex">
      <div class="mt-8 grid w-[40%] h-full-print bg-blue-500 text-white p-8">
        <div class="flex flex-col">
          <div class="grid gap-8">
            <p class="text-4xl font-semibold">{{ fullName }}</p>
          </div>
          <div v-if="jobTitle" class="flex items-center mt-3 space-x-1">
            <Icon id="emoji" name="🔥" />

            <p class="font-light uppercase text-xs">{{ jobTitle }}</p>
          </div>
          <div v-if="links && links.length" class="pt-10">
            <div
              v-for="(link, idx) in links"
              :key="`link__${idx}`"
              class="flex items-center gap-2 pt-4 text-sm font-light"
            >
              <Icon
                :id="`icon__${idx}`"
                name="material-symbols:captive-portal"
              />
              <a :href="link.url" target="_blank">
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
        <div v-if="skills && skills.length" class="flex flex-col gap-5 pt-10">
          <p class="text-2xl font-medium">Skills</p>
          <div class="flex flex-col gap-5">
            <div v-for="(skill, idx) in skills" :key="`skill__${idx}`">
              <div class="flex flex-col gap-2">
                <p class="text-xs">{{ skill }}</p>
                <div class="flex flex-row gap-1">
                  <div
                    v-for="i in 6"
                    :key="`level__${i}`"
                    class="h-3 w-3 rounded-full"
                    :class="i <= 4 ? 'bg-blue-200' : 'bg-white'"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="tools && tools.length" class="flex flex-col gap-5 pt-10">
          <p class="text-2xl font-medium">Tools</p>
          <div class="flex flex-col gap-5">
            <div v-for="(tool, idx) in tools" :key="`tool__${idx}`">
              <div class="flex flex-col gap-2">
                <p class="text-xs">{{ tool }}</p>
                <div class="flex flex-row gap-1">
                  <div
                    v-for="i in 6"
                    :key="`level-tool__${i}`"
                    class="h-3 w-3 rounded-full"
                    :class="i <= 4 ? 'bg-blue-200' : 'bg-white'"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div v-if="summary" class="pl-10 pt-8">
          <p class="text-2xl font-semibold">Summary</p>
          <p class="pt-4 text-sm font-light">
            {{ summary }}
          </p>
        </div>
        <div v-if="education && education.length" class="pl-10 pt-10">
          <p class="text-2xl font-semibold">Education</p>
          <div
            v-for="(edu, idx) in education"
            :key="`education__${idx}`"
            class="flex flex-col"
          >
            <div class="flex items-center justify-between pt-4">
              <p class="text-sm font-light">
                {{ edu.degreeName }}
              </p>
              <p class="text-xs font-light">{{ edu.graduationYear }}</p>
            </div>
            <p class="pt-1 font-medium">{{ edu.universityName }}</p>
          </div>
        </div>
        <div
          v-if="workExperiences && workExperiences.length"
          class="pl-10 pt-10"
        >
          <p class="text-2xl font-semibold">Work Experience</p>
          <div
            v-for="(workExperience, idx) in workExperiences"
            :key="`work-experience__${idx}`"
          >
            <div class="flex items-center justify-between pt-4">
              <p class="text-sm font-light">{{ workExperience.companyName }}</p>
              <p class="text-xs font-light">
                {{ workExperience.from }} - {{ workExperience.to }}
              </p>
            </div>
            <div>
              <p class="pt-1 font-medium">{{ workExperience.jobTitle }}</p>
              <p class="pt-3 text-xs">
                {{ workExperience.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const { fontFamily, fontUrl } = useFonts();

    useHead({
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: true,
        },
        {
          rel: "stylesheet",
          href: fontUrl.value,
        },
      ],
    });

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
      fontFamily,
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

<style>
@page {
  size: A4;
  margin: 0;
}
@media print {
  .h-full-print {
    height: calc(100vh - 140px);
  }

  html,
  body {
    width: 210mm;
    height: 297mm;
  }
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
