import { shuffleArray } from "@/features/(app)/(ui)/carousel/news-carousel/lib/shuffleArray";

export function getRandomItems<T>(
    array: T[],
    count: number,
    seed: number,
): T[] {
    return shuffleArray(array, seed).slice(0, count);
}
