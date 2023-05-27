require('./entries.js')

testEntries()

function testEntries() {
  const arr = ['a', 'b', 'c']
  
  {// Test case 1
    const entries1 = arr.entries()
    const expected1 = [[0, 'a'], [1, 'b'], [2, 'c']]
    
    for (let i = 0; i < expected1.length; i++) {
      const [index, value] = entries1.next().value
      if (index !== expected1[i][0] || value !== expected1[i][1]) {
        console.error('Test case 1 failed')
        return
      }
    }
    
    console.log('Test case 1 passed')
  }
  
  {// Test case 2
    const arr2 = []
    const entries2 = arr2.entries()
    const expected2 = []
    
    for (let i = 0; i < expected2.length; i++) {
      const [index, value] = entries2.next().value
      if (index !== expected2[i][0] || value !== expected2[i][1]) {
        console.error('Test case 2 failed')
        return
      }
    }
    
    console.log('Test case 2 passed')
  }
  
  {// Test case 3
    const arr3 = ['a']
    const entries3 = arr3.entries()
    const expected3 = [[0, 'a']]
    
    for (let i = 0; i < expected3.length; i++) {
      const [index, value] = entries3.next().value
      if (index !== expected3[i][0] || value !== expected3[i][1]) {
        console.error('Test case 3 failed')
        return
      }
    }
    
    console.log('Test case 3 passed')
  }
}
