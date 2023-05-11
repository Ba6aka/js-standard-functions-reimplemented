require('./bold.js')

function testBold() {
  {  // Test case 1: standard
    const str = "hello"
    const boldStr = str.bold()

    if (boldStr !== "<b>hello</b>") {
      console.error("Test case 1 failed")
    } else {
      console.log("Test case 1 passed")
    }
  }

  {// Test case 2: empty string
    const str = ""
    const boldStr = str.bold()
    
    if (boldStr !== "<b></b>") {
      console.error("Test case 2 failed")
    } else {
      console.log("Test case 2 passed")
    }
  }
}

testBold()