require('./match.js')

function testMatch() {
  {// Test case 1
    const str1 = "The quick brown fox jumps over the lazy dog."
    const regexp1 = /o/g
    const result1 = str1.match(regexp1)

    if (result1.toString() !== ['o', 'o', 'o', 'o'].toString()) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    const regexp2 = /e/g
    const result2 = str2.match(regexp2)

    if (result2.toString() !== ['e', 'e', 'e', 'e', 'e'].toString()) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str3 = "The quick brown fox jumps over the lazy dog."
    const regexp3 = /x/g
    const result3 = str3.match(regexp3)

    if (result3.toString() !== ['x'].toString()) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
  
}

testMatch()