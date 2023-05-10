require('./link.js')

function testLink() {
  {// Test case 1
    const str1 = "Google"
    const url1 = "https://www.google.com"
    const link1 = str1.link(url1)

    if (link1 !== '<a href="https://www.google.com">Google</a>') {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str2 = "Example link"
    const url2 = "https://www.example.com"
    const link2 = str2.link(url2)

    if (link2 !== '<a href="https://www.example.com">Example link</a>') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str3 = "This is a test link"
    const url3 = "https://www.test.com"
    const link3 = str3.link(url3)

    if (link3 !== '<a href="https://www.test.com">This is a test link</a>') {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }
}

testLink()