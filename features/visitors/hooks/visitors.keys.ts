export const visitorKeys = {
    all: ["visitors"] as const,
    list: () => [...visitorKeys.all, "list"] as const,
    latest: () => [...visitorKeys.all, "latest"] as const,
};
