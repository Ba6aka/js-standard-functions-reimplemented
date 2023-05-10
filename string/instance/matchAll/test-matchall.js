require('./matchAll.js')

function testMatchAll() {
    {// Test case 1
      const str1 = "Hello, world!"
      const regex1 = /\w+/g
      const matches1 = str1.matchAll(regex1)
      const expected1 = [["Hello", 0], ["world", 7]]
  
      for (let i = 0; i < matches1.length; i++) {
        const match = matches1[i]
        
        if (match[0] !== expected1[i][0] || match.index !== expected1[i][1]) {
          console.error('Test case 1 failed')
          return
        }
      }
  
      console.log('Test case 1 passed')
    }

    
  {// Test case 2
    const str2 = "The quick brown fox jumps over the lazy dog."
    const regex2 = /\w+/g
    const matches2 = str2.matchAll(regex2)
    const expected2 = [      ["The", 0],
      ["quick", 4],
      ["brown", 10],
      ["fox", 16],
      ["jumps", 20],
      ["over", 26],
      ["the", 31],
      ["lazy", 35],
      ["dog", 40]
    ]

    for (let i = 0; i < matches2.length; i++) {
      const match = matches2[i]
      
      if (match[0] !== expected2[i][0] || match.index !== expected2[i][1]) {
        console.error('Test case 2 failed')
        return
      }
    }

    console.log('Test case 2 passed')
  }

}

testMatchAll()