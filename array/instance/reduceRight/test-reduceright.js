require('./reduceRight.js')

function testReduceRight() {
  { // Test case 1
    const arr1 = [1, 2, 3, 4]
    const result = arr1.reduceRight((acc, val) => acc + val)

    if (result !== 10) {
      console.error('Test case 1 failed')
    } else {
      console.log('Test case 1: passed')
    }
  }

  { // Test case 2
    const arr2 = ['a', 'b', 'c']
    const result = arr2.reduceRight((acc, val, index) => acc + val + index, '')

    if (result !== 'c2b1a0') {
      console.error('Test case 2 failed')
    } else {
      console.log('Test case 2: passed')
    }
  }

  { // Test case 3: with initial value
    const arr3 = [1, 2, 3, 4]
    const result = arr3.reduceRight((acc, val) => acc - val, 20)

    if (result !== 10) {
      console.error('Test case 3 failed')
    } else {
      console.log('Test case 3: passed')
    }
  }

  { // Test case 4: empty array without initial value
    const arr4 = []
    let errorThrown = false
    try {
      arr4.reduceRight((acc, val) => acc + val)
    } catch (e) {
      errorThrown = true
      if (e.message !== 'Reduce of empty array with no initial value') {
        console.error('Test case 4 failed')
      } else {
        console.log('Test case 4: passed')
      }
    }
    if (!errorThrown) {
      console.error('Test case 4 failed')
    }
  }

  { // Test case 5: empty array with initial value
    const arr5 = []
    const result = arr5.reduceRight((acc, val) => acc + val, 100)

    if (result !== 100) {
      console.error('Test case 5 failed')
    } else {
      console.log('Test case 5: passed')
    }
  }
}

testReduceRight()
