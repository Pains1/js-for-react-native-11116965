function processArray(numbers) {
    return numbers.map((num) => (num % 2 === 0 ? num ** 2 : num * 3));
  }
  