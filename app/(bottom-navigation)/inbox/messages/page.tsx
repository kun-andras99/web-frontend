import { messages } from "@/features/(main-menus)/inbox/data/messages.data";
import MessagesScreen from "@/features/(main-menus)/inbox/screens/messages";

export default function MessagesPage() {
    return <MessagesScreen messages={messages} />;
}
