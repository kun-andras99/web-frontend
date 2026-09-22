interface ResetPasswordScreenProps {
    token?: string;
}

export function ResetPasswordScreen({ token }: ResetPasswordScreenProps) {
    return (
        <section>
            <h1>Új jelszó beállítása</h1>
        </section>
    );
}
