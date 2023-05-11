require('./link.js')

function testLink() {
  {// Test case 1
    const str = "Google"
    const url = "https://www.google.com"
    const link = str.link(url)

    if (link !== '<a href="https://www.google.com">Google</a>') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2: empty string
    const str = ""
    const url = "https://www.example.com"
    const link = str.link(url)

    if (link !== '<a href="https://www.example.com"></a>') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }
}

testLink()