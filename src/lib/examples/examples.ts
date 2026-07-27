import type { Component } from "svelte";
import Basic from "./basic.svelte";
import { Simple } from ".";
import Vertical from "./vertical.svelte";

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
    }
]