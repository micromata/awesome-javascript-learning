/**
 * Calculates the factorial of a number using recursion.
 * The factorial of a number n (n!) is the product of all positive integers less than or equal to n.
 * For example, 5! = 5 * 4 * 3 * 2 * 1 = 120.
 * @param {number} n - The non-negative integer to calculate factorial for.
 * @returns {number} The factorial of n.
 */
function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: n multiplied by factorial of (n-1)
  return n * factorial(n - 1);
}

// Example usage: Calculate and log the factorial of 5
console.log(factorial(5)); // Outputs: 120
