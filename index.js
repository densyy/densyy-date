/* ---- Requires ---- */

const moment = require('moment')

/* ---- Methods ---- */

function agora () {
  return moment().toDate()
}

//
// Add
//

function addHoras (data, horas) {
  return moment(data).add(horas, 'hours').toDate()
}

function addDias (data, dias) {
  return moment(data).add(dias, 'days').toDate()
}

function addMeses (data, meses) {
  return moment(data).add(meses, 'months').toDate()
}

function addAnos (data, anos) {
  return moment(data).add(anos, 'years').toDate()
}

//
// Print
//

function printDateBR (data) {
  const formato = 'DD/MM/YYYY'
  return moment(data).format(formato)
}

function printDateTimeBR (data) {
  const formato = 'DD/MM/YYYY HH:mm:ss'
  return moment(data).format(formato)
}

function printDateUSA (data) {
  const formato = 'YYYY-MM-DD'
  return moment(data).format(formato)
}

//
// String
//

function dataStringBRtoDate (dataStringBR) {
  return moment(dataStringBR, 'DD/MM/YYYY').toDate()
}

function dataStringUSAtoDate (dataStringBR) {
  return moment(dataStringBR, 'YYYY-MM-DD').toDate()
}

//
// Object
//

function dataObjtoDate (ano, mes, dia = 1) {
  const stringDataUSA = `${ano}-${mes}-${dia}`
  return dataStringUSAtoDate(stringDataUSA)
}

module.exports = {
  agora,

  addHoras,
  addDias,
  addMeses,
  addAnos,

  printDateBR,
  printDateTimeBR,
  printDateUSA,

  dataStringBRtoDate,
  dataStringUSAtoDate,
  dataObjtoDate,
}
