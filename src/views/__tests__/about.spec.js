import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import AboutView from "../AboutView.vue";
// import { toRaw } from "vue";


describe("a", () => {
    it("it test", async () => {
        expect(1 + 1).toBe(2);
        const wrapper = mount(AboutView);
        // await wrapper.find(".el-switch").trigger("click");
    });
});
