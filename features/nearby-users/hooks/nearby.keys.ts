export const nearbyKeys = {
    all: ["nearby-users"] as const,
    list: () => [...nearbyKeys.all, "list"] as const,
};
