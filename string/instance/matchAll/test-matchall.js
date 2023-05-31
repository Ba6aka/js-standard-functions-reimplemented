require('./matchAll.js')

testMatchAll()

function testMatchAll() {
  { // Test case 1: two arrays
    const str = "Hello, world!"
    const regex = /\w+/g
    const matches = str.matchAll(regex)
    const expected = [["Hello", 0], ["world", 7]]

    for (let i = 0; i < matches.length; i++) {
      const actual = matches[i]

      if (actual[0] !== expected[i][0] || actual.index !== expected[i][1]) {
        console.error(`Test 1, two arrays: failed, expexted word: ${expected[i][0]}, but got ${actual[0]}, expected index: ${expected[i][1]}, but got ${actual.index}`)
        return
      }
    }

    console.log('Test 1, two arrays: passed')
  }


  { // Test case 2: a lot of arrays
    const str = "The quick brown fox jumps over the lazy dog."
    const regex = /\w+/g
    const matches = str.matchAll(regex)
    const expected = [["The", 0],
    ["quick", 4],
    ["brown", 10],
    ["fox", 16],
    ["jumps", 20],
    ["over", 26],
    ["the", 31],
    ["lazy", 35],
    ["dog", 40]
    ]

    for (let i = 0; i < matches.length; i++) {
      const match = matches[i]

      if (match[0] !== expected[i][0] || match.index !== expected[i][1]) {
        console.error(`Test 2, a lot of arrays: failed, expexted word: ${expected[i][0]}, but got ${actual[0]}, expected index: ${expected[i][1]}, but got ${actual.index}`)
        return
      }
    }

    console.log('Test 2, a lot of arrays: passed')
  }

}
