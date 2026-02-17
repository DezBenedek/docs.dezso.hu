---
sidebar_position: 3
---

# RAW Fájl Exportálása

Az exportálás funkció lehetővé teszi a kiválasztott képekhez tartozó RAW fájlok (vagy helyettesítésként JPEG fájlok) másolását egy célmappába.

## Az exportálási ablak

Az **Export** gombra (↓) kattintva megnyílik az exportálási panel.

### Szűrési beállítások

#### Csak jelölt képek
Ha bekapcsolod, csak a zászlóval jelölt képek RAW fájljai exportálódnak.

#### Minimum értékelés
Beállíthatod a minimum csillagszámot (1–5). Csak az ezt elérő vagy meghaladó értékelésű képek kerülnek exportálásra.

> **Mindkét szűrő közül:** Ha mindkettő be van pipálva, azok a képek kerülnek exportálásra, amelyek **jelöltek** VAGY **elérik a minimum csillagszámot** (VAGY logika).

> **Elutasított képek soha nem kerülnek exportálásra**, függetlenül a beállításoktól.

### Egyéb opciók

#### JPEG másolása, ha nincs RAW fájl
Ez az opció csak akkor jelenik meg, ha vannak RAW pár nélküli képek. Ha bekapcsolod:
- A RAW nélküli kiválasztott képek JPEG/PNG/WEBP változata másolódik
- Ez hasznos lehet, ha nem csak RAW fájlokra van szükséged

## Exportálható fájlok listája

Az ablak alján egy összesítő mutatja:
- Az exportálható fájlok **számát**
- Az eredeti képek számát (zárójekben)
- A részletes fájllistát (kinyitható)

### Fájllista megjelenítése

A **„Részletes fájllista megtekintése"** szekció kiterjesztésével láthatod:

| Szín | Jelent | Leírás |
|---|---|---|
| 🟢 Zöld | RAW fájlok | Ezek kerülnek másolásra |
| 🟠 Narancs | JPEG fájlok | RAW helyett másolódnak (ha bekapcsolt) |
| 🔴 Piros | Hiányzó RAW | Kihagyásra kerülnek |

## Export indítása

1. **„Exportálás indítása"** gombra kattints
2. Böngésző mappaválasztó ablak megnyílik
3. Válaszd ki a **célmappát**, ahová a fájlokat másolni szeretnéd
4. A másolás elindul, folyamatjelzővel kísérve
5. **Végén összefoglalót kapsz** (sikeresen másolt + sikertelen fájlok)

> A másolás bármikor szüneteltethető az ablak bezárásával, de az már másolt fájlok maradnak a célmappában.

## Hiba-kezelés

Ha egy fájl másolása meghiúsul (pl. hozzáférési jog hiányában vagy fizikai drive hiba miatt):
- Az alkalmazás **folytatja** a többi fájllal
- A végén egy **összefoglaló** mutatja a sikertelen fájlokat
- Az átmásolt fájlok a célmappában maradnak

## Tanácsok

- **Gyors előzetes:** Az exportálás előtt szűrd le a képeket az aktuális munkamenet szűrőit használva
- **Biztonsági mentés:** Az exportálás csak másolja a fájlokat, az eredeti megmarad
- **Többszörös export:** Többször is exportálhatsz ugyanabba a mappába (felülírja az azonos nevű fájlokat)
