import type {
    BlogDTO,
    BlogDetailDTO,
} from "@/features/blogs/repository/blogsDTO";

const mockAuthors = [
    {
        id: "mock-user-01",
        username: "alex",
        nickname: "Alex",
        avatarUrl: "https://i.pravatar.cc/300?img=12",
    },
    {
        id: "mock-user-02",
        username: "nora",
        nickname: "Nóra",
        avatarUrl: "https://i.pravatar.cc/300?img=47",
    },
    {
        id: "mock-user-03",
        username: "david",
        nickname: "Dávid",
        avatarUrl: "https://i.pravatar.cc/300?img=11",
    },
    {
        id: "mock-user-04",
        username: "maria",
        nickname: "Maria",
        avatarUrl: "https://i.pravatar.cc/300?img=32",
    },
    {
        id: "mock-user-05",
        username: "adam",
        nickname: "Ádám",
        avatarUrl: "https://i.pravatar.cc/300?img=8",
    },
    {
        id: "mock-user-06",
        username: "lilla",
        nickname: "Lilla",
        avatarUrl: "https://i.pravatar.cc/300?img=44",
    },
    {
        id: "mock-user-07",
        username: "mark",
        nickname: "Márk",
        avatarUrl: "https://i.pravatar.cc/300?img=13",
    },
    {
        id: "mock-user-08",
        username: "emma",
        nickname: "Emma",
        avatarUrl: "https://i.pravatar.cc/300?img=45",
    },
    {
        id: "mock-user-09",
        username: "bence",
        nickname: "Bence",
        avatarUrl: "https://i.pravatar.cc/300?img=14",
    },
    {
        id: "mock-user-10",
        username: "sophie",
        nickname: "Sophie",
        avatarUrl: "https://i.pravatar.cc/300?img=48",
    },
];

