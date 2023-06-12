function getNonRepeatedChars(inputString) {
    var charCount = {};
    var nonRepeatedChars = [];
  
    // Count the occurrence of each character
    for (var i = 0; i < inputString.length; i++) {
      var char = inputString[i];
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    // Collect non-repeated characters
    for (var char in charCount) {
      if (charCount[char] === 1) {
        nonRepeatedChars.push(char);
      }
    }
  
    // Return the non-repeated characters as a string
    return nonRepeatedChars.join('');
  }
  
  // Example usage
  var input = "aabbcdddefg";
  var result = getNonRepeatedChars(input);
  console.log(result);  // Output: "c"
  