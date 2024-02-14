<template>
  <div v-if="talent" :id="`talent-cover__${talentId}`" class="w-full h-full">
    <div class="container mx-auto py-8 px-4 w-full h-full">
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h1 v-if="fullName" class="text-3xl font-semibold">{{ fullName }}</h1>
        <p v-if="jobTitle" class="text-gray-600">{{ jobTitle }}</p>
        <ul
          v-if="links && links.length"
          class="list-disc list-inside text-gray-700"
        >
          <li
            v-for="(link, index) in links"
            :key="index"
            class="flex items-center space-x-2"
          >
            <Icon :id="`icon__${idx}`" name="material-symbols:captive-portal" />
            <a :href="link.url" class="text-blue-500 hover:underline">{{ link.name }}</a>
          </li>
        </ul>

        <hr class="my-4" />
        <div v-if="summary">
          <h2 class="text-xl font-semibold mb-2">Summary</h2>
          <p class="text-gray-700">
            {{ summary }}
          </p>
        </div>
        <div v-if="motivation" class="mt-4 mb-2">
          <h2 class="text-xl font-semibold mb-2">Motivation</h2>
          <p class="text-gray-700">
            {{ motivation }}
          </p>
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
          href: fontUrl,
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
    const jobTitle = computed(() => selectedTalent.value?.jobTitle || []);
    const summary = computed(() => selectedTalent.value?.summary || "");
    const motivation = computed(() => selectedTalent.value?.motivation || "");
    const coverLetter = computed(() => selectedTalent.value?.coverLetter || "");

    return {
      fullName,
      links,
      coverLetter,
      summary,
      jobTitle,
      talent: selectedTalent,
      talentId: store.selectedTalentId,
      motivation,
      fontFamily,
    };
  },
};
</script>

<style scoped>
html,
body {
  font-family: v-bind(fontFamily);
}
</style>
