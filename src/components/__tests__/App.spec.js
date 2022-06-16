import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import IconHexagon from "@/components/icons/IconHexagon.vue";
import App from "@/App.vue";
import { createTestingPinia } from "@pinia/testing";

describe("App", () => {
  it("renders properly", () => {
    const wrapper = mount(App, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    expect(wrapper.findComponent(IconHexagon).exists()).toBe(true);
  });
});
