require('./anchor.js')

function testAnchor() {
  {// Test case 1
    const str1 = "Hello, world!"
    const name1 = "myAnchor"
    const anchoredStr1 = str1.anchor(name1)

    if (anchoredStr1 !== `<a name="${name1}">${str1}</a>`) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str2 = "Hello, world!"
    const name2 = "myAnchor2"
    const anchoredStr2 = str2.anchor(name2)

    if (anchoredStr2 !== `<a name="${name2}">${str2}</a>`) {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    const name3 = "myAnchor3"
    const anchoredStr3 = str3.anchor(name3)

    if (anchoredStr3 !== `<a name="${name3}">${str3}</a>`) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4
    const str4 = "This is a test string."
    const name4 = "myAnchor4"
    const anchoredStr4 = str4.anchor(name4)

    if (anchoredStr4 !== `<a name="${name4}">${str4}</a>`) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }
}

testAnchor()