const mockBlogs: BlogDetailDTO[] = [
    {
        id: "mock-blog-01",
        authorId: "mock-user-01",
        title: "Miért olyan nehéz manapság valódi kapcsolatot találni?",
        content:
            "Sokszor úgy érezzük, hogy rengeteg ember vesz körül minket, mégis nehéz megtalálni azt, akivel valóban egy hullámhosszon vagyunk. Talán nem is az a probléma, hogy kevés lehetőségünk van, hanem az, hogy túl sok.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-01",
                name: "kapcsolatok",
            },
            {
                id: "mock-tag-02",
                name: "ismerkedés",
            },
        ],
        likeCount: 24,
        createdAt: "2026-09-24T18:30:00.000Z",
        updatedAt: "2026-09-24T18:30:00.000Z",
        author: mockAuthors[0],
    },

    {
        id: "mock-blog-02",
        authorId: "mock-user-02",
        title: "Az első üzenet művészete",
        content:
            "Egy új ismeretségnél az első üzenet sok mindent meghatározhat. Nem kell tökéletesnek lennie. Sokkal fontosabb, hogy legyen benne valami személyes, őszinte és olyan, amire a másik fél könnyen tud reagálni.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-03",
                name: "chat",
            },
            {
                id: "mock-tag-04",
                name: "tippek",
            },
        ],
        likeCount: 41,
        createdAt: "2026-09-24T14:15:00.000Z",
        updatedAt: "2026-09-24T14:15:00.000Z",
        author: mockAuthors[1],
    },

    {
        id: "mock-blog-03",
        authorId: "mock-user-03",
        title: "Online ismerkedés: mire figyeljünk?",
        content:
            "Az online ismerkedés rengeteg lehetőséget ad, ugyanakkor fontos, hogy közben saját határainkra és biztonságunkra is figyeljünk. Adjunk időt a másik megismerésére, és ne érezzük kötelezőnek azt, hogy mindent azonnal megosszunk.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-05",
                name: "biztonság",
            },
            {
                id: "mock-tag-06",
                name: "online-ismerkedés",
            },
        ],
        likeCount: 67,
        createdAt: "2026-09-23T20:45:00.000Z",
        updatedAt: "2026-09-23T20:45:00.000Z",
        author: mockAuthors[2],
    },

    {
        id: "mock-blog-04",
        authorId: "mock-user-04",
        title: "Lehet barátságból szerelem?",
        content:
            "Vannak kapcsolatok, amelyek egy egyszerű beszélgetéssel kezdődnek, majd idővel valami sokkal mélyebbé válnak. De vajon szükségszerű-e, hogy a barátságból szerelem legyen?",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-07",
                name: "szerelem",
            },
            {
                id: "mock-tag-08",
                name: "barátság",
            },
        ],
        likeCount: 19,
        createdAt: "2026-09-23T12:20:00.000Z",
        updatedAt: "2026-09-23T12:20:00.000Z",
        author: mockAuthors[3],
    },

    {
        id: "mock-blog-05",
        authorId: "mock-user-05",
        title: "Amikor valaki tényleg kíváncsi rád",
        content:
            "Talán az egyik legjobb érzés, amikor nem csak kérdeznek, hanem valóban figyelnek is a válaszodra. Egy jó beszélgetésben nem kell szerepet játszanod.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-09",
                name: "beszélgetés",
            },
            {
                id: "mock-tag-10",
                name: "érzelmek",
            },
        ],
        likeCount: 32,
        createdAt: "2026-09-22T17:10:00.000Z",
        updatedAt: "2026-09-22T17:10:00.000Z",
        author: mockAuthors[4],
    },

    {
        id: "mock-blog-06",
        authorId: "mock-user-06",
        title: "Egy jó randi nem a tökéletességről szól",
        content:
            "Sokan túl nagy elvárásokkal érkeznek egy első találkozóra. Pedig egy randi lényege nem az, hogy minden tökéletes legyen, hanem hogy két ember jól érezze magát egymás társaságában.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-11",
                name: "randi",
            },
            {
                id: "mock-tag-12",
                name: "ismerkedés",
            },
        ],
        likeCount: 53,
        createdAt: "2026-09-22T10:00:00.000Z",
        updatedAt: "2026-09-22T10:00:00.000Z",
        author: mockAuthors[5],
    },

    {
        id: "mock-blog-07",
        authorId: "mock-user-07",
        title: "Mitől lesz érdekes egy profil?",
        content:
            "Egy profil nem önéletrajz. Sokkal inkább egy rövid bemutatkozás arról, hogy milyen ember vagy, mit szeretsz és milyen kapcsolatokra vagy nyitott.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-13",
                name: "profil",
            },
            {
                id: "mock-tag-14",
                name: "tippek",
            },
        ],
        likeCount: 28,
        createdAt: "2026-09-21T19:40:00.000Z",
        updatedAt: "2026-09-21T19:40:00.000Z",
        author: mockAuthors[6],
    },

    {
        id: "mock-blog-08",
        authorId: "mock-user-08",
        title: "A humor szerepe az ismerkedésben",
        content:
            "Egy közös nevetés sokszor gyorsabban oldja fel a feszültséget, mint bármilyen előre megírt bemutatkozó szöveg. A humor természetesen nem mindenkinek ugyanazt jelenti, de a közös ritmus sokat számít.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-15",
                name: "humor",
            },
            {
                id: "mock-tag-16",
                name: "randi",
            },
        ],
        likeCount: 36,
        createdAt: "2026-09-21T09:25:00.000Z",
        updatedAt: "2026-09-21T09:25:00.000Z",
        author: mockAuthors[7],
    },

    {
        id: "mock-blog-09",
        authorId: "mock-user-09",
        title: "Amikor túl sokat gondolkodunk egy üzeneten",
        content:
            "Megírod, kitörlöd, újra megírod, aztán még húsz percig nézed a küldés gombot. Ismerős? Néha éppen az egyszerűség teszi természetessé a beszélgetést.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-17",
                name: "chat",
            },
            {
                id: "mock-tag-18",
                name: "mindennapok",
            },
        ],
        likeCount: 21,
        createdAt: "2026-09-20T21:15:00.000Z",
        updatedAt: "2026-09-20T21:15:00.000Z",
        author: mockAuthors[8],
    },

    {
        id: "mock-blog-10",
        authorId: "mock-user-10",
        title: "Miért fontosak a közös érdeklődési körök?",
        content:
            "Nem szükséges mindenben egyformán gondolkodnunk. Egy kapcsolat sokkal érdekesebb lehet akkor, ha vannak közös pontok, de közben mindkét félnek megmarad a saját világa.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-19",
                name: "kapcsolat",
            },
            {
                id: "mock-tag-20",
                name: "hobbi",
            },
        ],
        likeCount: 45,
        createdAt: "2026-09-20T14:50:00.000Z",
        updatedAt: "2026-09-20T14:50:00.000Z",
        author: mockAuthors[9],
    },

    {
        id: "mock-blog-11",
        authorId: "mock-user-01",
        title: "Első találkozás egy kávézóban",
        content:
            "Egy nyugodt kávézó tökéletes hely lehet arra, hogy két ember először találkozzon. Nincs túl nagy nyomás, lehet beszélgetni, és ha jól alakul, a találkozó könnyen folytatódhat egy sétával.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-21",
                name: "randi",
            },
            {
                id: "mock-tag-22",
                name: "budapest",
            },
        ],
        likeCount: 62,
        createdAt: "2026-09-19T18:05:00.000Z",
        updatedAt: "2026-09-19T18:05:00.000Z",
        author: mockAuthors[0],
    },

    {
        id: "mock-blog-12",
        authorId: "mock-user-02",
        title: "Hogyan legyünk önmagunk?",
        content:
            "Az online térben könnyű egy tökéletesebb változatát mutatni magunknak. Hosszú távon azonban sokkal egyszerűbb úgy kapcsolatot építeni, ha már az elején vállaljuk azt, akik valójában vagyunk.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-23",
                name: "önismeret",
            },
            {
                id: "mock-tag-24",
                name: "kapcsolatok",
            },
        ],
        likeCount: 38,
        createdAt: "2026-09-19T11:30:00.000Z",
        updatedAt: "2026-09-19T11:30:00.000Z",
        author: mockAuthors[1],
    },

    {
        id: "mock-blog-13",
        authorId: "mock-user-03",
        title: "A lassú ismerkedés előnyei",
        content:
            "Nem kell minden kapcsolatot azonnal meghatározni. Néha sokkal érdekesebb hagyni, hogy a dolgok természetes módon alakuljanak.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-25",
                name: "ismerkedés",
            },
            {
                id: "mock-tag-26",
                name: "kapcsolatok",
            },
        ],
        likeCount: 29,
        createdAt: "2026-09-18T16:20:00.000Z",
        updatedAt: "2026-09-18T16:20:00.000Z",
        author: mockAuthors[2],
    },

    {
        id: "mock-blog-14",
        authorId: "mock-user-04",
        title: "Amikor egy beszélgetés egész estére szól",
        content:
            "Van az a beszélgetés, amikor egyszer csak azt veszed észre, hogy eltelt három óra. Talán ezek azok a pillanatok, amikor valóban elkezdünk kapcsolódni egymáshoz.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-27",
                name: "beszélgetés",
            },
            {
                id: "mock-tag-28",
                name: "kapcsolódás",
            },
        ],
        likeCount: 74,
        createdAt: "2026-09-18T08:10:00.000Z",
        updatedAt: "2026-09-18T08:10:00.000Z",
        author: mockAuthors[3],
    },

    {
        id: "mock-blog-15",
        authorId: "mock-user-05",
        title: "Miért számít annyit az első benyomás?",
        content:
            "Az első benyomás gyorsan kialakul, de nem feltétlenül végleges. Egy ember megismeréséhez mindig több kell néhány másodpercnél.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-29",
                name: "első-benyomás",
            },
            {
                id: "mock-tag-30",
                name: "ismerkedés",
            },
        ],
        likeCount: 17,
        createdAt: "2026-09-17T20:30:00.000Z",
        updatedAt: "2026-09-17T20:30:00.000Z",
        author: mockAuthors[4],
    },

    {
        id: "mock-blog-16",
        authorId: "mock-user-06",
        title: "A bizalom lassan épül",
        content:
            "A bizalom nem egyetlen nagy gesztusból születik. Sok apró, következetes pillanatból áll össze: abból, hogy figyelünk egymásra és tiszteletben tartjuk a másik határait.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-31",
                name: "bizalom",
            },
            {
                id: "mock-tag-32",
                name: "kapcsolat",
            },
        ],
        likeCount: 51,
        createdAt: "2026-09-17T13:45:00.000Z",
        updatedAt: "2026-09-17T13:45:00.000Z",
        author: mockAuthors[5],
    },

    {
        id: "mock-blog-17",
        authorId: "mock-user-07",
        title: "Mitől működik egy hosszú távú kapcsolat?",
        content:
            "Nincs egyetlen recept. Kommunikáció, figyelem, humor, közös élmények és az a képesség, hogy konfliktus esetén is képesek legyünk egymásra figyelni.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-33",
                name: "hosszútáv",
            },
            {
                id: "mock-tag-34",
                name: "kapcsolat",
            },
        ],
        likeCount: 83,
        createdAt: "2026-09-16T18:40:00.000Z",
        updatedAt: "2026-09-16T18:40:00.000Z",
        author: mockAuthors[6],
    },

    {
        id: "mock-blog-18",
        authorId: "mock-user-08",
        title: "Randi ötletek a hétköznapokra",
        content:
            "Nem minden randihoz kell drága étterem vagy különleges program. Egy séta, közös főzés vagy egy spontán kávézás is emlékezetes lehet.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-35",
                name: "randiötletek",
            },
            {
                id: "mock-tag-36",
                name: "programok",
            },
        ],
        likeCount: 47,
        createdAt: "2026-09-16T12:15:00.000Z",
        updatedAt: "2026-09-16T12:15:00.000Z",
        author: mockAuthors[7],
    },

    {
        id: "mock-blog-19",
        authorId: "mock-user-09",
        title: "Miért jó új embereket megismerni?",
        content:
            "Minden új ember egy új történet. Néha egyetlen beszélgetés is elég ahhoz, hogy más szemszögből lássunk valamit.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-37",
                name: "emberek",
            },
            {
                id: "mock-tag-38",
                name: "közösség",
            },
        ],
        likeCount: 34,
        createdAt: "2026-09-15T21:00:00.000Z",
        updatedAt: "2026-09-15T21:00:00.000Z",
        author: mockAuthors[8],
    },

    {
        id: "mock-blog-20",
        authorId: "mock-user-10",
        title: "Amikor nem kell kimondani mindent",
        content:
            "Néha egy pillantás, egy mosoly vagy egy csendes pillanat többet mond, mint egy hosszú üzenet. A kapcsolat egyik szépsége, hogy idővel kialakulnak ezek a kimondatlan dolgok.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-39",
                name: "érzelmek",
            },
            {
                id: "mock-tag-40",
                name: "kapcsolódás",
            },
        ],
        likeCount: 56,
        createdAt: "2026-09-15T09:35:00.000Z",
        updatedAt: "2026-09-15T09:35:00.000Z",
        author: mockAuthors[9],
    },

    {
        id: "mock-blog-21",
        authorId: "mock-user-01",
        title: "Hogyan kezeljük a visszautasítást?",
        content:
            "A visszautasítás kellemetlen lehet, de egy ismerkedés során természetes része annak, hogy mindenki keresi azt az embert, akivel valóban működik a kapcsolat.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-41",
                name: "önismeret",
            },
            {
                id: "mock-tag-42",
                name: "ismerkedés",
            },
        ],
        likeCount: 91,
        createdAt: "2026-09-14T18:15:00.000Z",
        updatedAt: "2026-09-14T18:15:00.000Z",
        author: mockAuthors[0],
    },

    {
        id: "mock-blog-22",
        authorId: "mock-user-02",
        title: "A közös élmények közelebb hoznak",
        content:
            "Egy közösen átélt élmény sokkal tovább megmaradhat bennünk, mint egy egyszerű beszélgetés. Legyen az egy kirándulás, koncert vagy egy spontán esti séta.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-43",
                name: "élmények",
            },
            {
                id: "mock-tag-44",
                name: "randi",
            },
        ],
        likeCount: 43,
        createdAt: "2026-09-14T11:45:00.000Z",
        updatedAt: "2026-09-14T11:45:00.000Z",
        author: mockAuthors[1],
    },

    {
        id: "mock-blog-23",
        authorId: "mock-user-03",
        title: "Amikor valaki inspirál",
        content:
            "Vannak emberek, akik egyszerűen arra ösztönöznek, hogy egy kicsit többet hozzunk ki magunkból. Egy jó kapcsolat nem csak biztonságot, hanem inspirációt is adhat.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-45",
                name: "inspiráció",
            },
            {
                id: "mock-tag-46",
                name: "kapcsolatok",
            },
        ],
        likeCount: 64,
        createdAt: "2026-09-13T20:25:00.000Z",
        updatedAt: "2026-09-13T20:25:00.000Z",
        author: mockAuthors[2],
    },

    {
        id: "mock-blog-24",
        authorId: "mock-user-04",
        title: "A digitális világ és a valódi kapcsolatok",
        content:
            "Az alkalmazások megkönnyítik az első találkozást, de a kapcsolat valódi része mindig két ember között történik.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-47",
                name: "digitális",
            },
            {
                id: "mock-tag-48",
                name: "közösség",
            },
        ],
        likeCount: 39,
        createdAt: "2026-09-13T14:00:00.000Z",
        updatedAt: "2026-09-13T14:00:00.000Z",
        author: mockAuthors[3],
    },

    {
        id: "mock-blog-25",
        authorId: "mock-user-05",
        title: "Nem minden kapcsolatnak kell azonnal nevet adni",
        content:
            "Néha a legjobb dolgok akkor történnek, amikor nem próbáljuk rögtön meghatározni, hogy pontosan mi is történik két ember között.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-49",
                name: "kapcsolatok",
            },
            {
                id: "mock-tag-50",
                name: "érzelmek",
            },
        ],
        likeCount: 58,
        createdAt: "2026-09-12T19:10:00.000Z",
        updatedAt: "2026-09-12T19:10:00.000Z",
        author: mockAuthors[4],
    },

    {
        id: "mock-blog-26",
        authorId: "mock-user-06",
        title: "Miért szeretünk beszélgetni idegenekkel?",
        content:
            "Egy idegenben sokszor éppen az érdekes, hogy még semmit nem tudunk róla. Minden kérdés egy újabb lehetőség arra, hogy felfedezzünk egy történetet.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-51",
                name: "beszélgetés",
            },
            {
                id: "mock-tag-52",
                name: "közösség",
            },
        ],
        likeCount: 27,
        createdAt: "2026-09-12T10:30:00.000Z",
        updatedAt: "2026-09-12T10:30:00.000Z",
        author: mockAuthors[5],
    },

    {
        id: "mock-blog-27",
        authorId: "mock-user-07",
        title: "Egy jó kapcsolatban lehetünk önmagunk",
        content:
            "Talán az egyik legfontosabb dolog egy kapcsolatban, hogy ne kelljen folyamatosan bizonyítanunk. A biztonságos kapcsolatban megmaradhatunk önmagunknak.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-53",
                name: "önmagam",
            },
            {
                id: "mock-tag-54",
                name: "bizalom",
            },
        ],
        likeCount: 76,
        createdAt: "2026-09-11T17:45:00.000Z",
        updatedAt: "2026-09-11T17:45:00.000Z",
        author: mockAuthors[6],
    },

    {
        id: "mock-blog-28",
        authorId: "mock-user-08",
        title: "A spontaneitás varázsa",
        content:
            "Nem minden programot kell hetekkel előre megszervezni. Néha egy spontán üzenetből lesz a legjobb este.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-55",
                name: "spontán",
            },
            {
                id: "mock-tag-56",
                name: "randi",
            },
        ],
        likeCount: 48,
        createdAt: "2026-09-11T12:00:00.000Z",
        updatedAt: "2026-09-11T12:00:00.000Z",
        author: mockAuthors[7],
    },

    {
        id: "mock-blog-29",
        authorId: "mock-user-09",
        title: "Mit tanulhatunk egy rossz kapcsolatból?",
        content:
            "Nem minden kapcsolat végződik úgy, ahogy szeretnénk. Ettől azonban nem feltétlenül volt értelmetlen. Sok tapasztalatot vihetünk magunkkal a következő kapcsolatunkba.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-57",
                name: "tapasztalat",
            },
            {
                id: "mock-tag-58",
                name: "önismeret",
            },
        ],
        likeCount: 88,
        createdAt: "2026-09-10T20:20:00.000Z",
        updatedAt: "2026-09-10T20:20:00.000Z",
        author: mockAuthors[8],
    },

    {
        id: "mock-blog-30",
        authorId: "mock-user-10",
        title: "Minden történet egy beszélgetéssel kezdődik",
        content:
            "Lehet, hogy csak egy egyszerű helló. Lehet, hogy egy közös érdeklődés vagy egy véletlenül elküldött üzenet. Sok kapcsolat egyetlen apró pillanatból indul.",
        visibility: "PUBLIC",
        tags: [
            {
                id: "mock-tag-59",
                name: "kezdés",
            },
            {
                id: "mock-tag-60",
                name: "kapcsolódás",
            },
        ],
        likeCount: 112,
        createdAt: "2026-09-10T09:00:00.000Z",
        updatedAt: "2026-09-10T09:00:00.000Z",
        author: mockAuthors[9],
    },
];

export const blogsMock: BlogDTO[] = mockBlogs;

export const blogDetailsMock: BlogDetailDTO[] = mockBlogs;
