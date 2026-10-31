import { TabConfig } from "@/features/(app)/(ui)/tabs/types";

export const VISITORS_TABS = [
    {
        id: "views",
        label: "Views",
    },
    {
        id: "wink",
        label: "Wink",
    },
] as const satisfies readonly TabConfig<string>[];

export type VisitorsTabs = (typeof VISITORS_TABS)[number]["id"];
