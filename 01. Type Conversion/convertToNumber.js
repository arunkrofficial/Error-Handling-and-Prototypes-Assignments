function convertToNumber(str) {
  try {
    const num = Number(str);
    if (isNaN(num)) throw new Error("Invalid number");
    return num;
  } catch (error) {
    return error.message;
  }
}

console.log(convertToNumber("123")); // Output: 123
console.log(convertToNumber("abc")); // Output: Invalid number
