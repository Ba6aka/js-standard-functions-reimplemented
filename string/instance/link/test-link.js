require('./link.js')

testLink()

function testLink() {
  { // Test case 1
    const str = "Google"
    const url = "https://www.google.com"
    const expected = '<a href="https://www.google.com">Google</a>'
    const actual = str.link(url)

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case: passed')
    }
  }

  { // Test case 2: empty string
    const str = ""
    const url = "https://www.example.com"
    const expected = '<a href="https://www.example.com"></a>'
    const actual = str.link(url)

    if (actual !== expected) {
      console.error(`Test 2, empty string: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 2, empty string: passed')
    }
  }
}