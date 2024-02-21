<template>
  <img src="assets/user.jpeg" :class="[width, height, borderRadius]" class="object-cover" />
</template>

<script>
export default {
  name: "TalentPicture",
  props: {
    src: {
      type: String,
      required: '/user.jpeg',
    },
    width: {
      type: String,
      default: "w-[85px]",
    },
    height: {
      type: String,
      default: "h-[85px]",
    },
    borderRadius: {
      type: String,
      default: "rounded",
    },
  },
};
</script>

<style></style>
