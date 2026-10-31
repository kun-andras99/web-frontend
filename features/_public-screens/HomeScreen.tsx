"use client";

// import QuickLoginForm from "@/features/auth/components/forms/QuickLoginForm";
import { AUTH_ROUTES } from "@/features/auth/lib/constants";
// import ImageAvatarGroup from "@/features/image-avatar-group";
import Link from "next/link";

export default function HomeScreen() {
    return (
        <div className="main-container">
            {/* <span className="logo-text">
                <h1>KAMAFTU</h1>
                <span>People. Places. Connections.</span>
            </span> */}
            {/* <QuickLoginForm /> */}

            <div className="home-background">
                <div className="linear"></div>
                <div className="basic-home-text">
                    <p>Emberek.</p>
                    <p>Helyek.</p>
                    <p>Kapcsolatok.</p>
                    <p className="colored">Talán Ma Este.</p>
                </div>
            </div>
            <div className="main-min">
                <div className="not-registered">
                    <Link className="signup" href={AUTH_ROUTES.signUp}>
                        <button type="button">Create Account</button>
                    </Link>
                    <Link className="signin" href={AUTH_ROUTES.signIn}>
                        <button type="button">Log In</button>
                    </Link>
                </div>
                <div className="home-text">
                    <p className="gray">
                        Szeretnéd megismerni életed szerelmét, esetleg egy kis
                        szórakozásban vennél részt, vagy csak egy egyéjszakás
                        kikapcsolódásra vágysz?
                    </p>
                    <p>
                        Itt lehetőséged nyílik kortól - a jogszabályban
                        meghatározott korhatáron belül –, nemtől, nemi
                        identitástól és szexuális irányultságtól függetlenül új
                        embereket megismerni, kapcsolatokat kialakítani, és
                        önmagadat adni egy elfogadó közösségben.
                    </p>
                    <h2>Kik vagyunk mi?</h2>
                    <p>
                        A `név` csapata arról gondoskodik hogy a megszokott
                        internetes társkeresési élményt megtartva, azt tovább
                        fejlesztve és izgalmas lehetőségekkel megfűszerezve,
                        felhasználóink új módon fedezhessék fel az ismerkedés, a
                        kapcsolódás és az önfeledt szórakozás világát.
                    </p>
                    <p className="ss">
                        Nincs köntörfalazás. A hétköznapi ismerkedéstől a
                        legextrémebb vágyak felfedezéséig nálunk megtalálhatod a
                        számodra megfelelő élményt. Csatlakozhatsz csoportokhoz,
                        közös érdeklődésű embereket ismerhetsz meg,
                        flörtölhetsz, beszélgethetsz, és akár egy életre szóló
                        kapcsolatot is találhatsz.
                    </p>
                    <h2>Miben védünk?</h2>
                    <p>
                        Fontosnak tartjuk felhasználóin privát védelmét, ezért
                        teljes beállítási lehetőséget kínálunk láthatóság
                        szempontjából. Érdekünk és mindent megteszünk azért hogy
                        privát adatok ne kerüljenek ki.
                    </p>
                    <h2>Még ennyi sem elég?</h2>
                    <p>
                        Internetes ismerkedésből kilépve igazolt felhasználóink
                        professzionális módba kapcsolás után hozhatnak létre
                        eseményeket amelyek személyes megismerésre nyújthatnak
                        lehetőséget.
                        <br />
                        <span>Tudj meg többet...</span>
                    </p>
                </div>
                {/* <div className="bemutato">.</div> */}
                {/* <ImageAvatarGroup /> */}
                <div className="home-text">
                    <div className="footer-links">
                        <p>
                            <span>Rólunk</span>
                        </p>
                        <p>
                            <span>Adatvédelem</span>
                            <span>Felhasználási feltételek</span>
                            <span>Sütik</span>
                        </p>
                        <p>
                            <span>Profilok és helyadatok</span>
                        </p>
                        <p>
                            <span>Biztonságos ismerkedés</span>
                            <span>Biztonságos szex</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
