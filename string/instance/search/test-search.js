require('./search.js')

function testSearch() {
  {// Test case 1: standard
    const str = "Hello, world!";
    const pattern = "world";
    const index = str.search(pattern);

    if (index !== 7) {
      console.error('Test case 1 failed');
    } else {
      console.log('Test case 1 passed');
    }
  }

  {// Test case 2: search space
    const str = "OpenAI is awesome!";
    const pattern = " ";
    const index = str.search(pattern);

    if (index !== 6) {
      console.error('Test case 2 failed');
    } else {
      console.log('Test case 2 passed');
    }
  }

  {// Test case 3: wrong argument
    const str = "Hello, world!";
    const pattern = "foo";
    const index = str.search(pattern);

    if (index !== -1) {
      console.error('Test case 3 failed');
    } else {
      console.log('Test case 3 passed');
    }
  }
}

testSearch()