import { seededRandom } from "@/features/_components/carousel/news-carousel/lib/seededRandom";

export function shuffleArray<T>(array: T[], seed: number): T[] {
    const shuffled = [...array];
    const random = seededRandom(seed);

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));

        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}
