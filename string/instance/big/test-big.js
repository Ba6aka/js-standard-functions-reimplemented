function testBig() {
  {// Test case 1: standard 
    const str = 'Hello'
    const strBig = str.big()

    if (strBig !== '<big>Hello</big>') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: empty string 
    const str = ''
    const strBig = str.big()

    if (strBig !== '<big></big>') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

}

testBig()