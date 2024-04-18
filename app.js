const fs = require('node:fs')

const readFile = (file) => {
    const data = fs.readFileSync(file).toString()
    console.log(data)
    const characterCount = data.length
    const wordCount = data.split(/\s/).filter(item => item !== '').length
    const rowCount = data.split('\n').length
    console.log(`El texto proporcionado tiene ${characterCount} caracteres, ${wordCount} palabras y ${rowCount} líneas`)
}

readFile('./file.txt')