const fs = require('fs')
const { parse } = require('csv-parse')

fs.createReadStream('./liste_deputes_libre_office.csv')
  .pipe(parse({ delimiter: ',', from_line: 2 }))
  .on('data', function (row) {
    const identifiant = row[0]
  })
