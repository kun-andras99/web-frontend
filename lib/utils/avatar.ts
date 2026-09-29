const firstChar = (word: string) => Array.from(word)[0] ?? "";

export function getInitials(name: string): string {
    const words = name.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return "?";

    const first = firstChar(words[0]);
    const last = words.length > 1 ? firstChar(words[words.length - 1]) : "";
    return (first + last).toUpperCase();
}

/** Determinisztikus színárnyalat: ugyanaz a user mindig ugyanolyan színű. */
export function hueFromString(value: string): number {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
        hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
    }
    return hash % 360;
}
