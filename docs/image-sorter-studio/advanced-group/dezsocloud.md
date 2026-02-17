---
sidebar_position: 2
---

# DezsoCloud Szinkronizálás

A DezsoCloud egy opcionális felhő alapú szinkronizálási szolgáltatás, amely a képválogatási adatokat (értékelések, jelölések, elutasítások) tárolta és több eszköz között megosztja.

## Csatlakozás

### Lépésről lépésre

1. Kattints a **Beállítások** (⚙️) gombra a fejlécben
2. A legfelső szekció az **„Dezso Cloud"** blokk
3. Kattints a **„Connect"** gombra
4. Böngésző átirányít a DezsoCloud OAuth bejelentkezési oldalára
5. Jelentkezz be a fiókodba (vagy regisztrálj)
6. Engedélyezd az alkalmazás hozzáférését
7. Automatikus átirányítás után az alkalmazás szinkronizál

## Csatlakozottan

Csatlakozás után a DezsoCloud szekció a következőt mutatja:

- **Felhasználó neve és e-maile**
- **Csatlakozás állapota:** Zöld pont, „Connected" felirat
- **Díjcsomag:** Az aktuális terv (pl. FREE, PREMIUM)
- **Tárhely használat:** Pl. „12.5 / 100 MB"
- **Kijelentkezés gomb**

## Automatikus szinkronizálás

Miután csatlakozottál, az alkalmazás automatikusan szinkronizál:

| Esemény | Szinkronizálás |
|---|---|
| Csatlakozás után | ✅ Azonnali |
| Értékelés módosítása | ✅ Rögzítés után |
| Jelölés módosítása | ✅ Rögzítés után |
| Elutasítás módosítása | ✅ Rögzítés után |
| Alkalmazás indítása | ✅ Ha már Connected |

## Adatösszefésülés

Ha több helyről dolgozol, az alkalmazás **intelligensen összefésüli** az adatokat:

1. Helyi adatok megörizhetn
2. Felhő adatok betöltődnek
3. **Összefésülés logikája:**
   - **Csillagok:** A magasabb értékelés győz
   - **Jelölések:** Egyesítésre kerülnek (VAGY logika)
   - **Elutasítások:** Egyesítésre kerülnek (VAGY logika)

**Példa:**
- Otthon értékeltél 5 csillag egy képet
- Másik eszközön 3 csillag lett
- Szinkronizálás után: 5 csillag marad (magasabb értékelés)

## Kijelentkezés

1. Nyisd meg a **Beállítások** ablakot
2. A DezsoCloud szekciónál kattints a **„Kijelentkezés"** gombra
3. A csatlakozás bontódik
4. A helyi adatok megmaradnak (nem törlődik)
5. A szinkronizálás leáll

## Adatkezelés és magánszféra

### Mi kerül fel?
- Fájlnevek
- Értékelések (1–5 csillag)
- Jelölés állapot
- Elutasítás állapot

### Mi **nem** kerül fel?
- A valódi képfájlok
- Bármi más személyes adat

### Adatok törlése

Az adatok kezelése (törlés, módosítás) az alábbi oldalon érhető el:
📌 [cloud.dezso.hu](https://cloud.dezso.hu)

Bejelentkezés után az adatot összes kijelentkezésre összesítés lehetőség.

## Hibaelhárítás

| Probléma | Megoldás |
|---|---|
| **Szinkronizálás nem működik** | Ellenőrizd az internet kapcsolatod |
| **Bejelentkezés sikertelen** | Próbáld meg az incognito/privát módot |
| **Lassú szinkronizálás** | Nagyobb adatmennyiség esetén várj, vagy csökkentsd az értékeltek számát |
| **Fiók törlése** | Nézz rá a cloud.dezso.hu oldalra |

## Gyakori kérdések

**Milyen gyorsan szinkronizál?**
Jellemzően 1–3 másodpercen belül. Nagyobb adatmennyiség (5000+ kép) lassabb lehet.

**Mi történik, ha offline vagyok?**
Az alkalmazás helyi tárolóban mentés szinkronizál, akkor később szinkronizál vissza.

**Biztonsági-e a szinkronizálás?**
Igen, a kapcsolat titkosított (HTTPS), az adatok szerveren titkosítottan tárolódnak.

**Költségei vannak?**
A FREE terv ingyenes, PREMIUM opción nagyobb tárhellyel rendelkezik.
