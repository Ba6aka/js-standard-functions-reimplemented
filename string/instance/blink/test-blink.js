require('./blink.js')

function testBlink() {
  {// Test case 1: standard 
    const str = 'hello'
    const strBlink = str.blink()

    if (strBlink !== '<blink>hello</blink>') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: empty string
    const str = ' '
    const strBlink = str.blink()

    if (strBlink !== '<blink> </blink>') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}

testBlink()