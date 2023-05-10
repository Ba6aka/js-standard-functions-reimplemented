require('./endsWith.js')


function testEndsWith() {
  {// Test case 1
    const str1 = "Hello, world!"
    if (str1.endsWith("world!") !== true) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str2 = "The quick brown fox jumps over the lazy dog"
    if (str2.endsWith("dog") !== true) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str3 = "The quick brown fox jumps over the lazy dog"
    if (str3.endsWith("quick", 9) !== true) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4
    const str4 = "The quick brown fox jumps over the lazy dog"
    if (str4.endsWith("brown", 13) !== false) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }
}

testEndsWith()