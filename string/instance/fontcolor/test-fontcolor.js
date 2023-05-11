require('./fontcolor.js')

function testFontcolor() {
  {// Test case 1: standard
    const str1 = "Hello, world!"
    const coloredStr1 = str1.fontcolor("red")

    if (coloredStr1 !== '<font color="red">Hello, world!</font>') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: empry string
    const str2 = ""
    const coloredStr2 = str2.fontcolor("blue")

    if (coloredStr2 !== '<font color="blue"></font>') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}

testFontcolor()