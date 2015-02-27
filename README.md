Játék lényege:
Belépés után a szoftver választ véletlenszerűen egy szabad játékost egy "INDÍTÁS" gomb lenyomása után. Elkezdenek versenyezni, hogy ki hagyja le hamarabb a másikat. Játék közben a két játékos foglalt állapotot kap. 
Aki nyer, az kap egy pontot, majd újra szabad állapotba kerül a két játékos.

A pálya viselkedése:
A pálya folyamatosan megy jobbról balra, kisebb nagyobb előre legenerált szigetekkel, amiben a karakter meg tud ütközni. A pályának eközben van egy gravitációja, ami húzza lefele a karaktert a képernyő alsó részéhez.

A karakter viselkedése:
Fix állapotban van a képernyőn, csak ugrani és guggolni tud. Folyamatosan zuhanó állapotban van, amíg szigethez nem érkezik.

Objektumok: Pálya, szigetek(több féle - nagy, kicsi, zuhanó, emelkedő), karakter


Pálya:
Elemek: háttér, sziget
Cselekvés: Fut, Gravitál

Szigetek:
Elemek: mérete
Cselekvés: mozog, áll

Karakter:
Elemek: karakterneve
Cselekvés: gugol, ugrik, áll

Játék:
csatlakozik két véletlen karakter
foglalt állapotba kerül a két karakter
betölti a hátteret
betölti a karaktereket
betölti a pályát
játszik amíg egy távolságon belül van a két játékos
