export function processArray(numbers) {
    return numbers.map((num) => (num % 2 === 0 ? num ** 2 : num * 3));
  }


  function formatArrayStrings(strings, processedNumbers) {
    return strings.map((string, index) =>
  processedNumbers[index] % 2 === 0
  ? string.toUpperCase()
        : string.toLowerCase()
    );
  }
  
  