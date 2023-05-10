require('./concat.js')

function testConcat() {
  {// Test case 1
    const str1 = "Hello, "
    const str2 = "world!"
    const str3 = str1.concat(str2)

    if (str3 !== "Hello, world!") {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str4 = "foo"
    const str5 = "bar"
    const str6 = "baz"
    const str7 = str4.concat(str5, str6)

    if (str7 !== "foobarbaz") {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str8 = "Hello, "
    const str9 = "world!"
    const str10 = " How are you?"
    const str11 = str8.concat(str9, str10)

    if (str11 !== "Hello, world! How are you?") {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4
    const str12 = ""
    const str13 = "Hello, world!"
    const str14 = str12.concat(str13)

    if (str14 !== "Hello, world!") {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }

  {// Test case 5
    const str15 = "Hello, world!"
    const str16 = ""
    const str17 = str15.concat(str16)

    if (str17 !== "Hello, world!") {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5 passed')
    }
  }
}

testConcat()