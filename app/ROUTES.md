# Application Routes

> Az alkalmazásban elérhető route-ok és azok felépítése.

---

## Route Overview

| Route             | Page          | Auth | Description                    |
| ----------------- | ------------- | :--: | ------------------------------ |
| `/`               | Home          |  ❌  | Kezdőoldal                     |
| `/about`          | About         |  ❌  | Rólunk                         |
| `/contact-us`     | ContactUs     |  ❌  | Kapcsolat                      |
| `/news`           | News          |  ❌  | Hírek, újdonságok              |
| `/safety-warning` | SafetyWarning |  ❌  | Biztonsági figyelmeztetések... |
| `/our-team`       | OurTeam       |  ❌  | Csapatunk                      |
| `/sign-in`        | SignIn        |  ❌  | Bejelentkezés                  |
| `/sign-up`        | SignUp        |  ❌  | Regisztráció                   |
| `/new-password`   | NewPassword   |  ❌  | Új jelszó kérése               |
| `/profile`        | Profile       |  ✅  | Saját profil                   |
| `/settings`       | Settings      |  ✅  | Felhasználói beállítások       |
| `/inbox`          | Inbox         |  ✅  | Üzenetek                       |
| `/inbox/:id`      | Conversation  |  ✅  | Beszélgetés                    |
| `/love`           | Love          |  ✅  | Kedvelések                     |
| `/map`            | Map           |  ✅  | Térkép                         |
| `/community`      | Community     |  ✅  | Közösségi oldal                |

---

## 🌐 Public Routes

Ezek az oldalak bejelentkezés nélkül is elérhetők.

```text
/
├── /login
├── /register
└── /forgot-password
```

### `/`

**Home page**

- Kezdőoldal
- Bejelentkezett felhasználó esetén alkalmazás kezdőképernyője
- Vendégként landing oldal

---

### `/login`

**Login page**

- Email + password bejelentkezés
- Session létrehozása
- Sikeres login után redirect

---

### `/register`

**Register page**

- Új felhasználó létrehozása
- Email validáció
- Password validáció

---

## 🔐 Protected Routes

Ezek az oldalak csak bejelentkezett felhasználók számára érhetők el.

```text
/profile
/settings
/inbox
/love
/map
/community
```

---

## 💬 Inbox

```text
/inbox
└── /inbox/:conversationId
```

| Route                    | Description           |
| ------------------------ | --------------------- |
| `/inbox`                 | Beszélgetések listája |
| `/inbox/:conversationId` | Konkrét beszélgetés   |

### `/inbox`

A felhasználó beszélgetéseinek listája.

### `/inbox/:conversationId`

Egy adott felhasználóval folytatott beszélgetés.

**Example:**

```text
/inbox/123
```

---

## ❤️ Love

```text
/love
├── /love/nearby
├── /love/more
└── /love/eye-candy
```

| Route             | Description         |
| ----------------- | ------------------- |
| `/love`           | Kedvelések főoldala |
| `/love/nearby`    | Közeli felhasználók |
| `/love/more`      | További ajánlások   |
| `/love/eye-candy` | Kiemelt profilok    |

---

## 🗺️ Map

```text
/map
```

**Map page**

- Felhasználók térképes megjelenítése
- Lokáció alapú keresés
- Profilok megnyitása

---

## 👥 Community

```text
/community
├── /community
├── /community/:postId
└── /community/create
```

| Route                | Description              |
| -------------------- | ------------------------ |
| `/community`         | Közösségi feed           |
| `/community/:postId` | Bejegyzés részletei      |
| `/community/create`  | Új bejegyzés létrehozása |

---

## 👤 Profile

```text
/profile
├── /profile
├── /profile/edit
└── /profile/:username
```

| Route                | Auth | Description                |
| -------------------- | :--: | -------------------------- |
| `/profile`           |  ✅  | Saját profil               |
| `/profile/edit`      |  ✅  | Profil szerkesztése        |
| `/profile/:username` |  ✅  | Másik felhasználó profilja |

**Example:**

```text
/profile/andras
```

---

## ⚙️ Settings

```text
/settings
├── /settings
├── /settings/account
├── /settings/privacy
└── /settings/notifications
```

