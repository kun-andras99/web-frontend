import Link from "next/link";

export default function HomeScreen() {
    return (
        <div>
            {process.env.DATABASE_URL}
            <h2 className="small-title">Welcome here.</h2>
            <p>
                <Link href={`/sign-in`}>Click here to login.</Link>
            </p>
            <p>
                <Link href={`/sign-up`}>Click here to register.</Link>
            </p>
        </div>
    );
}
