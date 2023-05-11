require('./padEnd.js')

function testPadEnd() {
  {// Test case 1: standard
    const str = "foo"
    const result = str.padEnd(6, "bar")
    
    if (result !== "foobar") {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: without fillString
    const str = "foo"
    const result = str.padEnd(4)
    
    if (result !== "foo ") {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}

testPadEnd()