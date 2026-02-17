---
sidebar_position: 3
---

# Munka folyamat

Az Image Sorter Studio a **3 körös selejtezési módszeren** alapul. Ez egy bevált fényképészeti szortírozási technika, amely garantálja a legminőségibb képek kiválasztását.

## A 3 körös módszer

### 1. kör: Selejtezés (Reject)

Az első körben a nyilvánvalóan hibás képeket jelölöd meg az **X** gombbal.

**Mitől jelöl meg selejtezésre:**
- Teljesen elmosódott felvételek
- Zárt szemek
- Rossz kompozíció
- Technikai hibák (túlexponált, alulexponált)
- Képernyő-szelek vagy véletlen felvételek

**Hogyan jelenik meg:**
- Selejtés után a képen egy **szürke X** ikon jelenik meg
- Exportáláskor a selejtézett képek kihagyodásra kerülnek

### 2. kör: Finomítás (Flag)

A maradék képekből kiválasztod a **flagged** (megjelölt) képeket az **Y** billentyűvel.

**Mit jelölj meg flagként:**
- Képek, amelyek potenciálisan erős szekcióba kerülhetnek
- Alternatív szögek vagy pózok
- Fejlesztésre érdemes, de még nem "arany"

**Hogyan jelenik meg:**
- A flagged képeken egy **zöld zászló** ikon jelenik meg
- A flagged képeket később külön exportálhatod

### 3. kör: Értékelés (Rating)

Az összes megmaradt képet **1–5 csillag** között értékelsz.

**Értékelési skála:**
- ⭐ **1 csillag:** Alapvető, megtartandó kép
- ⭐⭐ **2 csillag:** Jó kép, némi szerkesztésre szorulhat
- ⭐⭐⭐ **3 csillag:** Kiváló kép, minimális szerkesztés szükséges
- ⭐⭐⭐⭐ **4 csillag:** Rendkívül jó, szinte kész kép
- ⭐⭐⭐⭐⭐ **5 csillag:** Masterpiece, azonnal használható

**Billentyűparancsok:**
- **1 - 5:** Közvetlenül az adott csillag rendelhető
- **+ / -:** Csillag hozzáadása/eltávolítása

## Alternatív munkafolyamatok

### Flag-alapú szortírozás

Ha csak a legjobb képeket szeretnéd megtartani:

1. **Selejtezés:** Nyilvánvaló utolsók eltávolítása
2. **Flagging:** Csak az 5 csillagos képeket jelöld meg
3. **Export:** Csak a flagged képek exportálása

```
Export opciók:
- ☑️ Csak jelölttek (Flagged)?
- ☐ Min. rating beállítása
```

### Csillag-alapú szortírozás

Ha van idő részletesebb értékelésre:

1. **Selejtezés:** Nyilvánvaló utolsók
2. **Értékelés:** Összes kép csillagozása
3. **Szűrés:** Min. rating = 3 (vagy 4)
4. **Export:** Szűrt képek

```
Export opciók:
- ☐ Csak jelölttek (Unchecked)
- ☑️ Min. rating: 3 (vagy 4)
```

## Speciális szortírozások

### RAW + JPEG párok

Ha vannak **RAW + JPEG párod:**

1. A szoftver automatikusan párosítja őket
2. Az értékelés mindkét fájlra vonatkozik
3. Az exportáláskor a választott formátumban kerül mentésre (vagy mindkettő)

### Csak RAW fájlok

Ha egy mappa **csak RAW fájlokat** tartalmaz:

1. Az alkalmazás helyettesítő ikonnal jeleníti meg őket
2. Az értékelés normálisan működik
3. Az exportáláskor a RAW fájl közvetlenül másolásra kerül

Lásd: [RAW-only fájlok](../advanced-group/raw-only-files)

## Haladó tippek

### JSON szekciók mentése

Ha több részletben válogatsz, és később vissza szeretnél térni:

1. Szűrd le az aktuális szekciót (pl. "Bridal", "Family")
2. Az exportáláskor válassz **JSON export**-ot
3. Később importáld vissza az adatokat

Lásd: [JSON szekciók](../advanced-group/json-sessions)

### DezsoCloud szinkronizálás

Ha több eszközön szeretnél dolgozni ugyanazon a mappán:

1. Engedélyezd a DezsoCloud szinkronizálást
2. Az alkalmazás automatikusan szinkronizálja az értékeléseket
3. A szerkesztéseket összefésüli, ha szükséges

Lásd: [DezsoCloud integrálás](../advanced-group/dezsocloud)

### Szűrők és rendezés kombinálása

Komplex szortírozáshoz kombináld az eszközöket:

**Forgatókönyv: "Bridal szekció, csak 4+ csillag"**
1. **Szűrés:** Bridal tag
2. **Rendezés:** Rating → descending
3. **Exportálás:** Min. rating = 4
4. **Export:** Az összes kiválasztott megfelelő kép exportálva

## Billentyűparancsok gyorstálálózat

| Billentyű | Funkció |
|---|---|
| **1–5** | Csillag beállítása |
| **Y** | Flag (megjelölés) |
| **X** | Reject (selejtezés) |
| **Nyíl bal/jobb** | Előző/Következő kép |
| **Szóköz** | Zoom be/ki váltás |
| **+/−** | Zoom |

A teljes billentyűparancs lista: [Billentyűparancsok](keyboard-shortcuts)

## Munkamenet lezárása

Az exportáláshoz válassz az alábbiak közül:

### 1. opció: Szűrt lista exportálása
```
1. Szűrés alkalmazása (min. rating, flag)
2. Kattints "Export" (📤)
3. Exportálás konfigurálása
4. "Export" gomb
```

### 2. opció: JSON mentés + későbbi visszatöltés
```
1. Kattints a "JSON Export" linkre az Export ablakban
2. A .json fájl mentésre kerül
3. Később szöveges szerkesztővel módosítható
4. Importald vissza az adatokat az Import gombbal
```

Lásd: [Export útmutató](../features-group/export)
