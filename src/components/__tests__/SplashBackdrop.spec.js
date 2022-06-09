import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import SplashBackdrop from "../SplashBackdrop.vue";
import IconHexagon from "../icons/IconHexagon.vue";

describe("Splash", () => {
  it("renders properly", () => {
    expect(SplashBackdrop).toBeTruthy();
    const wrapper = mount(SplashBackdrop);
    expect(wrapper.findComponent(IconHexagon).exists()).toBe(true);
  });
});
