import { Skeleton } from "@/features/_components/ui/skeleton";

export default function UsersScreenSkeleton() {
    return (
        <main className="blogs-page">
            <div className="grid grid-cols-3 gap-[1px]">
                {Array.from({ length: 50 }).map((_, index) => (
                    <div
                        key={index}
                        className="relative aspect-square overflow-hidden">
                        <Skeleton className="absolute inset-0 h-full w-full rounded-none" />
                    </div>
                ))}
            </div>
        </main>
    );
}
