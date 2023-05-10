function testBig() {
  {// Test case 1
    const str1 = 'Hello'
    const str2 = str1.big()

    if (str2 !== '<big>Hello</big>') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str3 = ''
    const str4 = str3.big()

    if (str4 !== '<big></big>') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str5 = 'Hello, world!'
    const str6 = str5.big()

    if (str6 !== '<big>Hello, world!</big>') {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
}

testBig()