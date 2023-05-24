require('./unshift.js')

function testUnshift() {
  const { stringify } = JSON

  { // Test case 1: array of strings
    const arr = ['a', 'b', 'c']
    const expectedLength = 4
    const expectedArr = ['d', 'a', 'b', 'c']
    const actualLength = arr.unshift('d')

    if (actualLength != expectedLength || stringify(arr) != stringify(expectedArr)) {
      console.error(`Test 1, array of strings:failed, expected length: ${expectedLength},but got length: ${actualLength}, expected array: ${stringify(expectedArr)}, but got array: ${stringify(arr)}`)
    } else {
      console.log('Test 1, array of strings: passed')
    }
  }

  { // Test case 2: empty array
    const arr = []
    const expectedLength = 3
    const expectedArr = ['a', 'b', 'c']
    const actualLength = arr.unshift('a', 'b', 'c')

    if (actualLength != expectedLength || stringify(arr) != stringify(expectedArr)) {
      console.error(`Test 2, empty array:failed, expected length: ${expectedLength},but got length: ${actualLength}, expected array: ${stringify(expectedArr)}, but got array: ${stringify(arr)}`)
    } else {
      console.log('Test 2, empty array: passed')
    }
  }

  { // Test case 3: adding non-primitive values
    const arr = [{ name: 'John' }, { name: 'Jane' }]
    const expectedLength = 3
    const expectedArr = [{ name: 'Alice' }, { name: 'John' }, { name: 'Jane' }]
    const actualLength = arr.unshift({ name: 'Alice' })

    if (actualLength != expectedLength || stringify(arr) != stringify(expectedArr)) {
      console.error(`Test 3,adding non-primitive values: failed, expected length: ${expectedLength},but got length: ${actualLength}, expected array: ${stringify(expectedArr)}, but got array: ${stringify(arr)}`)
    } else {
      console.log('Test 3, adding non-primitive values: passed')
    }
  }
}

testUnshift()
