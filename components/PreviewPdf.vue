<template>
  <!-- <embed
    :src="`${$config.BASE_URL}/pdfs/merged/result__7.pdf`,"
    type="application/pdf"
    frameBorder="0"
    scrolling="auto"
    height="100%"
    width="100%"
    class="h-screen w-screen"
  /> -->
</template>

<script>
export default {
  name: "PreviewPDF",
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
