require('./match.js')

testMatch()

function testMatch() {
  const { stringify } = JSON

  { // Test case 1: match o
    const str = "The quick brown fox jumps over the lazy dog."
    const regexp = /o/g
    const expected = ['o', 'o', 'o', 'o']
    const actual = str.match(regexp)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 1, match o: failed, expected: ${stringify(expected)}, but got : ${stringify(actual)}`)
    } else {
      console.log('Test 1, match o: passed')
    }
  }

  { // Test case 2: match e
    const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    const regexp = /e/g
    const expected = ['e', 'e', 'e', 'e', 'e']
    const actual = str.match(regexp)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 2, match e: failed, expected: ${stringify(expected)}, but got : ${stringify(actual)}`)
    } else {
      console.log('Test 2, match e: passed')
    }
  }

  { // Test case 3: match x
    const str = "The quick brown fox jumps over the lazy dog."
    const regexp = /x/g
    const expected = ['x']
    const actual = str.match(regexp)

    if (stringify(actual) !== stringify(expected)) {
      console.error(`Test 3, match x: failed, expected: ${stringify(expected)}, but got : ${stringify(actual)}`)
    } else {
      console.log('Test 3, match x: passed')
    }
  }
}
