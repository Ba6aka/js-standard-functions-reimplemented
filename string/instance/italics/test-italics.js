function testItalics() {
  {// Test case 1
    const str1 = "This is a test"
    const str2 = str1.italics()

    if (str2 !== '<i>This is a test</i>') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str3 = "<b>This is bold text</b>"
    const str4 = str3.italics()

    if (str4 !== '<i><b>This is bold text</b></i>') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str5 = "This is <b>bold text</b> and this is not"
    const str6 = str5.italics()

    if (str6 !== '<i>This is <b>bold text</b> and this is not</i>') {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
  
}

testItalics()