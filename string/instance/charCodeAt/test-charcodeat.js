require('./charCodeAt.js')

function testCharCodeAt() {
  // Test case 1
  const str1 = 'ABC'
  const expected1 = 65
  const actual1 = str1.length > 0 ? str1.charCodeAt(0) : NaN
  if (actual1 !== expected1) {
    console.error(`Test case 1 failed: expected ${expected1}, but got ${actual1}`)
  } else {
    console.log('Test case 1 passed')
  }

  // Test case 2
  const str2 = '123'
  const expected2 = 49
  const actual2 = str2.length > 0 ? str2.charCodeAt(0) : NaN
  if (actual2 !== expected2) {
    console.error(`Test case 2 failed: expected ${expected2}, but got ${actual2}`)
  } else {
    console.log('Test case 2 passed')
  }

  // Test case 3
  const str3 = 'abc'
  const expected3 = 97
  const actual3 = str3.length > 0 ? str3.charCodeAt(0) : NaN
  if (actual3 !== expected3) {
    console.error(`Test case 3 failed: expected ${expected3}, but got ${actual3}`)
  } else {
    console.log('Test case 3 passed')
  }
}

testCharCodeAt()