require('./charAt.js')

function testCharAt() {
  {  // Test case 1
    const str1 = "hello"

    if (str1.charAt(1) !== "e") {
      console.error("Test case 1 failed")
    } else {
      console.log("Test case 1 passed")
    }
  }

  {  // Test case 2
    const str2 = "world"

    if (str2.charAt(4) !== "d") {
      console.error("Test case 2 failed")
    } else {
      console.log("Test case 2 passed")
    }
  }

  {  // Test case 3
    const str3 = "abc"

    if (str3.charAt(3) !== "") {
      console.error("Test case 3 failed")
    } else {
      console.log("Test case 3 passed")
    }
  }
}

testCharAt()