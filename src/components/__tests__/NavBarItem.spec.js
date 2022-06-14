import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import NavBarItem from "@/components/NavBarItem.vue";
import constants from "@/assets/constants";

describe("NavBarItem", () => {
  it("renders properly", () => {
    expect(NavBarItem).toBeTruthy();
    const wrapper = mount(NavBarItem, {
      props: {
        msg: constants.NAVBAR_ITEM_ABOUT_TEXT,
      },
    });
    expect(wrapper.find("div").text()).toContain(
      constants.NAVBAR_ITEM_ABOUT_TEXT
    );
  });
});
