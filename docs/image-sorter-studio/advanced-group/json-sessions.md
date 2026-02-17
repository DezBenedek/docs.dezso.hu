---
sidebar_position: 3
---

# JSON Munkamenet Mentés és Betöltés

A JSON-ba történő exportálás lehetővé teszi a teljes válogatási munkamenet (értékelések, jelölések, elutasítások) mentését és visszatöltését.

## Miért használd?

- **Szünet a munkában:** Le kell állnod a válogatáshoz? Mentsd el és folytasd később
- **Biztonsági mentés:** a munkamenet védelmet kap
- **Megosztás:** Kollegákkal megoszthatod a válogatás eredményét
- **Szervezés:** Adatok elemzéséhez vagy szűréshez

## JSON letöltése (mentés)

### Lépésről lépésre

1. Kattints az **Export** gombra (↓) a fejlécben
2. Az ablak alján látod a **„Munkamenet mentése JSON-ba"** linket
3. Kattints rá
4. A böngésző automatikusan letölt egy `.json` fájlt

### Fájlnév

A JSON fájl alapértelmezett neve:
```
YYYY-MM-DD-image-selection.json
```

Például: `2026-02-17-image-selection.json`

### Fájl tartalma

A JSON a következő adatokat tartalmazza:

```json
{
  "version": "1.0",
  "exportDate": "2026-02-17T15:30:00Z",
  "totalImages": 1523,
  "images": [
    {
      "filename": "DSC_0042.jpg",
      "rating": 5,
      "flagged": true,
      "rejected": false,
      "hasRaw": true,
      "rawExtension": ".ARW"
    },
    ...
  ]
}
```

## JSON betöltése (visszatöltés)

### Lépésről lépésre

1. Kattints a **JSON import** gombra (↑) a fejlécben
2. Fájlválasztó ablak megnyílik
3. Válaszd ki a korábban mentett `.json` fájlt
4. A betöltés automatikusan megtörténik

### Összefésülés

A betöltés **nem felülírja** az aktuális adatokat, hanem **összefésüli** azokat:

- **Azonos fájl:** Az értékelés, jelölés, elutasítás **felülíródik** az importált adatokkal
- **Új fájlok:** Az importált adatban szereplő, de a jelenlegi mappában nem lévő képek elmentésre kerülnek (később, ha betöltöd ismét ezt a mappát, visszatöltődnek)

## Munkafolyamat — Gyakorlati tanácsok

### Egy adott fotózás több részletben

1. **1. nap:** Betöltöd a képek első részét, értékelsz, majd **JSON mentést** csinálsz
2. **2. nap:** Betöltöd ugyanazokat a képeket, a JSON-t visszatöltöd, majd folytatod az értékelést
3. **3. nap:** Hasonló, vagy egyik nap végén **új export** záró munkamenethez

### Több mappa összevonása

1. **Mappa 1:** Betöltöd, értékelsz, JSON mentés
2. **Mappa 2:** Betöltöd, értékelsz, JSON mentés
3. **Összevonás:** Egy új mappába másolod az 1. és 2. mappát, betöltöd, majd visszatöltöd mindkét JSON-t

### Biztonsági mentés

1. Rendszeres időközönként **JSON-t mentesz**
2. Mentsd el a fájlokat egy külső lemezre vagy felhőre
3. Ha szükséges, később visszatöltheted

## Ismert korlátok

- A JSON csak az **értékeléseket, jelöléseket és elutasításokat** tartalmazza, nem a valódi képfájlokat
- Ha egy fájl később **átnevezésre** kerül, az adatok nem asszociálódnak automatikusan
- A RAW-only fájlok JSON-ben ugyanúgy vannak tárolva, mint a normál képek

## Haladó — Szöveges szerkesztés

Ha erősen technikusnak érzed magad, a JSON fájlt szöveges szerkesztővel (Notepad++, VS Code) módosíthatod:

1. Nyisd meg a JSON-t egy szöveges szerkesztőprogramban
2. Módosítsd az értékeket (`rating`, `flagged`, `rejected`)
3. Mentsd le a fájlt
4. Töltsd be az alkalmazásba az **Import** gombbal

> ⚠️ **Vigyázat:** A JSON szintaxisának helyesnek kell maradnia (vesszők, karakterkódolás stb.).
