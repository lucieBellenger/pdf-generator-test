<template>
  <BasicCoverLetter :full-name="fullName" />
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
    const store = useTalentStore();
    const route = useRoute();

    onMounted(() => {
      store.setSelectedTalentId(Number(route.params.id));
    });

    const { fullName } = useTalent();

    return { fullName };
  },
};
</script>

<style></style>
