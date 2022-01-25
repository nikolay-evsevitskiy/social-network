import React from "react";
import {Paginator} from "./Paginator";
import {create} from "react-test-renderer";

describe("Paginator component tests", () => {
    test("page count is 11 but should be showed only 10", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} currentPage={3}
                                            onPageChanged={() => {
                                            }}/>)
        const root = component.root
        let spans = root.findAllByType("span")
        expect(spans.length).toBe(10)
    })
    test("if page count is more then 10 button NEXT should be present", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} currentPage={3}
                                            onPageChanged={() => {
                                            }}/>)
        const root = component.root
        let button = root.findAllByType("button")
        expect(button.length).toBe(1)
    })
})