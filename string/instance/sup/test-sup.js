require('./sup.js')

function testSup() {
  {// Test case 1: standard
    const str1 = "H2O"
    const sub1 = str1.sup()

    if (sub1 !== "<sup>H2O</sup>") {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: empty string
    const str2 = ""
    const sub2 = str2.sup()

    if (sub2 !== "<sup></sup>") {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}

testSup()