require('./fixed.js')

function testFixed() {
  {// Test case 1
    const str1 = "Hello, world!"
    const str2 = str1.fixed()

    if (str2 !== "Ｈｅｌｌｏ， ｗｏｒｌｄ！") {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str3 = "12345"
    const str4 = str3.fixed()

    if (str4 !== "１２３４５") {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str5 = "   "
    const str6 = str5.fixed()

    if (str6 !== "　　　") {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
  
}

testFixed()