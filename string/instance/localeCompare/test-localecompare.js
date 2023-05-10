require('./localeCompare.js')

function testLocaleCompare() {
  {// Test case 1
    const str1 = "abc"
    const str2 = "def"
    if (str1.localeCompare(str2) < 0) {
      console.log('Test case 1 passed')
    } else {
      console.error('Test case 1 failed')
    }
  }

{// Test case 2
  const str3 = "xyz"
  const str4 = "abc"
  if (str3.localeCompare(str4) <= 0) {
    console.error('Test case 2 failed')
  } else {
    console.log('Test case 2 passed')
  }
}

  {// Test case 3
    const str5 = "foo"
    const str6 = "foo"
    if (str5.localeCompare(str6) !== 0) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }


}

testLocaleCompare()