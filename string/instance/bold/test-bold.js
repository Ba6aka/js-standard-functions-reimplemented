require('./bold.js')

function testBold() {
  // Test case 1
  const str1 = "hello"
  const boldStr1 = str1.bold()
  if (boldStr1 !== "<b>hello</b>") {
    console.error("Test case 1 failed")
  } else {
    console.log("Test case 1 passed")
  }
  
  // Test case 2
  const str2 = "world"
  const boldStr2 = str2.bold()
  if (boldStr2 !== "<b>world</b>") {
    console.error("Test case 2 failed")
  } else {
    console.log("Test case 2 passed")
  }
  
  // Test case 3
  const str3 = "abc"
  const boldStr3 = str3.bold()
  if (boldStr3 !== "<b>abc</b>") {
    console.error("Test case 3 failed")
  } else {
    console.log("Test case 3 passed")
  }
  
  // Test case 4
  const str4 = ""
  const boldStr4 = str4.bold()
  if (boldStr4 !== "<b></b>") {
    console.error("Test case 4 failed")
  } else {
    console.log("Test case 4 passed")
  }
}

testBold()