<template>
  <div class="break-inside-avoid">
    <div v-if="type === 'WORK_EXPERIENCE'" class="flex flex-col">
      <div class="flex items-center text-xs">
        <h3 class="flex items-center space-x-1">
          <span class="font-semibold">{{ workExperience.title }}</span>
          <span>{{ workExperience.organization }}</span>
        </h3>
      </div>
      <div class="flex items-center">
        <h4 class="flex items-center text-xxs space-x-1">
          <span>{{ workExperience.startDate }}</span>
          <span>-</span>
          <span> {{ workExperience.endDate }}</span>
          <span v-if="workExperienceDuration">{{
            workExperienceDuration
          }}</span>
        </h4>
      </div>
      <div class="mt-1.5 text-xs" v-html="workExperience.description" />
    </div>
    <div v-else-if="type === 'EDUCATION'" class="flex flex-col">
      <h3 class="font-semibold text-xs">{{ educationEntry.title }}</h3>
      <h4 class="text-xxs">{{ educationEntry.school }}</h4>
      <div class="flex items-center space-x-1 text-xxs">
        <span>{{ educationEntry.startDate }}</span>
        <span>-</span>
        <span>{{ educationEntry.endDate }}</span>
      </div>
      <div v-html="educationEntry.description" class="text-xs"></div>
    </div>
    <div v-else-if="type === 'SUMMARY'">
      <div class="text-xs" v-html="summary" />
    </div>
    <div v-else-if="type === 'CERTIFICATE'">
      <h3 class="font-semibold text-xs">{{ certificate.title }}</h3>
      <div class="text-xs" v-html="certificate.description" />
      <p class="text-xxs">{{ certificate.startDate }}</p>
    </div>
  </div>
</template>

<script>
import { formatDuration } from "date-fns";

export default {
  name: "BasicSection",
  props: {
    workExperience: {
      type: Object,
      default: () => {},
    },
    summary: {
      type: String,
      default: "",
    },
    educationEntry: {
      type: Object,
      default: () => {},
    },
    certificate: {
      type: Object,
      default: () => {},
    },
    type: {
      type: String,
      default: "SUMMARY",
      validator: (value) => {
        ["WORK_EXPERIENCE", "EDUCATION", "SUMMARY", "CERTIFICATE"].includes(
          value
        );
      },
    },
  },
  setup(props) {
    const { getFormattedDuration } = useDate();
    const workExperienceDuration = computed(() => {
      if (props.workExperience.startDate && props.workExperience.endDate) {
        // const duration = "2 years";
        const duration = getFormattedDuration(
          props.workExperience.startDate,
          props.workExperience.endDate
        );
        return `(${duration})`;
      } else {
        return "";
      }
    });
    return { workExperienceDuration };
  },
};
</script>

<style></style>
