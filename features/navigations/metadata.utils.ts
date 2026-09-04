import { APP_BOTTOM_BAR_ROUTES } from "@/features/navigations/navigation.config";
import { getPageTitle } from "@/features/navigations/navigation.utils";
import type { Metadata } from "next";

/**
 * A Next.js Metadata API-hoz (export const metadata / generateMetadata)
 * készít cím-metaadatot a navigation configból — így a böngésző tab címe
 * (SEO title, <title> tag) is szinkronban marad a header címével, anélkül
 * hogy duplikálnád a stringet minden page.tsx-ben.
 *
 * Ezért maradt a `getPageTitle` / `resolveNavigation` teljesen React-mentes:
 * a `useHeader` hook csak Client Component-ben működik, a Metadata API
 * viszont szerver oldalon fut, ahol hookok nem elérhetők.
 */
export function createPageTitleMetadata(
    pathname: string,
    fallbackTitle = "",
): Metadata {
    return {
        title: getPageTitle(pathname, APP_BOTTOM_BAR_ROUTES, fallbackTitle),
    };
}
