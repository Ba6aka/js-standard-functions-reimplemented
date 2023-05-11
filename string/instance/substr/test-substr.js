require('./substr.js')

function testSubstr() {
  {// Test case 1: standard
    const str = "Hello, world!"
    const sub = str.substr(7)

    if (sub !== "world!") {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: with negative legnth index
    const str = "Hello, world!"
    const sub = str.substr(0, -5)

    if (sub !== "") {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}

testSubstr()