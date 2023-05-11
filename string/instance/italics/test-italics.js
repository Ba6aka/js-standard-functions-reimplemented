require('./italics.js')

function testItalics() {
  {// Test case 1: standard
    const str = "This is a test"
    const strItalics = str.italics()

    if (strItalics !== '<i>This is a test</i>') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: string with other tag
    const str = "<b>This is bold text</b>"
    const strItalics = str.italics()

    if (strItalics !== '<i><b>This is bold text</b></i>') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3: empty string
    const str = ""
    const strItalics = str.italics()

    if (strItalics !== '<i></i>') {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
}

testItalics()