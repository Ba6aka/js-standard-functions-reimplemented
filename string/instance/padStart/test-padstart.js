require('./padStart.js')

function testPadStart() {
  {// Test case 1: standard
    const str = "Hello";
    const paddedStr = str.padStart(7, "123")

    if (paddedStr !== "12Hello") {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: without fillString
    const str = "World";
    const paddedStr = str.padStart(10)

    if (paddedStr !== "     World") {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}

testPadStart()