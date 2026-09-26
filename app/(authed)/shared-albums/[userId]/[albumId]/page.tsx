interface SharedAlbumPageProps {
    params: Promise<{
        userId: string;
        albumId: string;
    }>;
}

export default async function SharedAlbumPage({
    params,
}: SharedAlbumPageProps) {
    const { userId, albumId } = await params;

    // console.log(userId, albumId);

    // userId
    // albumId

    return <div>Shared album</div>;
}
