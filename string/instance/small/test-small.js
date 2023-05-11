require('./small.js')

function testSmall() {
  {// Test case 1: standard
    const str = "Hello, world!";
    const smallStr = str.small();

    if (smallStr !== "<small>Hello, world!</small>") {
      console.error('Test case 1 failed');
    } else {
      console.log('Test case 1 passed');
    }
  }

  {// Test case 2: empty string
    const str = "";
    const smallStr = str.small();

    if (smallStr !== "<small></small>") {
      console.error('Test case 2 failed');
    } else {
      console.log('Test case 2 passed');
    }
  }
}

testSmall()