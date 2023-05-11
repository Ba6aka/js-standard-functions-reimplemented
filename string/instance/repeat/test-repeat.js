require('./repeat.js')

function testRepeat() {
  {// Test case 1: standard
    const str = 'Hello! '
    const count = 3
    const repeatedStr = str.repeat(count)

    if (repeatedStr !== 'Hello! Hello! Hello! ') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 3: empty string
    const str = ''
    const count = 10
    const repeatedStr = str.repeat(count)

    if (repeatedStr !== '') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 4: zero repeat
    const str = 'Hello!'
    const count = 0
    const repeatedStr = str.repeat(count)

    if (repeatedStr !== '') {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
}

testRepeat()