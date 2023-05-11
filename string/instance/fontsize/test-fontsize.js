require('./fontsize.js')

function testFontsize() {
  {// Test case 1: standard
    const str = "Hello, world!"
    const strSize = str.fontsize(4)

    if (strSize !== '<font size="4">Hello, world!</font>') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: empty string
    const str = ""
    const strSize = str.fontsize(2)

    if (strSize !== '<font size="2"></font>') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}

testFontsize()