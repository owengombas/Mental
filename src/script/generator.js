export default function getRandom (count, max = 10) {
  let text = ''

  for (let i = 0; i < count; i++) {
    let coefficient = Math.floor(Math.random() * 2) === 1 ? 1 : -1
    let opperation = ''
    if (i > 0) {
      opperation = Math.floor((Math.random() * 5) + 1)
      switch (opperation) {
        case 1:
        case 2:
          opperation = '+'
          break
        case 3:
        case 4:
          opperation = '-'
          break
        case 5:
          opperation = '*'
          break
      }
    }
    let number = Math.floor((Math.random() * max) + 1) * coefficient
    text += ' ' + opperation + ' ' + (number < 0 ? '(' + number + ')' : number)
  }
  return {
    text: text.trim().replace(/\*/g, '•'),
    /* eslint-disable no-eval */
    result: eval(text)
  }
}
