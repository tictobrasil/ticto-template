//@ts-nocheck
import * as React from "react";
import * as hooksProviders from "@/context";

const Providers = {
    ...hooksProviders,
};

const providers = Object.keys(Providers).reduce((acc, curr) => {
    if (!curr.includes("Provider")) return acc;
    const Component = Providers[curr];
    return [...acc, <Component />];
}, []);

export const Store: any = ({ children: initial }) =>
    providers.reduce(
        (children, parent) => React.cloneElement(parent, { children }),
        initial,
    );
