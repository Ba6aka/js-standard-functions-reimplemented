require('./fontcolor.js')

function testFontcolor() {
  {// Test case 1: standard
    const str = "Hello, world!"
    const coloredStr = str.fontcolor("red")

    if (coloredStr !== '<font color="red">Hello, world!</font>') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: empry string
    const str = ""
    const coloredStr = str.fontcolor("blue")

    if (coloredStr !== '<font color="blue"></font>') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}

testFontcolor()