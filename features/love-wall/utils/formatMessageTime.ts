const formatter = new Intl.DateTimeFormat("hu-HU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    // Fix időzóna: szerver és kliens ugyanazt rendereli, nincs hydration mismatch
    timeZone: "Europe/Budapest",
});

/** "2026.07.15 14:30" */
export function formatMessageTime(iso: string): string {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return "";

    const parts = Object.fromEntries(
        formatter.formatToParts(date).map(({ type, value }) => [type, value]),
    );

    return `${parts.year}.${parts.month}.${parts.day} ${parts.hour}:${parts.minute}`;
}
