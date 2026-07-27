import type { Component } from "svelte";
import Basic from "./basic.svelte";
import { Simple } from ".";
import Vertical from "./vertical.svelte";
import VerticalParallel from "./vertical-parallel.svelte";
import CustomNodeStyling from "./custom-node-styling.svelte";

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
    }
]