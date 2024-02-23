<template>
  <div class="flex items-center space-x-2">
    <Icon :name="icon" width="12" height="12"></Icon>
    <a
      v-if="formattedHref"
      data-test-id="formatted-href"
      :href="formattedHref"
      class="text-vibrant-blue underline cursor-pointer text-xs"
      >{{ text }}</a
    >
    <span v-else data-test-id="no-ref" class="text-xs">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "IconTextItem",
  props: {
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "EMAIL",
      validator: function (value) {
        return [
          "ADDRESS",
          "MOBILE_NUMBER",
          "EMAIL",
          "LINKEDIN_HANDLE",
        ].includes(value.toUpperCase());
      },
    },
  },
  setup(props) {
    const icon = computed(() => {
      switch (props.type) {
        case "ADDRESS":
          return "mdi:map-marker-outline";
        case "MOBILE_NUMBER":
          return "mdi:phone-outline";
        case "EMAIL":
          return "mdi:email-outline";
        case "LINKEDIN_HANDLE":
          return "mdi:linkedin";
        default:
          return "";
      }
    });

    const formattedHref = computed(() => {
      switch (props.type) {
        case "MOBILE_NUMBER":
          return `tel:${props.text}`;
        case "EMAIL":
          return `mailto:${props.text}`;
        case "LINKEDIN_HANDLE":
          return `${props.text}`;
        default:
          return "";
      }
    });

    return { icon, formattedHref };
  },
};
</script>

<style></style>
