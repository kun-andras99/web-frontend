// import { SubmitButton } from "@/features/auth/components/submit-button";
import { ProfileGallery } from "@/features/profile/types/gallery.types";
import { ProfileUser } from "@/features/profile/types/profile.types";
import Image from "next/image";

interface AlbumsViewProps {
    user: ProfileUser;
    galleries: ProfileGallery[];
    isOwnProfile: boolean;
}

export default function AlbumsView({
    user,
    galleries,
    isOwnProfile,
}: AlbumsViewProps) {
    return (
        <div className="mx-auto my-[15px] grid w-[calc(100%-30px)] grid-cols-2 gap-3">
            {galleries.length > 0 ? (
                galleries.map((gallery) => {
                    const coverImage = gallery.images[0];

                    const isPrivateForViewer =
                        gallery.visibility === "PRIVATE" && !isOwnProfile;

                    return (
                        <div
                            key={gallery.id}
                            className="relative h-52 w-full overflow-hidden rounded-2xl bg-neutral-900">
                            {coverImage ? (
                                <Image
                                    src={coverImage.url}
                                    alt={gallery.name}
                                    fill
                                    className={`object-cover transition-transform duration-300 ${
                                        isPrivateForViewer
                                            ? "scale-105 blur-[10px] brightness-[0.3]"
                                            : "hover:scale-105"
                                    }`}
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center text-sm text-neutral-500">
                                    Nincs kép
                                </div>
                            )}

                            {isPrivateForViewer && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                                        Privát album
                                    </div>
                                </div>
                            )}

                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 pt-12">
                                <h2 className="text-base font-semibold text-white">
                                    {gallery.name}
                                </h2>

                                <span className="text-sm text-white/70">
                                    {gallery.images.length} kép
                                </span>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="col-span-2 text-center text-sm text-neutral-500">
                    Nincs albumod létrehozva
                </div>
            )}
        </div>
    );
}
