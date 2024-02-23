import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import IconTextItem from "@/components/resume/IconTextItem.vue";

describe("IconTextItem", () => {
  it("returns correct icon for EMAIL type", async () => {
    const wrapper = mount(IconTextItem, {
      props: {
        text: "example@example.com",
        type: "EMAIL",
      },
    });

    expect(wrapper.vm.icon).toBe("mdi:email-outline");
  });

  it("returns correct icon for ADDRESS type", async () => {
    const wrapper = mount(IconTextItem, {
      props: {
        text: "1234 Main St, City, Country",
        type: "ADDRESS",
      },
    });

    expect(wrapper.vm.icon).toBe("mdi:map-marker-outline");
  });

  it("returns correct icon for LINKEDIN_HANDLE type", async () => {
    const wrapper = mount(IconTextItem, {
      props: {
        text: "lucie/hello/linkedin",
        type: "LINKEDIN_HANDLE",
      },
    });

    expect(wrapper.vm.icon).toBe("mdi:linkedin");
  });

  it("returns correct icon for MOBILE_NUMBER type", async () => {
    const wrapper = mount(IconTextItem, {
      props: {
        text: "+49 1567652725",
        type: "MOBILE_NUMBER",
      },
    });

    expect(wrapper.vm.icon).toBe("mdi:phone-outline");
  });

  it("formats href for MOBILE_NUMBER type", async () => {
    const wrapper = mount(IconTextItem, {
      props: {
        text: "+49 1567652725",
        type: "MOBILE_NUMBER",
      },
    });

    expect(wrapper.vm.formattedHref).toBe(`tel:+49 1567652725`);
  });

  it("formats href for EMAIL type", async () => {
    const wrapper = mount(IconTextItem, {
      props: {
        text: "hola@gmail.com",
        type: "EMAIL",
      },
    });

    expect(wrapper.vm.formattedHref).toBe(`mailto:hola@gmail.com`);
  });

  it("formats href for LINKEDIN_HANDLE type", async () => {
    const wrapper = mount(IconTextItem, {
      props: {
        text: "hola/linkedin/lcuie/d28736175",
        type: "LINKEDIN_HANDLE",
      },
    });

    expect(wrapper.vm.formattedHref).toBe("hola/linkedin/lcuie/d28736175");
  });


  it("returns empty value by default", async () => {
    const wrapper = mount(IconTextItem, {
      props: {
        text: "hola@gmail.com",
        type: "ADDRESS",
      },
    });

    expect(wrapper.vm.formattedHref).toBe("");
  });
});
