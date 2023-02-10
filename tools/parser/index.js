/**
* Questo è un semplice script per analizzare il riferimento alla funzione ph3 di Sparen e
 * trasformalo nel formato di cui ha bisogno questa estensione per funzionare.
 *
 * Utilizzo: estrai il JSON dai file JS di Sparen in file e inseriscili in
 * `./files` (ad esempio, `./files/system.json`, `./files/standard.json` e
 * `./files/object.json`).
 *
 * Esegui questo parser tramite `node ./index.js`. Questo combina e trasforma il
 * file e inserisce l'output in
 * `../../server/src/dictionary/files/functions.json`.
 *
 * NON utilizzare questo e rendere pubblicamente disponibili le versioni analizzate (incluso
 * versioni a pagamento del tuo software/progetti) senza richiedere Sparen
 * permesso di farlo.
 */

const path = require('path')
const fs = require('fs')

const fileNames = [
  // e.g., 'system', 'standard', 'object'
]

const output = []

for (const fileName of fileNames) {
  const file = require(`./files/${fileName}`)

  for (const cat of file.categories) {
    for (const func of cat.fxns) {
      const args = []

      for (const arg of func.args) {
        const argsArray = arg.split('`a []').join('free []').split(':')

        args.push(
          {
            name: argsArray[0].trim(),
            type: (typeof argsArray[1] !== 'undefined')
              ? argsArray[1].trim()
              : ''
          }
        )
      }

      const returnV = {}

      if (func.returnv.trim() !== '') {
        const returnVArray = func.returnv
          .split('`a []')
          .join('free []')
          .split(':')

        returnV.name = returnVArray[0].trim()
        returnV.type = (typeof returnVArray[1] !== 'undefined')
          ? returnVArray[1].trim()
          : ''
      }

      const description = func.description
        .split('<br>')
        .join('\n\n')
        .split('<code>')
        .join('`')
        .split('</code>')
        .join('`')
        .split('"')
        .join('\'')
        .trim()

      const notes = func.notes
        .split('<br>')
        .join('\n\n')
        .split('<code>')
        .join('`')
        .split('</code>')
        .join('`')
        .split('"')
        .join('\'')
        .trim()

      output.push({
        name: func.fname.trim(),
        arguments: args,
        return: returnV,
        description: description,
        notes: notes
      })
    }
  }
}

fs.writeFileSync(
  path.resolve(
    __dirname,
    `../../server/src/dictionary/files/functions.json`
  ),
  JSON.stringify(output, null, 2) + '\n'
)
