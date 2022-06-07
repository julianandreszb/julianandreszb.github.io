import { describe, it, expect } from "vitest";
import constants from "@/assets/constants";

import { mount } from "@vue/test-utils";
import IconHexagon from "@/components/icons/IconHexagon.vue";

describe("IconHexagon", () => {
  it("renders properly", () => {
    expect(IconHexagon).toBeTruthy();
    const wrapper = mount(IconHexagon);
    expect(wrapper.find("#hexagon tspan").text()).toContain(
      constants.HEXAGON_ICON_TEXT
    );
  });
});
