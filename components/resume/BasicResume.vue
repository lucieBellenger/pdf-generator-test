<template>
  <PageLayout>
    <template v-slot:content>
      <div class="flex justify-between items-start py-5">
        <div class="flex flex-col">
          <div class="flex flex-col">
            <h1 class="text-lg font-semibold">{{ fullName }}</h1>
            <p class="text-sm font-light">{{ jobTitle }}</p>
          </div>
          <IconTextItem
            v-for="(link, idx) in contactLinks"
            class="mt-1"
            :key="idx"
            :text="link.text"
            :type="link.type"
          />
        </div>
        <talent-picture></talent-picture>
      </div>
      <div class="grid grid-cols-3">
        <div class="bg-blue-grey-800 flex-1 space-y-3 py-4 px-2">
          <ListSection
            v-for="(item, idx) in pickerArray"
            :key="`picker__${idx}`"
            :title="item.data.title"
            :list="item.data.value"
            :type="item.data.type"
          />
        </div>
        <div class="col-span-2 space-y-6 pl-4">
          <BlockTitle
            v-for="item in workSumEduCertExperience"
            :title="item.data.title"
          >
            <BasicSection
              v-if="item.data.type === 'SUMMARY'"
              :type="item.data.type"
              :summary="item.data.value"
            >
            </BasicSection>
            <template v-else>
              <BasicSection
                :type="item.data.type"
                v-for="(entry, idx) in item.data.value"
                :key="idx"
                class="mb-2"
                :education-entry="item.data.type === 'EDUCATION' ? entry : {}"
                :work-experience="
                  item.data.type === 'WORK_EXPERIENCE' ? entry : {}
                "
                :certificate="item.data.type === 'CERTIFICATE' ? entry : {}"
              >
              </BasicSection>
            </template>
          </BlockTitle>
        </div>
      </div>
    </template>
  </PageLayout>
</template>

<script>
import BasicDivider from "~/components/common/BasicDivider";
import IconTextItem from "~/components/resume/IconTextItem";
import ListSection from "~/components/resume/ListSection";
import TalentPicture from "~/components/resume/TalentPicture";
import BlockTitle from "~/components/resume/BlockTitle";
import BasicSection from "~/components/resume/BasicSection";
import PageLayout from "~/components/common/PageLayout";

export default {
  name: "BasicResume",
  components: {
    BasicDivider,
    IconTextItem,
    TalentPicture,
    ListSection,
    BlockTitle,
    BasicSection,
    PageLayout,
  },
  props: {
    clientName: {
      type: String,
      default: "philips",
    },
  },
  setup(props) {
    const { fullName, jobTitle, fullAddress, contactLinks } = useTalent(
      props.talentData
    );
    const { pickerArray, workSumEduCertExperience } = useResume();

    const totalPages = ref(0);

    onMounted(() => {
      totalPages.value = getTotalPages();
      totalPages.value;
    });

    const getTotalPages = () => {
      const pageHeightMM = 297;
      const DPI = 96;
      const totalHeight = document.documentElement.scrollHeight;
      const pageHeightPX = (pageHeightMM / 25.4) * DPI;
      return Math.ceil(totalHeight / pageHeightPX);
    };

    return {
      fullName,
      jobTitle,
      fullAddress,
      contactLinks,
      pickerArray,
      workSumEduCertExperience,
      totalPages,
    };
  },
};
</script>

<style scoped>
@page {
  size: A4;
  margin: 0;
}
</style>
