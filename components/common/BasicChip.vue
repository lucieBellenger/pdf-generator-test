<template>
  <div class="bg-gray-100 px-2 py-1 text-xxs">{{ formattedRateInfos }}</div>
</template>

<script>
export default {
  name: "BasicChip",
  setup() {
    const { formattedRateInfos } = useRate();

    return { formattedRateInfos };
  },
};
</script>

<style></style>
