<template>
  <div class="flex-col bg-gray-100 flex p-2">
    <span class="text-xs">{{ formattedLabel }}</span>
    <div class="flex items-center space-x-2 text-sm">
      <span
        v-for="(answer, idx) in answers"
        :key="`question-id-${id}__${idx}`"
        class="text-sm"
        >{{ answer.value }}</span
      >
      <FieldLabel :field-name="labelName" />
    </div>
  </div>
</template>

<script>
import FieldLabel from "~/components/hiringSheet/FieldLabel";
export default {
  name: "BasicBox",
  components: { FieldLabel },
  props: {
    id: {
      type: Number,
      default: 0,
    },
    labelName: {
      type: String,
      default: "Name",
    },
    answers: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const formattedLabel = computed(() => `${props.labelName}: `);
    return { formattedLabel };
  },
};
</script>

<style></style>
