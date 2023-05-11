require('./charAt.js')

function testCharAt() {
  {// Test case 1: standard
    const str = "hello"

    if (str.charAt(1) !== "e") {
      console.error("Test case 1 failed")
    } else {
      console.log("Test case 1 passed")
    }
  }

  {// Test case 2: negative index
    const str = "world"
   
    if (str.charAt(-1) !== "") {
      console.error("Test case 2 failed")
    } else {
      console.log("Test case 2 passed")
    }
  }

  {// Test case 3: out range index
    const str = "abc"

    if (str.charAt(4) !== "") {
      console.error("Test case 3 failed")
    } else {
      console.log("Test case 3 passed")
    }
  }
}

testCharAt()