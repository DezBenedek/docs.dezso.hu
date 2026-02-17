---
sidebar_position: 1
---

# Gyors Kezdés

Ez egy lépésről-lépésre útmutató az Image Sorter Studio első használatához. 15 perc alatt kész leszel az első képek exportálásával!

## 1. lépés: Az alkalmazás megnyitása

1. Nyisd meg az Image Sorter Studio-t: https://img.dezso.hu
2. A böngésző a **Jogi nyilatkozat** (Terms of Service) ablakot mutatja
3. Olvass el és kattints az **Elfogadom** gombra
4. Az alkalmazás betöltődik

## 2. lépés: Mappa kiválasztása

1. Kattints a **Mappa kiválasztása** (📁) gombra a fejlécben
2. Böngészd meg a fájlrendszert és válassz egy mappát **JPG/PNG/RAW fájlokkal**
3. Kattints az **Engedélyezés** gombra
4. Az alkalmazás betölti az összes képet

:::tip
**Szokott kérdések:**
- *Nincs mappa gomb?* → Böngésző frissítés (Chrome 86+, Edge 86+)
- *"Permission Denied" hiba?* → A böngésző nem fér hozzá a mappához (próbáld egy másik helyet)
- *Nagyon lassan töltődik?* → Normális 1000+ kép esetén (várd meg)
:::

## 3. lépés: Képek megjelenítése

Amint a képek betöltődnek:

- **Bal oldal:** Képek **rácsos nézete** (grid)
- **Grid kártyákon:** Sorszám, RAW státusz (ha vannak)
- **Felül:** Szűrés és rendezés opciók
- **Jobb oldal:** (Üres, amíg nem nyitsz meg egy képet)

## 4. lépés: Első kép megnyitása

Kattints egy képre a rácsban:

1. **Teljes képernyős megjelenítés** nyílik meg
2. **Jobb oldalon:** Csillag, Flag, Elutasítás (X) gombok
3. **Elérhető billentyűk:** Y (jelölés), X (elutasítás), 1–5 (értékelés)

## 5. lépés: Selejtezés (Első körben)

A teljes képernyős nézetben:

1. **Nyilvánvaló utolsók azonosítása:**
   - Elmosódott képek
   - Zárt szemek
   - Technikai hibák

2. **Az X gomb megnyomása (vagy Delete billentyű):**
   - A kép **szürke X** ikont kap
   - Az alkalmazás a **következő képre** ugrik
   - Az elutasított kép már nem kerül exportálásra

3. **Nyíl gombokkal (← / →) vagy a kép szélére kattintva** léphetsz a következő képre

:::info
**Tipp:** A selejtezés gyorsabb, mint az értékelés. Az első körben csak a nyilvánvalóan rossz képeket jelöld meg. A finom válogatást később az értékeléssel végzed.
:::

## 6. lépés: Flagging (Másodlagos jelölés)

Az első körben maradt képekre:

1. Nyomd meg az **Y billentyűt** (vagy kattints a **Flag** gombra)
2. A kép **zöld zászlót** kap
3. Ez a legjobb képek jelölésére használható
4. **Nyíl gombokkal (← / →)** léphetsz a következő képre

:::tip
**Mikor használd a Flag-et:**
- Alternatív szögek/pózok
- Kiváló felvételek, de még nem 5 csillag
- "Talán" képek későbbi döntéshez
:::

## 7. lépés: Csillagozás (Értékelés)

Az összes megmaradó képet értékeld:

| Billentyű | Mit jelent |
|---|---|
| **1** | Alapvető, de megtartandó |
| **2** | Jó, szerkesztésre szorulhat |
| **3** | Kiváló, minimális szerkesztés |
| **4** | Rendkívül jó |
| **5** | Masterpiece |

**Megnyomás után:** Az alkalmazás automatikusan **a következő képre ugrik**

:::info
**Gyors tipp:** 
- 1 csillag = szerkesztés után érdemes megtartani
- 3+ csillag = valóban jó képek
- 5 csillag = kész képek
:::

## 8. lépés: Szűrés alkalmazása

Ha befejeztél az értékeléssel (vagy párhuzamosan):

1. **Felül:** Szűrés opciók
2. **Min. rating:** Válassz 3+ értéket (csak a jó képek jelennek meg)
3. A rács **automatikusan szűrődik**

## 9. lépés: Exportálás

### Opció A: Egyszerű export

1. Kattints az **Export** (📤) gombra a fejlécben
2. **Opciók:**
   - ☑️ Csak jelölttek (Flag)
   - ☑️ Min. rating: 3 (vagy magasabb)
3. Kattints az **Export** gombra
4. **Mappa kiválasztása:** Hová szeretnéd másolni a fájlokat
5. Az alkalmazás **exportálja** a fájlokat

### Opció B: JSON mentés (Haladó)

1. Kattints az **Export** (↓) gombra, majd a **„Munkamenet mentése JSON-ba"** linkre
2. Egy `.json` fájl mentésre kerül
3. A fájl tartalmazza az összes értékelést és jelölést
4. Később importálhatod vissza az adatokat az **Import** (↑) gombbal

## 10. lépés: Kész!

Gratulálunk! 🎉 

Most már:
- ✅ Értékeltél képeket
- ✅ Szűrted le a legjobb képeket
- ✅ Exportáltad az eredményt

### Következő lépések:

- **[Részletesebb munkafolyamat](./workflow)** — A 3-körös módszer mélyebben
- **[Billentyűparancsok](./keyboard-shortcuts)** — Összes gomb és testreszabás
- **[RAW fájlok kezelése](../advanced-group/raw-only-files)** — Ha csak RAW-okat szeretnél
- **[DezsoCloud szinkronizálás](../advanced-group/dezsocloud)** — Több eszközön dolgozva

## Gyakori Problémák

### "A képek nem jelennek meg"
- ✅ Ellenőrizd, hogy a mappában valóban vannak JPG/PNG/WebP/RAW fájlok
- ✅ Próbáld egy másik mappával
- ✅ Böngésző konzol ellenőrzése (F12)

### "Az export nem működik"
- ✅ Legalább egy képnek 1+ csillagnak kell lennie
- ✅ Próbáld az egyszerű exportot (szűrés nélkül)
- ✅ A RAW fájlok másolása hosszú ideig tarthat (várd meg)

### "Nem tudom megnyitni a teljes képernyős nézetet"
- ✅ Kattints a rács képeire, ne az ikonokra
- ✅ Mobil eszközön a teljes nézet korlátozva van

### "Billentyűparancsok nem működnek"
- ✅ A **teljes képernyős nézet** aktív kell legyen (kattints a képre)
- ✅ Ellenőrizd a testreszabást a **Beállítások** menüben (⚙️)

## Összefoglalás
```
1. Mappa kiválasztása (📁)
2. Selejtezés (X) - rossz képek
3. Flagging (Y) - legjobb képek
4. Csillagozás (1-5) - összes kép
5. Szűrés (min. rating 3+)
6. Exportálás (📤)
```

Sok sikert az értékeléssel! 📸
