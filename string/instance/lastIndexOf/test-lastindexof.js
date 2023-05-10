require('./lastIndexOf.js')

function testLastIndexOf() {
  {// Test case 1
    const str1 = "Hello, world!"
    const index1 = str1.lastIndexOf("o")
    if (index1 !== 8) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str2 = "Hello, world!"
    const index2 = str2.lastIndexOf("o", 5)
    if (index2 !== 4) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str3 = "Hello, world!"
    const index3 = str3.lastIndexOf("z")
    if (index3 !== -1) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4
    const str4 = "Hello, world!"
    const index4 = str4.lastIndexOf("H")
    if (index4 !== 0) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }

}

testLastIndexOf()