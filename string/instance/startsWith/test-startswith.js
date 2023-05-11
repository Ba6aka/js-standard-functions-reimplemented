require('./startsWith.js')

function testStartsWith() {
  {// Test case 1: standard
    const str1 = "Hello, world!"
    const search1 = "Hello"

    if (!str1.startsWith(search1)) {
      console.error("Test case 1 failed")
    } else {
      console.log("Test case 1 passed")
    }
  }
}

testStartsWith()