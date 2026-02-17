---
sidebar_position: 1
---

# RAW-Only Fájlok

Ha a kiválasztott mappában vannak RAW fájlok, amelyekhez **nem tartozik JPG/PNG/WebP elõnézet**, az alkalmazás ezeket is betölti és teljes értékû képként kezeli.

## Hogyan jelenik meg?

### Kis nézetben (grid)

Az alkalmazás **automatikusan kinyeri a RAW fájlba ágyazott JPEG elõnézetet**. Minden modern fényképezõgép beírja a RAW fájlba egy JPEG thumbnailét  ez kerül megjelenítésre a rácsban.

Ha a kinyerés nem sikerül (régi/sérült RAW fájl), akkor egy szürke SVG placeholder jelenik meg a kiterjesztéssel (pl. "ARW").

A RAW-only kártyákon megjelenik egy **lila RAW badge** jelezve, hogy ez csak RAW fájl.

### Nagy nézetben (modal)

Amikor megnyitsz egy RAW-only képet:

1. **Azonnal megjelenik** a thumbnail (amit a rácsból is láttál), enyhe blur-rel
2. **Háttérben betöltõdik** a teljes embedded JPEG preview (ez a legjobb minõségû kép a RAW fájlban)
3. **Blur eltûnik**, megjelenik az élesebb, nagyobb felbontású preview

:::info
**Minõség:** A legtöbb modern kamera (Sony, Canon, Nikon, Fujifilm stb.) teljes vagy közel teljes felbontású JPEG-et ment a RAW fájlba. Ez elegendõ a válogatáshoz és értékeléshez.
:::

## Technikai háttér

A RAW fájlok belsõ szerkezete:

```
RAW fájl belsõ tartalma:
 RAW képadat (nyers szenzor adatok)
 EXIF metaadatok
 Kis JPEG thumbnail (általában ~160×120 px)
 Nagy JPEG preview (általában ~1920×1280 px vagy teljes res)
```

Az alkalmazás a **beágyazott JPEG preview-kat** keresi a fájlban (JPEG SOI marker: `FF D8 FF`), és a legmagasabb felbontásút jeleníti meg.

## Megjelenítési módok összehasonlítása

| | JPG/PNG kép | RAW-only fájl |
|---|---|---|
| **Kis nézet** | Original thumbnail | Beágyazott JPEG thumbnail |
| **Nagy nézet** | Eredeti fájl | Beágyazott JPEG preview |
| **Minõség** | Eredeti | Kamera által generált |
| **Betöltési sebesség** | Azonnali | 1-3 mp (nagy fájlok) |

## Kezelés és export

A RAW-only képek ugyanúgy kezelhetõk mint a normál képek:

- **Csillagozás:** 1-5 csillag beállítható
- **Flagging:** Megjelölhetõ fontosnak
- **Elutasítás:** Selejtezethetõ
- **Export:** A RAW fájl közvetlenül másolásra kerül a célmappába

## Szûrõk

A RAW-only képek megjelennek az összes szûrõben:

| Szûrõ | Viselkedés |
|---|---|
| Összes | Megjelenik |
| Jelölt | Ha jelöltük, megjelenik |
| Elutasított | Ha elutasítottuk, megjelenik |
| Értékelt (min. rating) | Ha értékeltük, megjelenik |

## Tippek

Ha sok RAW-only van, a betöltés hosszabb ideig tarthat (20-80 MB fájlok). Ez normális.

Ha egy RAW fájlból nem sikerül kinyerni az embedded JPEG-et, az alkalmazás SVG placeholdert mutat. Ez rendkívül ritka, és általában sérült fájlra utal.
