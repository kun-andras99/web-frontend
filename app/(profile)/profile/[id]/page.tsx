"use client";

interface UserPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function UserPage({ params }: UserPageProps) {
    return (
        <main>
            <h1>Felhasználó oldala</h1>
        </main>
    );
}
