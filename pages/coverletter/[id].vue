<template>
  <BasicCoverLetter :full-name="fullName" :motivation="formattedMotivation" />
</template>

<script>
import BasicCoverLetter from "~/components/coverLetter/BasicCoverLetter.vue";

export default {
  components: { BasicCoverLetter },
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
    const applicationStore = useApplicationStore();
    const talentStore = useTalentStore();

    const route = useRoute();

    onMounted(() => {
      applicationStore.setSelectedApplicationId(Number(route.params.id));
    });
    const selectedTalentId = computed(() => applicationStore.selectedTalentId);
    const { fullName } = useTalent();

    watch(
      selectedTalentId.value,
      (newVal) => {
        if (newVal) {
          talentStore.setSelectedTalentId(newVal);
        }
      },
      { immediate: true }
    );

    const formatMotivation = (motivationString) => {
      return motivationString.replace(/\n/g, "<br>");
    };

    const formattedMotivation = computed(() => {
      return formatMotivation(applicationStore.motivation);
    });

    return { fullName, formattedMotivation };
  },
};
</script>

<style></style>
