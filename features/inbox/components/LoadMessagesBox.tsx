import type { Message } from "@/features/inbox/types/message.types";

interface LoadMessagesBoxProps {
    messages: Message[];
}

export default function LoadMessagesBox({ messages }: LoadMessagesBoxProps) {
    return (
        <div className="messages-list">
            {messages.map((message) => (
                <div key={message.id} className="message">
                    {message.content}
                </div>
            ))}
        </div>
    );
}
