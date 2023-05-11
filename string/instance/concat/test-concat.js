require('./concat.js')

function testConcat() {
  {// Test case 1: standard
    const str1 = "Hello, "
    const str2 = "world!"
    const str3 = str1.concat(str2)

    if (str3 !== "Hello, world!") {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: three strings
    const str1 = "foo"
    const str2 = "bar"
    const str3 = "baz"
    const str4 = str1.concat(str2, str3)

    if (str4 !== "foobarbaz") {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3: empty string
    const str1 = ""
    const str2 = "Hello, world!"
    const str3 = str1.concat(str2)

    if (str3 !== "Hello, world!") {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

}

testConcat()