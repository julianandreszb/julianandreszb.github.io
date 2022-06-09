import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";
import IconHexagon from "@/components/icons/IconHexagon.vue";

describe("NavBar", () => {
  it("renders properly", () => {
    expect(NavBar).toBeTruthy();
    const wrapper = mount(NavBar);
    expect(wrapper.findComponent(IconHexagon).exists()).toBe(true);
  });
});
