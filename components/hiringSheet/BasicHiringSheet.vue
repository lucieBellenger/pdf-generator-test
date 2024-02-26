<template>
  <PageLayout :is-divider="false" :date="currentDate" :is-randstad-logo="false">
    <template #content>
      <div class="flex flex-col space-y-4 mt-5">
        <template v-for="question in questions" :key="question.id">
          <BasicBox
            :label-name="question.questionLabel"
            :answers="question.answers"
          />
        </template>
      </div>
    </template>
  </PageLayout>
</template>

<script>
import BasicBox from "~/components/hiringSheet/BasicBox";
import PageLayout from "~/components/common/PageLayout";


export default {
  name: "BasicHiringSheet",
  components: { BasicBox, PageLayout },
  props: {
    questions: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const { currentDate } = useDate();

    return { currentDate };
  },
};
</script>

<style></style>
