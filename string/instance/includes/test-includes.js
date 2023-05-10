require('./includes.js')

function testIncludes() {
  {// Test case 1
    const str1 = "Hello, world!"
    const result1 = str1.includes("world")
    if (result1 !== true) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str2 = "Hello, world!"
    const result2 = str2.includes("world", 7)
    if (result2 !== true) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str3 = "Hello, world!"
    const result3 = str3.includes("World")
    if (result3 !== false) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4
    const str4 = "Hello, world!"
    const result4 = str4.includes("world", 8)
    if (result4 !== false) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }
  
}

testIncludes()