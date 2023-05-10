require('./blink.js')

function testBlink() {
  {// Test case 1
    const str1 = 'hello'
    const str2 = str1.blink()

    if (str2 !== '<blink>hello</blink>') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str3 = 'world'
    const str4 = 'hello'.concat(' ', str3).blink()

    if (str4 !== '<blink>hello world</blink>') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str5 = 'test'
    const str6 = str5.concat('1', '2').blink()

    if (str6 !== '<blink>test12</blink>') {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4
    const str7 = ''
    const str8 = str7.blink()

    if (str8 !== '<blink></blink>') {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }

  {// Test case 5
    const str9 = 'this is a test'
    const str10 = str9.slice(0, 4).concat(' ', str9.slice(5)).blink()

    if (str10 !== '<blink>this is a test</blink>') {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  }
  
}

testBlink()