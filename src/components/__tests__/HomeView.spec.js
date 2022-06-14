import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import HomeView from "@/views/HomeView.vue";

describe("HomeView", () => {
  it("renders properly", () => {
    const wrapper = mount(HomeView);
    expect(wrapper.find('[data-test="greeting"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="description"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="farewell"]').exists()).toBe(true);
  });
});
