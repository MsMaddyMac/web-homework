const formatBoolToTxt = (boolean) => boolean === true ? 'True' : 'False'

const convertToRoman = (num) => {
  let numberArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let RomanArr = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I'
  ]
  let result = []

  // finds element in given array that is less than or equal to
  // the number passed into convertToRoman func
  // this is so the roman numeral character is never quadrupled ex: 'XXXX'
  const findElement = e => {
    return e <= num
  }

  //  doesn't account for any number greater than 3,999
  while (num > 0) {
    let nextHighest = numberArr.find(findElement)

    result.push(RomanArr[numberArr.indexOf(nextHighest)])
    num -= nextHighest
  }
  let newResult = result.join('')

  return newResult
}

export { formatBoolToTxt, convertToRoman }
