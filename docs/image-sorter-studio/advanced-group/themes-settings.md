---
sidebar_position: 4
---

# Témák és Beállítások

A Beállítások menü (⚙️) tartalmazza az alkalmazás személyre szabási lehetőségeit.

## Téma váltása

### Világos és Sötét mód

A fejléc jobb oldalán lévő **nap/hold ikon** (☀️ / 🌙) gombra kattintva válthatod a témákat.

- **Világos mód:** Könnyebb olvashatóság nappali használathoz
- **Sötét mód:** Könnyebb a szem nappali és éjszakai használatkor

### Automatikus detektálás

A böngésző alapbeállítása szerint az alkalmazás követheti az operációs rendszer témabeállítását. Azonban az alkalmazásban a **gombra kattintva bármelyik témát** választhatod.

### Mentés

Az utoljára választott téma automatikusan mentésre kerül, így az oldal újratöltésekor ugyanaz jelenik meg.

## Billentyűparancsok testreszabása

### Megnyitás

Kattints a **Beállítások** (⚙️) gombra, majd a **Billentyűparancsok** szekciót látod.

### Testreszabás

Minden billentyűparancs módosítható:

1. Kattints a módosítani kívánt beviteli mezzőre
2. Nyomd meg az új billentyűt (max 1 karakter)
3. A billentyű automatikusan feljegyzésre kerül
4. Kattints a **Mentés** gombra

### Korlátozások

- Csak **alphanumerikus karakterek** engedélyeztek (a–z, 0–9)
- Összetett billentyűk (Ctrl+A stb.) nem támogatottak

### Alaphelyzet

Az **Alaphelyzet** gombra kattintva visszaállíthatod az eredeti billentyűparancsokat.

## DezsoCloud szinkronizálás

A Beállítások ablak felső szekciójában az alábbiak lehetségesek:

### Csatlakozás

Ha még nincsen csatlakozva:
1. Kattints a **Connect** gombra
2. Böngésző megnyitja az OAuth oldalt
3. Bejelentkezés után automatikus szinkronizálás

### Kijelentkezés

Csatlakozottsá után:
1. Kattints a **Kijelentkezés** gombra
2. A szinkronizálás leáll
3. A helyi adatok megmaradnak

A DezsoCloud részletes dokumentációja a **[DezsoCloud Szinkronizálás](../advanced-group/dezsocloud)** oldalon.

## Információ szekció

A Beállítások ablak alján az alábbiak láthatók:

- **Verzió:** Az alkalmazás jelenlegi verziószáma
- **Dokumentáció link** 📖 : A teljes dokumentációra mutató hivatkozás

## Jogi nyilatkozat újra megnyitása

A felhasználási feltételek és jogi nyilatkozat (amely az első bejelentkezéskor jelent meg) később sem érhető el az alkalmazásban, de az alábbi helyen hozzáférhető:

- Az alkalmazás indításakor 3 naponta ismét feljelenik
- Az első elfogadás után az alkalmazás nem kéri meg a kijelentkezésig

## Helyi tár (LocalStorage)

Az alkalmazás a böngésző helyi tárolóját (LocalStorage) használja az alábbiak mentésére:

| Adat | Mentéslocation |
|---|---|
| Téma választás | `localStorage['theme']` |
| Billentyűparancsok | `localStorage['appSettings']` |
| Válogatási adatok | `localStorage['imageSelectionData']` |
| Jogi nyilatkozat dátuma | `localStorage['termsAcceptedDate']` |

### Tár törlése

Ha alaphelyzetbe szeretnéd állítani az alkalmazást:

1. Böngésző DevTools megnyitása (`F12`)
2. **Storage** / **Application** fül
3. **Local Storage** → az alkalmazás URL-je
4. Összes adat törlése

## Cookie-k

Az alkalmazás a DezsoCloud szinkronizáláshoz az alábbi cookie-t használje:

- **`dezso_access_token`:** Hozzáférési token a DezsoCloud API-hoz (30 nap lejárat)

Ez a cookie csak DezsoCloud csatlakozás esetén jön létre.

## Adatvédelem

📌 A teljes adatvédelmi nyilatkozat az alkalmazácó indítás sánnak jogállapotában szerepel (Terms of Service).
