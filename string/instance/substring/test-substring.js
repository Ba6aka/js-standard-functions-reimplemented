require('./substring.js')

function testSubstring() {
  const str = 'Hello, world!'

  {// Test case 1: standard
    const substr = str.substring(7)

    if (substr !== 'world!') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {  // Test case 2: with end index
    const substr = str.substring(7, 12)

    if (substr !== 'world') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

}

testSubstring()