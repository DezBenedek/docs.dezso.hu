---
sidebar_position: 2
---

# Szűrés és Rendezés

A szűrés és rendezés eszközei a fejléc közepén, az eszköztárban találhatóak.

## Szűrők

A szűrőkre kattintva a nézet azonnal frissül, csak a szűrt képek látszanak.

### Összes (▦)
Az alapértelmezett szűrő. Minden betöltött képet megjelenít, függetlenül az értékelés, jelölés vagy elutasítás állapotától.

### Jelölt (🚩)
Csak a zászlóval jelölt képeket mutatja. Ezek a képek a jelöléskor zöld kerettel és zöld zászló badge-dzsel vannak megjelölve.

### Elutasított (✕)
Csak az `X` billentyűvel vagy gombbal elutasított képeket mutatja. Ezek a képek halványítva és piros kerettel jelennek meg.

### Értékelt (⭐)
Megjelenít egy lenyíló menüt a minimum csillagszám kiválasztásához:

| Opció | Leírás |
|---|---|
| 1+ | Minden értékelt kép (legalább 1 csillag) |
| 2+ | Legalább 2 csillag |
| 3+ | Legalább 3 csillag (alapértelmezett) |
| 4+ | Legalább 4 csillag |
| 5 | Csak az 5 csillagos képek |

## Rendezés

A lenyíló listáról kiválasztott rendezési sorrend az aktuálisan szűrt képekre vonatkozik.

### Név szerinti rendezés

- **Név (A–Z)** — Fájlnév alfabetikus sorrendben
- **Név (Z–A)** — Fájlnév fordított alfabetikus sorrendben

A fájlneveket az alkalmazás kis- és nagybetűre érzékenyen rendezi, a számokat alfanumerikusan kezeli.

### Csillag szerinti rendezés

- **Legtöbb csillag** — A legmagasabb értékelésű képek kerülnek elöl. Azonos értékelésnél név szerinti rendezés
- **Legkevesebb csillag** — A legalacsonyabb értékelésű képek kerülnek elöl

### Jelöltek először

- A zászlóval jelölt képek kerülnek az elejére, utána a nem jelöltek
- Csoportokon belül az értékelés szerinti rendezés marad

## Szűrők kombinálása — Tipp

Egy szűrő csak egy lehet aktív egyszerre. Ha például szeretnéd csak az 5 csillagos **és** jelölt képeket látni:

1. **Nem** lehet mindkettőt szűrőként kiválasztani
2. **Megoldás:** Válaszd az 5 csillagos szűrőt, majd a rácsnézetben manuálisan keress a jelölt képek között

**Alternatíva:** Használd a JSON export/import funkcionalitást szűréshez és csoportosításhoz (lásd a haladó szekció JSON munkamenet résznél).
