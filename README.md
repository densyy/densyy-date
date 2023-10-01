# Densyy - Date

1. Instalação
```
pnpm add densyy-date
```

2. Utilização
```
/* ---- Requires ---- */

const helperDate = require('densyy-date')

/* ---- Examples ---- */

const data = helperDate.agora()

helperDate.addHoras(data, 1)
helperDate.addDias(data, 1)
helperDate.addMeses(data, 1)
helperDate.addAnos(data, 1)

helperDate.printDateBR(data) // '30-12-2022'
helperDate.printDateTimeBR(data) // '30-12-2022 18:22:00'
helperDate.printDateUSA(data) // '2022-12-30'

helperDate.dataStringBRtoDate('30-12-2022')
helperDate.dataStringUSAtoDate('2022-12-30')

helperDate.dataObjtoDate(ano, mes, dia)
```
