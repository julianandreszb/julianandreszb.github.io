import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";
import IconHexagon from "@/components/icons/IconHexagon.vue";
import constants from "@/assets/constants";

import { createTestingPinia } from "@pinia/testing";

describe("NavBar", () => {
  it("renders properly", () => {
    expect(NavBar).toBeTruthy();
    const wrapper = mount(NavBar, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    expect(wrapper.findComponent(IconHexagon).exists()).toBe(true);

    const navBarItemAbout = wrapper.get('[data-test="nav-bar-item-about"]');
    expect(navBarItemAbout.text()).toBe(constants.NAVBAR_ITEM_ABOUT_TEXT);

    const navBarItemPortfolio = wrapper.get(
      '[data-test="nav-bar-item-portfolio"]'
    );
    expect(navBarItemPortfolio.text()).toBe(
      constants.NAVBAR_ITEM_PORTFOLIO_TEXT
    );

    const navBarItemContact = wrapper.get('[data-test="nav-bar-item-contact"]');
    expect(navBarItemContact.text()).toBe(constants.NAVBAR_ITEM_CONTACT_TEXT);
  });
});
