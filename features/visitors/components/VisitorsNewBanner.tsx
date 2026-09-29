interface VisitorsNewBannerProps {
    onClick: () => void;
    isLoading: boolean;
}

export default function VisitorsNewBanner({
    onClick,
    isLoading,
}: VisitorsNewBannerProps) {
    return (
        <div
            className="fixed bottom-120 left-120 z-10 flex justify-center py-2"
            role="status">
            <button
                type="button"
                onClick={onClick}
                disabled={isLoading}
                className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow-lg transition-opacity disabled:opacity-60">
                {isLoading ? "Betöltés..." : "Új látogatók ↑"}
            </button>
        </div>
    );
}
