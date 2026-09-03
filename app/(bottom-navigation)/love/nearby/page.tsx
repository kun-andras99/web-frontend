import { getAllUsers } from "@/features/user/user-api";

export default async function ExploreNearbyPage() {
    const users = await getAllUsers();
    console.info(users);
    return (
        <>
            explore page
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <UsersNearbyScreen users={users} /> */}
        </>
    );
}
