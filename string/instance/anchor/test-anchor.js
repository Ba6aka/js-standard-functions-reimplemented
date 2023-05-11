require('./anchor.js')

function testAnchor() {
  {// Test case 1 : standard case
    const str = "Hello, world!"
    const name = "myAnchor"
    const anchoredStr = str.anchor(name)

    if (anchoredStr !== `<a name="${name}">${str}</a>`) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }
}

testAnchor()