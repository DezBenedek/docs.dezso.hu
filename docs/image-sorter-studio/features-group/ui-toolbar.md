---
sidebar_position: 1
---

# Az Eszköztár (Fejléc)

A képernyő tetején található fejléc sáv tartalmazza az alkalmazás összes vezérlőelemét. Három logikai részre oszlik: bal, közép és jobb oldal.

## Bal oldal — Logó

- **Image Sorter Studio logó** — Az alkalmazás neve és ikonja. Vizuális azonosításra szolgál.

## Középső szekció — Eszköztár

Az eszköztár egy kerekített háttérrel rendelkező kompakt csoportosítás, amelyben minden fontos művelet elérhető.

### Mappa megnyitása

| Elem | Leírás |
|---|---|
| Gomb | 📁 „Mappa megnyitása" |
| Funkció | Böngésző mappaválasztó ablak megnyitása |
| Eredmény | A kiválasztott mappa összes JPG, PNG, WEBP és RAW fájlja betöltődik |

A gomb megnyomásakor a böngésző natív mappaválasztó ablaka jelenik meg. A mappában lévő összes támogatott képfájl betöltődik a rácsnézetbe. A RAW fájlok automatikusan párosításra kerülnek fájlnév alapján.

### Export gomb

| Elem | Leírás |
|---|---|
| Gomb | ↓ (lefelé mutató nyíl ikon) |
| Funkció | RAW fájlok exportálási ablakának megnyitása |
| Állapot | Letiltva, amíg nincs betöltött kép |

