require('./normalize.js')

function testNormalize() {
  {// Test case 1
    const str1 = "A\u0308"
    const str2 = str1.normalize("NFC")
    
    if (str2 !== str1) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1 passed')
    }
  }

  {// Test case 2
    const str3 = "A\u0308"
    const str4 = str3.normalize("NFD")
    
    if (str4 !== "A\u0308") {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2 passed')
    }
  }

  {// Test case 3
    const str5 = "\uFB00"
    const str6 = str5.normalize("NFKC")
    
    if (str6 !== str5) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3 passed')
    }
  }

  {// Test case 4
    const str7 = "\u1E9B\u0323"
    const str8 = str7.normalize("NFKD")
    
    if (str8 !== str7) {
      console.error('Test case 4 failed')
    } else {
      console.log('Test case 4 passed')
    }
  }
}

testNormalize()