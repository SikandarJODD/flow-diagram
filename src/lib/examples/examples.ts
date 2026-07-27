import type { Component } from "svelte";
import Basic from "./basic.svelte";
import { Simple } from ".";
import Vertical from "./vertical.svelte";
import VerticalParallel from "./vertical-parallel.svelte";
import CustomNodeStyling from "./custom-node-styling.svelte";
import ComplexFlow from "./complex-flow.svelte";
import CustomAnchorPoints from "./custom-anchor-points.svelte";
import PlanningLargeDiagrams from "./planning-large-diagrams.svelte";
import DisabledNodes from "./disabled-nodes.svelte";
import ParallelNodeAdjustment from "./parallel-node-adjustment.svelte";
import NestedNodeList from "./nested-node-list.svelte";

type Example = {
    name: string;
    component: Component;
}

export const examples: Example[] = [
    {
        name: "Basic",
        component: Basic
    },
    {
        name: "Simple",
        component: Simple,
    },
    {
        name: "Vertical",
        component: Vertical
    },
    {
        name: "Vertical with Parallel Nodes",
        component: VerticalParallel,
    },
    {
        name: " Custom Node Styling",
        component: CustomNodeStyling,
    },
    {
        name: "Complex Flow",
        component: ComplexFlow
    },
    {
        name: "Custom Anchor Points",
        component: CustomAnchorPoints,
    },
    {
        name: "Planning large diagrams",
        component: PlanningLargeDiagrams,
    },
    {
        name: "Disabled Nodes",
        component: DisabledNodes,
    },
    {
        name:'Parallel Node Adjustment',
        component: ParallelNodeAdjustment
    },
    {
        name: "Nested Nodes List",
        component: NestedNodeList
    }
]