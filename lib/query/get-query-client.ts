import { makeQueryClient } from "@/lib/query/query-client";
import { isServer, type QueryClient } from "@tanstack/react-query";

let browserQueryClient: QueryClient | undefined;

export function getQueryClient(): QueryClient {
    if (isServer) return makeQueryClient();
    return (browserQueryClient ??= makeQueryClient());
}
