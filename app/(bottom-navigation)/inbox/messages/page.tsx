import { messages } from "@/features/inbox/data/messages.data";
import MessagesScreen from "@/features/inbox/screens/messages";

export default function MessagesPage() {
    return <MessagesScreen messages={messages} />;
}
