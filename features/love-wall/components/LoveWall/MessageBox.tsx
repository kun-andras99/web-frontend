import Avatar from "@/features/love-wall/components/LoveWall/Avatar";
import ReportButton from "@/features/love-wall/components/LoveWall/ReportButton";
import { ANONYMOUS_NAME } from "@/features/love-wall/constants";
import { LoveMessage } from "@/features/love-wall/types";
import { formatMessageTime } from "@/features/love-wall/utils/formatMessageTime";

interface Props {
    message: LoveMessage;
    isReported: boolean;
    onReport: (id: string) => void;
}

/** `<li>`-t renderel, a MessageList `<ol>`-jába illeszkedik. */
export default function MessageBox({ message, isReported, onReport }: Props) {
    const { id, nickname, avatarUrl, createdAt, status } = message;
    const isSending = status === "sending";

    return (
        <li className={`message${isSending ? " message--sending" : ""}`}>
            <div className="avatar-container">
                <Avatar src={avatarUrl} />
            </div>

            <div className="wrapper">
                <div className="up-container">
                    <div className="info">
                        <span className="author">
                            {nickname ?? ANONYMOUS_NAME}
                        </span>
                        <span aria-hidden="true">·</span>
                        <time className="time" dateTime={createdAt}>
                            {isSending
                                ? "Küldés…"
                                : formatMessageTime(createdAt)}
                        </time>
                    </div>

                    {!isSending && (
                        <ReportButton
                            reported={isReported}
                            onConfirm={() => onReport(id)}
                        />
                    )}
                </div>

                <div className="message-content">
                    <p>{message.message}</p>
                </div>
            </div>
        </li>
    );
}
