require('./fontsize.js')

function testFontsize() {
  {// Test case 1
    const str1 = "Hello, world!"
    const str2 = str1.fontsize(4)

    if (str2 !== '<font size="4">Hello, world!</font>') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str3 = "The quick brown fox"
    const str4 = str3.fontsize(2)

    if (str4 !== '<font size="2">The quick brown fox</font>') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str5 = "jumps over the lazy dog"
    const str6 = str5.fontsize(3)

    if (str6 !== '<font size="3">jumps over the lazy dog</font>') {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
}

testFontsize()