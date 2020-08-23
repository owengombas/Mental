function getOperation (operations = { minus: true, plus: true, times: true }) {
  let operation = ''
  operation = Math.floor((Math.random() * 5) + 1)
  switch (operation) {
    case 1:
    case 2:
      if (operations.plus) {
        operation = '+'
      } else {
        operation = getOperation(operations)
      }
      break
    case 3:
    case 4:
      if (operations.minus) {
        operation = '-'
      } else {
        operation = getOperation(operations)
      }
      break
    case 5:
      if (operations.times) {
        operation = '*'
      } else {
        operation = getOperation(operations)
      }
      break
  }
  return operation
}

export default function getRandom (
  count,
  max = 10,
  min = 1,
  operations = { minus: true, plus: true, times: true }
) {
  let text = ''
  let operation = ''
  for (let i = 0; i < count; i++) {
    let coefficient = Math.floor(Math.random() * 2) === 1 ? 1 : -1

    if (i > 0) {
      operation = getOperation(operations)
    }

    let number = Math.floor((Math.random() * max) + min) * coefficient
    text += ' ' + operation + ' ' + (number < 0 ? '(' + number + ')' : number)
  }
  return {
    text: text.trim().replace(/\*/g, '•'),
    /* eslint-disable no-eval */
    result: eval(text)
  }
}
