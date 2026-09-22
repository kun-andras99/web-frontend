import { getCurrentUser } from "@/features/auth/lib/session";
import { getProfileByUserId } from "@/features/profile/data/profile";

export default async function MePage() {
    const user = await getCurrentUser();

    if (!user) {
        return null;
    }

    const profile = await getProfileByUserId(user.id);

    console.log({ profile });

    if (!profile) {
        return null;
    }

    return (
        <main>
            <h1>Felhasználó oldala</h1>
            {/* <p>{profile.userData?.nickname}</p>
            <p>{profile.userData?.bio}</p>

            <p>Kapcsolat: {profile.relationshipStatus}</p>

            <h2>Mit keres?</h2>

            {profile.lookingFor.map((item) => (
                <div key={item.id}>{item.value}</div>
            ))}

            <h2>Milyen nem érdekli?</h2>

            {profile.genderInterest.map((item) => (
                <div key={item.id}>{item.value}</div>
            ))}

            <h2>Milyen szexualitás érdekli?</h2>

            {profile.sexualityInteres.map((item) => (
                <div key={item.id}>{item.value}</div>
            ))} */}
        </main>
    );
}
