export function formatVisitTime(date: Date) {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();

    const minutes = Math.floor(diffMs / (1000 * 60));
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (minutes < 1) {
        return "épp most";
    }

    if (minutes < 60) {
        return `${minutes} perce`;
    }

    if (hours < 24) {
        return `${hours} órája`;
    }

    return `${days} napja`;
}
