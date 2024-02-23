<template>
  <PageLayout>
    <template #header>
      <div class="flex justify-between items-center">
        <ProjectTitleId></ProjectTitleId>
        <BasicChip></BasicChip>
      </div>
    </template>
    <template #content>
      <div class="flex justify-center mt-8">
        <div class="flex flex-col space-y-4 w-[450px]">
          <h1 class="text-xl font-semibold">{{ fullName }}</h1>
          <h3 class="font-semibold">Motivation</h3>
          <div class="flex flex-col text-justify text-xs" v-html="motivation" />
        </div>
      </div>
    </template>
  </PageLayout>
</template>

<script>
import PageLayout from "~/components/common/PageLayout";
import ProjectTitleId from "~/components/common/ProjectTitleId.vue";
import BasicChip from "~/components/common/BasicChip.vue";

export default {
  name: "BasicCoverLetter",
  components: { PageLayout, ProjectTitleId, BasicChip },
  props: {
    motivation: {
      type: String,
      default: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. `,
    },
    fullName: {
      type: String,
      default: "Lucie Bellenger",
    },
  },
};
</script>

<style></style>
