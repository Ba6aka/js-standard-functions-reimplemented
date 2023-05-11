require('./replaceAll.js')

function testReplace() {
  {// Test case 1: standard
    const str = "Hello, world!"
    const search = "world"
    const replace = "universe"
    const replacedStr = str.replaceAll(search, replace)

    if (replacedStr !== "Hello, universe!") {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: replace to empty string
    const str = "Lorem ipsum dolor sit amet"
    const search = "ipsum"
    const replace = ""
    const replacedStr2 = str.replaceAll(search, replace)

    if (replacedStr2 !== "Lorem  dolor sit amet") {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3: a lot the same search words
    const str = "Hello, Hello, Hello!"
    const search = "Hello"
    const replace = "Hi"
    const replacedStr = str.replaceAll(search, replace)

    if (replacedStr !== "Hi, Hi, Hi!") {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
}

testReplace()