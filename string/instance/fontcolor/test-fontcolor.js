require('./fontcolor.js')

function testFontcolor() {
  {// Test case 1
    const str1 = "Hello, world!"
    const coloredStr1 = str1.fontcolor("red")

    if (coloredStr1 !== '<font color="red">Hello, world!</font>') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str2 = "Lorem ipsum dolor sit amet"
    const coloredStr2 = str2.fontcolor("blue")

    if (coloredStr2 !== '<font color="blue">Lorem ipsum dolor sit amet</font>') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str3 = "consectetur adipiscing elit"
    const coloredStr3 = str3.fontcolor("green")

    if (coloredStr3 !== '<font color="green">consectetur adipiscing elit</font>') {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
}

testFontcolor()