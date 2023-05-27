require('./anchor.js')

testAnchor()

function testAnchor() {
  {// Test case 1 : normal case
    const str = "Hello, world!"
    const name = "myAnchor"
    const expected = `<a name="${name}">${str}</a>`
    const actual = str.anchor(name)

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected: ${expected}, but got ${actual}`)
    } else {
      console.log('Test 1, normal case:  passed')
    }
  }
}
