require('./entries.js')

testEntries()

function testEntries() {
  const { stringify } = JSON

  { // Test case 1: normal case
    const arr = ['a', 'b', 'c']
    const expected = [[0, 'a'], [1, 'b'], [2, 'c']]
    const actual = arr.entries()

    for (let i = 0; i < expected.length; i++) {
      const [index, value] = actual.next().value
      if (index !== expected[i][0] || value !== expected[i][1]) {
        console.error(`Test 1, normal case: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
        return
      }
    }

    console.log('Test 1, normal case: passed')
  }

  { // Test case 2: empty array
    const arr = []
    const expected = []
    const actual = arr.entries()

    for (let i = 0; i < expected.length; i++) {
      const [index, value] = actual.next().value
      if (index !== expected[i][0] || value !== expected[i][1]) {
        console.error(`Test 2, empty array: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
        return
      }
    }

    console.log('Test 2, empty array: passed')
  }

  { // Test case 3: array with one item
    const arr = ['a']
    const expected = [[0, 'a']]
    const actual = arr.entries()

    for (let i = 0; i < expected.length; i++) {
      const [index, value] = actual.next().value
      if (index !== expected[i][0] || value !== expected[i][1]) {
        console.error(`Test 3, array with one item: failed, expected ${stringify(expected)}, but got ${stringify(actual)}`)
        return
      }
    }

    console.log('Test 3, array with one item: passed')
  }
}

