require('./padEnd.js')

function testPadEnd() {
  {// Test case 1
    const str1 = "foo"
    const result1 = str1.padEnd(6, "bar")
    
    if (result1 !== "foobar") {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str2 = "foo"
    const result2 = str2.padEnd(3, "bar")
    
    if (result2 !== "foo") {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str3 = "foo"
    const result3 = str3.padEnd(6, " ")
    
    if (result3 !== 'foo   ') {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4
    const str4 = "foo"
    const result4 = str4.padEnd(5)
    
    if (result4 !== "foo  ") {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }
}

testPadEnd()