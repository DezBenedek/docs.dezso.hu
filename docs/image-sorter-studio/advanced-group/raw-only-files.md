---
sidebar_position: 1
---

# RAW-Only Fájlok

Ha a kiválasztott mappában vannak RAW fájlok, amelyekhez **nem tartozik JPG/PNG/WebP előnézet**, az alkalmazás ezeket is betölti és teljes értékű képként kezeli.

## Hogyan jelenik meg?

### Kis nézetben (grid)

Az alkalmazás **automatikusan kinyeri a RAW fájlba ágyazott JPEG előnézetet**. Minden modern fényképezőgép beleírja a RAW fájlba a saját JPEG thumbnailját  ez kerül megjelenítésre a rácsban.

Ha a kinyerés nem sikerül (régi/sérült RAW fájl), akkor egy szürke SVG placeholder jelenik meg a fájl kiterjesztésével (pl. ARW").

A RAW-only kártyákon megjelenik egy **lila RAW badge**, jelezve, hogy ez csak RAW fájl.

### Nagy nézetben (modal)

Amikor megnyitsz egy RAW-only képet:

1. **Azonnal megjelenik** a thumbnail (amit a rácsból is láttál), enyhe blur-rel
2. **Háttérben betöltődik** a teljes embedded JPEG preview (ez a legjobb minőségű kép a RAW fájlban)
3. **A blur eltűnik**, megjelenik az élesebb, nagyobb felbontású preview

:::info
**Minőség:** A legtöbb modern kamera (Sony, Canon, Nikon, Fujifilm stb.) teljes vagy közel teljes felbontású JPEG-et ment a RAW fájlba. Ez elegendő a válogatáshoz és értékeléshez.
:::

## Technikai háttér

A RAW fájlok belső szerkezete:

```
RAW fájl belső tartalma:
 RAW képadat (nyers szenzor adatok)
 EXIF metaadatok
 Kis JPEG thumbnail (általában ~160×120 px)
 Nagy JPEG preview (általában ~1920×1280 px vagy teljes felbontás)
```

Az alkalmazás a **beágyazott JPEG preview-kat** keresi a fájlban (JPEG SOI marker: `FF D8 FF`), és a legmagasabb felbontásút jeleníti meg.

## Megjelenítési módok összehasonlítása

| | JPG/PNG kép | RAW-only fájl |
|---|---|---|
| **Kis nézet** | Eredeti thumbnail | Beágyazott JPEG thumbnail |
| **Nagy nézet** | Eredeti fájl | Beágyazott JPEG preview |
| **Minőség** | Eredeti | Kamera által generált |
| **Betöltési sebesség** | Azonnali | 13 mp (nagy fájlok) |

## Kezelés és export

A RAW-only képek ugyanúgy kezelhetők, mint a normál képek:

- **Csillagozás:** 15 csillag beállítható
- **Flagging:** Megjelölhető fontosnak
- **Elutasítás:** Selejtezhetők
- **Export:** A RAW fájl közvetlenül másolásra kerül a célmappába

## Szűrők

A RAW-only képek megjelennek az összes szűrőben:

| Szűrő | Viselkedés |
|---|---|
| Összes | Megjelenik |
| Jelölt | Ha jelöltük, megjelenik |
| Elutasított | Ha elutasítottuk, megjelenik |
| Értékelt (min. rating) | Ha értékeltük, megjelenik |

## Tippek

Ha sok RAW-only fájl van, a betöltés hosszabb ideig tarthat (2080 MB-os fájlok esetén ez normális).

Ha egy RAW fájlból nem sikerül kinyerni az embedded JPEG-et, az alkalmazás SVG placeholdert mutat. Ez rendkívül ritka, és általában sérült fájlra utal.