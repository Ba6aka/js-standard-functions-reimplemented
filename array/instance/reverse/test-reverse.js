function testReverse() {
  // Test case 1
  {
    const arr1 = [1, 2, 3]
    const result = arr1.reverse()
    if (result[0] === 3 && result[1] === 2 && result[2] === 1) {
      console.log("Test case 1 passed")
    } else {
      console.error("Test case 1 failed")
    }
  }

  // Test case 2
  {
    const arr2 = ["a", "b", "c", "d"]
    const result = arr2.reverse()
    if (result[0] === "d" && result[1] === "c" && result[2] === "b" && result[3] === "a") {
      console.log("Test case 2 passed")
    } else {
      console.error("Test case 2 failed")
    }
  }

  // Test case 3
  {
    const arr3 = [1]
    const result = arr3.reverse()
    if (result[0] === 1) {
      console.log("Test case 3 passed")
    } else {
      console.error("Test case 3 failed")
    }
  }

  // Test case 4
  {
    const arr4 = []
    const result = arr4.reverse()
    if (result.length === 0) {
      console.log("Test case 4 passed")
    } else {
      console.error("Test case 4 failed")
    }
  }
}

testReverse()