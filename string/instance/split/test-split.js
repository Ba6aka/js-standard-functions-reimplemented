require('./split.js')

function testSplit() {
  {// Test case 1: standard
    const str = "Hello, world!"
    const separator = ", "
    const result1 = str.split(separator)

    if (result1.toString() !== ["Hello", "world!"].toString()) {
      console.error("Test case 1 failed")
    } else {
      console.log("Test case 1 passed")
    }
  }

  {// Test case 2: wrong argument
    const str = "Lorem ipsum dolor sit amet"
    const separator = "Glory to Ukraine"
    const result = str.split(separator)

    if (result.toString() !== str) {
      console.error("Test case 2 failed")
    } else {
      console.log("Test case 2 passed")
    }
  }
}

testSplit()