Az Export ablak részletes leírását lásd lentebb az [Exportálási ablak](#exportálási-ablak) szekcióban.

### Szűrők

Négy szűrőgomb áll rendelkezésre, egyszerre mindig csak egy lehet aktív:

| Gomb | Szűrő | Leírás |
|---|---|---|
| ▦ (rács) | Összes | Minden betöltött kép megjelenik |
| 🚩 (zászló) | Jelölt | Csak a zászlóval jelölt képek |
| ✕ (X) | Elutasított | Csak az elutasított képek |
| ⭐ (csillag) | Értékelt | A beállított minimum csillagszám feletti képek |

**Csillag szűrő részletei:**

A csillag gombra kattintva egy lenyíló menü jelenik meg, amelyben beállíthatod a minimum csillagszámot:
- **1+** — Minden értékelt kép (legalább 1 csillag)
- **2+** — Legalább 2 csillagos képek
- **3+** — Legalább 3 csillagos képek (alapértelmezett)
- **4+** — Legalább 4 csillagos képek
- **5** — Csak az 5 csillagos képek

### Rendezés

| Elem | Leírás |
|---|---|
| Lenyíló lista | Rendezési szempont kiválasztása |

Elérhető rendezési opciók:
- **Név (A–Z)** — Fájlnév szerint ábécé sorrendben (alapértelmezett)
- **Név (Z–A)** — Fájlnév szerint fordított sorrendben
- **Legtöbb csillag** — Legmagasabb értékelés elöl
- **Legkevesebb csillag** — Legalacsonyabb értékelés elöl
- **Jelöltek először** — A zászlóval jelölt képek kerülnek előre

## Jobb oldal — Műveletek

### JSON import

| Elem | Leírás |
|---|---|
| Gomb | ↑ (felfelé mutató nyíl ikon) |
| Funkció | Korábban mentett JSON munkamenet visszatöltése |
| Formátum | `.json` fájl |

A gombra kattintva egy fájlválasztó ablak jelenik meg. Válaszd ki a korábban exportált JSON fájlt. Az importálás összefésüli a meglévő adatokat az importáltakkal — a magasabb értékelés és a jelölések megmaradnak mindkét oldalról.

### Dokumentáció gomb

| Elem | Leírás |
|---|---|
| Gomb | 📖 (könyv ikon) |
| Funkció | A dokumentációs oldal megnyitása új ablakban |
| URL | `https://docs.dezso.hu/docs/image-sorter-studio/overview` |

### Téma váltás

| Elem | Leírás |
|---|---|
| Gomb | ☀️ / 🌙 (nap vagy hold ikon) |
| Funkció | Világos és sötét mód közötti váltás |
| Mentés | A választás LocalStorage-ban tárolódik |

A téma azonnal alkalmazódik az egész felületen. Az oldal újratöltésekor az utoljára választott téma automatikusan betöltődik.

### Beállítások

| Elem | Leírás |
|---|---|
| Gomb | ⚙️ (fogaskerék ikon) |
| Funkció | Beállítások ablak megnyitása |

A Beállítások ablak tartalma:

1. **Dezso Cloud szekció** — Felhő szinkronizálás csatlakoztatása/leválasztása.
2. **Billentyűparancsok** — Minden billentyűparancs egyénileg beállítható. Kattints a beviteli mezőre, majd nyomd le a kívánt billentyűt.
3. **Információ** — Az alkalmazás verziószáma és a dokumentáció elérhetősége.

> Az „Alaphelyzet" gombbal visszaállíthatod az eredeti billentyűparancsokat.

### Képszámláló

A fejléc jobb szélén látható a betöltött képek száma. Ha van kiválasztott (jelölt vagy értékelt) kép, az is megjelenik zárójelben.

---

# Exportálási ablak

Az exportálási ablak a RAW fájlok célmappába másolását kezeli.

## Szűrési beállítások

Két fő szűrőmód érhető el, amelyeket önállóan vagy együtt is használhatsz:

### Csak jelölt képek
- **Checkbox**: Ha bekapcsolod, csak a zászlóval jelölt képek RAW fájljai kerülnek exportálásra.

### Minimum értékelés
- **Checkbox + lenyíló**: Ha bekapcsolod, beállíthatod a minimum csillagszámot (1–5). Csak az ezt elérő vagy meghaladó értékelésű képek RAW fájljai kerülnek exportálásra.

> **Mindkét szűrő bekapcsolva:** Azok a képek kerülnek exportálásra, amelyek jelöltek **VAGY** elérik a minimum csillagszámot.

> **Fontos:** Az elutasított képek soha nem kerülnek exportálásra, függetlenül a szűrőbeállításoktól.

## Egyéb opciók

### JPEG másolása, ha nincs RAW fájl
Ez az opció csak akkor jelenik meg, ha vannak képek RAW pár nélkül. Ha bekapcsolod, a RAW nélküli kiválasztott képek JPEG/PNG/WEBP változata kerül másolásra.

## Exportálható fájlok összesítő

Az ablak alsó részén egy összesítő mutatja:
- Az exportálható fájlok számát.
- A részletes fájllistát (kinyitható szekció):
  - **Zöld**: RAW fájlok, amelyek exportálásra kerülnek.
  - **Narancs**: JPEG fájlok, amelyek RAW helyett másolódnak (ha bekapcsolt).
  - **Piros**: Képek RAW nélkül, amelyek kihagyásra kerülnek.

## Exportálás indítása

Az **„Exportálás indítása"** gombra kattintva:
1. A böngésző megnyitja a célmappa-választó ablakot.
2. Kiválasztod a célmappát.
3. A fájlok másolása elindul, folyamatjelzővel kísérve.
4. Végül egy összefoglaló jelenik meg a sikeres és sikertelen műveletek számával.

## JSON munkamenet mentés

Az exportálási ablak alján található a **„Munkamenet mentése JSON-ba"** link. Ez az aktuális állapot JSON fájlba exportálását végzi (nem fájlmásolás, hanem adatmentés).

---

# Teljes képernyős nézet (Modal)

A rácsnézetben egy kép előnézetére kattintva nyílik meg a teljes képernyős nézet.

## Felső sáv
- **Fájlnév** — Az aktuálisan megjelenített kép neve.
- **Bezárás gomb (X)** — Visszatérés a rácsnézetbe.

## Kép terület

A kép a rendelkezésre álló terület közepén jelenik meg, maximum 90%-os szélességben és magasságban.

### Navigáció
- **Bal/jobb nyíl gombok** — A kép két oldalán.
- **`←` / `→` billentyűk** — Billentyűzettel lapozás.

### Zoom funkciók

| Művelet | Vezérlés |
|---|---|
| Zoom be/ki | Görgő (scroll) |
| Zoom be/ki fokozatosan | `+` / `-` billentyűk |
| Zoom be/ki toggle | `Szóköz` billentyű |
| Eredeti méretre zoom | Dupla kattintás |
| Kép mozgatása (pan) | Egérhúzás zoomolt állapotban |
| Zoom visszaállítás | Dupla kattintás zoomolt állapotban |

A zoom maximum 10x nagyítást tesz lehetővé. 1x-es zoomnál a kép automatikusan visszaáll a középre.

## Alsó sáv

### Értékelés
- **5 csillag** — Kattintással vagy billentyűvel (1–5) állítható. Az aktív csillagra kattintva az értékelés törlődik.

### Jelölés
- **Zászló gomb** — Kattintásra zöld háttérrel jelöli a képet.
- **Elutasítás gomb (X)** — Kattintásra piros háttérrel jelöli a képet.

### Információs sáv
- **Kép sorszáma** — pl. „42 / 1523"
- **Zoom tipp** — „Ráközelítéshez használd a görgőt"

---

# DezsoCloud integráció

A DezsoCloud egy opcionális felhő szinkronizálási szolgáltatás, amely a válogatási adatokat (értékelések, jelölések, elutasítások) biztonságosan tárolja a szerveren.

## Csatlakozás

1. Nyisd meg a **Beállítások** ablakot.
2. Kattints a **„Connect"** gombra a Dezso Cloud szekciónál.
3. A böngésző átirányít a DezsoCloud OAuth oldalára.
4. Jelentkezz be és engedélyezd az alkalmazás hozzáférését.
5. Visszairányítás után az alkalmazás automatikusan szinkronizál.

## Szinkronizálás

A szinkronizálás automatikusan megtörténik:
- Csatlakozáskor.
- Minden értékelés/jelölés/elutasítás változásakor.

A szinkronizálás **összefésüli** a helyi és felhő adatokat:
- A magasabb értékelés győz.
- A jelölések és elutasítások egyesítésre kerülnek.

## Kijelentkezés

A Beállítások ablakban a csatlakozott állapotban megjelenő **„Kijelentkezés"** gombra kattintva leválaszthatod a fiókot. Ezután a helyi adatok megmaradnak, de a felhő szinkronizálás leáll.

## Fiókkezelés

A DezsoCloud fiók kezelése (adattörlés, jelszóváltás stb.) a [cloud.dezso.hu](https://cloud.dezso.hu) weboldalon érhető el.