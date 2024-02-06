<script>
import PreviewPdf from "~/components/PreviewPdf.vue";

export default {
  components: { PreviewPdf },
  setup() {
    const store = useTalentStore();
    const pdfUrl = ref("");
    const talent = computed(() => store.selectedTalent);

    const toNumber = (value) => {
      return Number(value.data) || 0;
    };

    const createPDF = async () => {
      try {
        const data = await $fetch(`/api/generate-cv/${talent.value.id}`, {
          responseType: "arraybuffer",
        });
      } catch (error) {
        console.error("Error generating PDF:", error.message);
      }
    };

    const createCoverLetter = async () => {
      try {
        const data = await $fetch(`/api/generate-letter/${talent.value.id}`, {
          responseType: "arraybuffer",
        });

        console.log(data);
      } catch (error) {
        console.error("Error generating PDF:", error.message);
      }
    };

    const splitPDFs = async () => {
      try {
        const data = await $fetch(`/api/split-pdfs/${talent.value.id}`, {
          responseType: "arraybuffer",
        });

        console.log(data);
      } catch (error) {
        console.error("Error generating PDF:", error.message);
      }
    };

    const generateMergedPDF = async () => {
      try {
        const { data } = await useFetch(
          `/api/generate-merged/${talent.value.id}`,
          {
            responseType: "arraybuffer",
          }
        );

        pdfUrl.value = data.data;
      } catch (error) {
        console.error("Error generating PDF:", error.message);
      }
    };

    return {
      createPDF,
      toNumber,
      setSelectedTalentId: store.setSelectedTalentId,
      talent,
      setMotivation: store.setMotivationById,
      createCoverLetter,
      splitPDFs,
      generateMergedPDF,
      pdfUrl,
    };
  },
};
</script>

<template>
  <div class="px-2 py-2 space-x-2 flex">
    <input
      type="number"
      class="border-blue-500 border-b-2 px-2 py-1"
      @input="setSelectedTalentId(toNumber($event))"
    />
    <div class="px-2 py-2 space-x-2">
      <button
        class="bg-blue-400 text-white px-2 py-1 rounded-md"
        @click="createPDF"
      >
        GENERATE PDF CV
      </button>
      <button
        class="bg-blue-400 text-white px-2 py-1 rounded-md"
        @click="createCoverLetter"
      >
        GENERATE PDF COVER LETTER
      </button>
      <button
        class="bg-blue-400 text-white px-2 py-1 rounded-md"
        @click="generateMergedPDF"
      >
        GENERATE MERGED PDFs
      </button>
      <button
        class="bg-blue-400 text-white px-2 py-1 rounded-md"
        @click="splitPDFs"
      >
        SPLIT PDFs
      </button>
    </div>
    <!-- <preview-pdf :src="pdfUrl"></preview-pdf> -->
  </div>
</template>
