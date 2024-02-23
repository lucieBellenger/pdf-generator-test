<template>
  <div class="flex flex-col" :class="[fontColor]">
    <h3 class="font-semibold text-sm pb-4">{{ title }}</h3>
    <ul class="list-none font-light text-xxs">
      <li v-for="(item, idx) in formattedList" :key="idx">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ListSection",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    fontColor: {
      type: String,
      default: "text-white",
    },
    title: {
      type: String,
      default: "Skill",
    },
    type: {
      type: String,
      default: "",
      validator: (value) => {
        ["PICKER_TAGS", "PICKER_LANGUAGE"].includes(value);
      },
    },
  },
  setup(props) {
    const formattedList = computed(() => {
      return props.type === "PICKER_TAGS" ? props.list : getLanguageInfos(props.list);
    });
    
    const languageLevel = {
      0: "Beginner",
      1: "Intermediate",
      2: "Advanced",
      3: "Fluent",
    };

    const getLanguageInfos = (list) => {
      return list.map((lang) => `${lang.language}: ${languageLevel[lang.proficiency]}`);
    };

    return { formattedList };
  },
};
</script>

<style></style>
