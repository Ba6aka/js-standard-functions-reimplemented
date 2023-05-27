require('./charAt.js')

testCharAt()

function testCharAt() {
  { // Test case 1: normal case
    const str = "hello"
    const expected = "e"
    const actual = str.charAt(1)

    if (actual !== expected) {
      console.error(`Test 1, normal case: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log("Test 1, normal case: passed")
    }
  }

  { // Test case 2: negative index
    const str = "world"
    const expected = ""
    const actual = str.charAt(-1)

    if (actual !== expected) {
      console.error(`Test 2, negative index: failed, expected ${expected}, but got ${actual}`)
    } else {
      console.log("Test 2, negative index: passed")
    }
  }

  { // Test case 3: out range index
    const str = "abc"
    const expected = ""
    const actual = str.charAt(4)

    if (actual !== expected) {
      console.error(`Test 3, out range index: failed, expected ${expected}, but got ${actual}`)
    }else {
      console.log("Test 3, out range index: passed")
    }
  }
}

