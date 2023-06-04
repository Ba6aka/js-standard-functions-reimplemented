require('./sub.js')

testSub()

function testSub() {
  { // Test case 1: normal case
    const str1 = "H2O"
    const sub1 = str1.sub()

    if (sub1 !== "<sub>H2O</sub>") {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: empty string
    const str2 = ""
    const sub2 = str2.sub()

    if (sub2 !== "<sub></sub>") {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}