| Route                     | Description             |
| ------------------------- | ----------------------- |
| `/settings`               | Beállítások főoldala    |
| `/settings/account`       | Fiókbeállítások         |
| `/settings/privacy`       | Adatvédelmi beállítások |
| `/settings/notifications` | Értesítési beállítások  |

---

## 🔑 Authentication

```text
/auth
├── /auth/login
├── /auth/register
├── /auth/logout
├── /auth/forgot-password
└── /auth/reset-password
```

| Route                       | Method | Description                 |
| --------------------------- | ------ | --------------------------- |
| `/api/auth/login`           | `POST` | Bejelentkezés               |
| `/api/auth/register`        | `POST` | Regisztráció                |
| `/api/auth/logout`          | `POST` | Kijelentkezés               |
| `/api/auth/me`              | `GET`  | Aktuális user lekérése      |
| `/api/auth/forgot-password` | `POST` | Jelszó-visszaállítás kérése |
| `/api/auth/reset-password`  | `POST` | Jelszó módosítása           |

---

## 🔌 API Routes

```text
/api
├── /auth
│   ├── /login
│   ├── /register
│   ├── /logout
│   └── /me
│
├── /users
│   ├── /:id
│   └── /:id/avatar
│
├── /messages
│   ├── /:id
│   └── /send
│
├── /love
│   ├── /like
│   └── /unlike
│
└── /community
    ├── /posts
    └── /posts/:id
```

---

## 🛡️ Route Protection

| Route Type    | Authentication |
| ------------- | :------------: |
| Public        |       ❌       |
| Protected     |       ✅       |
| API Public    |       ❌       |
| API Protected |       ✅       |
| Admin         |       👑       |

### Middleware

A protected route-ok ellenőrzése middleware segítségével történik.

```text
Request
   │
   ▼
Middleware
   │
   ├── Session exists ──► Continue
   │
   └── No session ──────► Redirect /login
```

---

## 📁 Next.js App Router Structure

A route-okhoz tartozó mappastruktúra:

```text
app/
├── page.tsx
│
├── login/
│   └── page.tsx
│
├── register/
│   └── page.tsx
│
├── profile/
│   ├── page.tsx
│   ├── edit/
│   │   └── page.tsx
│   └── [username]/
│       └── page.tsx
│
├── inbox/
│   ├── page.tsx
│   └── [conversationId]/
│       └── page.tsx
│
├── love/
│   ├── page.tsx
│   ├── nearby/
│   │   └── page.tsx
│   ├── more/
│   │   └── page.tsx
│   └── eye-candy/
│       └── page.tsx
│
├── map/
│   └── page.tsx
│
├── community/
│   ├── page.tsx
│   ├── create/
│   │   └── page.tsx
│   └── [postId]/
│       └── page.tsx
│
└── settings/
    ├── page.tsx
    ├── account/
    │   └── page.tsx
    ├── privacy/
    │   └── page.tsx
    └── notifications/
        └── page.tsx
```

---

## 📝 Route Naming Convention

A projekt route-jai az alábbi szabályokat követik:

- `kebab-case` használata
- Kisbetűs URL-ek
- Dinamikus paraméterek: `[id]`
- Felhasználónév: `[username]`
- Beszélgetés azonosító: `[conversationId]`
- Több szavas route: `/forgot-password`
- API route-ok: `/api/...`

### Examples

```text
✅ /forgot-password
✅ /profile/edit
✅ /inbox/123
✅ /profile/andras

❌ /ForgotPassword
❌ /Profile/Edit
❌ /inbox?id=123        # ha route paraméter lenne célszerűbb
```

---

## 📊 Route Status

| Route        |     Status     |
| ------------ | :------------: |
| `/`          |    ✅ Done     |
| `/login`     |    ✅ Done     |
| `/register`  | 🚧 In Progress |
| `/profile`   | 🚧 In Progress |
| `/inbox`     |   ⏳ Planned   |
| `/love`      |   ⏳ Planned   |
| `/map`       |   ⏳ Planned   |
| `/community` |   ⏳ Planned   |
| `/settings`  |   ⏳ Planned   |

---

> **Legend:**
> ✅ Done    🚧 In Progress    ⏳ Planned    ❌ Deprecated
