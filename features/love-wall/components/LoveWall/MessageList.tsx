import MessageBox from "@/features/love-wall/components/LoveWall/MessageBox";
import { LoveMessage } from "@/features/love-wall/types";

interface Props {
    messages: LoveMessage[];
    reportedIds: ReadonlySet<string>;
    hasMore: boolean;
    isLoadingMore: boolean;
    onReport: (id: string) => void;
    onLoadMore: () => void;
}

export default function MessageList({
    messages,
    reportedIds,
    hasMore,
    isLoadingMore,
    onReport,
    onLoadMore,
}: Props) {
    if (messages.length === 0) {
        return (
            <p className="messages-empty">
                Még nincs üzenet a falon. Írj te elsőként!
            </p>
        );
    }

    return (
        <>
            <ol
                className="messages"
                aria-live="polite"
                aria-relevant="additions">
                {messages.map((message) => (
                    <MessageBox
                        key={message.id}
                        message={message}
                        isReported={reportedIds.has(message.id)}
                        onReport={onReport}
                    />
                ))}
            </ol>

            {hasMore && (
                <button
                    type="button"
                    className="load-more"
                    onClick={onLoadMore}
                    disabled={isLoadingMore}>
                    {isLoadingMore ? "Betöltés…" : "Régebbi üzenetek"}
                </button>
            )}
        </>
    );
}
