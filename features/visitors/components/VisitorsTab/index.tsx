import { useTabNavigation } from "@/features/(app)/(ui)/tabs/useTabNavigation";
import { useTabs } from "@/features/(app)/(ui)/tabs/useTabs";
import WinkContent from "@/features/visitors/components/VisitorsTab/Content/Wink";
import { VISITORS_TABS } from "@/features/visitors/hooks/visitors-tab.keys";

export default function VisitorsTab() {
    const { tabs, activeTab, activeIndex, goToTab } = useTabs(VISITORS_TABS);
    const { tabsRef, navigateToTab } = useTabNavigation({
        activeTab,
        goToTab,
    });
    return (
        <section className="w-full ">
            {/* Tab navigáció */}
            <div
                ref={tabsRef}
                className="flex w-full gap-2 overflow-x-auto sticky top-0 zIndex-5"
                role="tablist"
                aria-label="Visitors">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            id={`visitors-tab-${tab.id}`}
                            type="button"
                            role="tab"
                            data-tab-id={tab.id}
                            aria-selected={isActive}
                            aria-controls={`visitors-panel-${tab.id}`}
                            onClick={() => navigateToTab(tab.id)}
                            className={[
                                "shrink-0 rounded-full px-5 py-2.5",
                                "text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-sky-500 text-white"
                                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200",
                            ].join(" ")}>
                            {tab.label}
                        </button>
                    );
                })}
            </div>

            {/* Aktív tab tartalma */}
            <div
                id={`visitors-panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`visitors-tab-${activeTab}`}
                className="mt-4">
                {activeTab === "views" && <div>Profilmegtekintők tartalma</div>}

                {activeTab === "wink" && <WinkContent />}
            </div>
        </section>
    );
}
