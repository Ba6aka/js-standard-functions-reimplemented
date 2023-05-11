require('./strike.js')

function testStrike() {
  {// Test case 1: standard
    const str = "Hello, world!"
    const strStrike = str.strike()

    if (strStrike !== "<strike>Hello, world!</strike>") {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: sting empty
    const str = ""
    const strStrike = str.strike()

    if (strStrike !== "<strike></strike>") {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}

testStrike()