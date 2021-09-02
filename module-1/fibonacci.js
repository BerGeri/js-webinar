/**
 * The function returns the nth value of
 * the Fibonacci sequence
 *
 * @param {number} n (n >= 0)
 * @returns {number} Fibonacci number or 0 if any arguments are not proper
 */
function fibonacci(n) {
    let nThFibonacci;
    let f = 0;
    let prev = 1;
    let next;
    /*
     * Your task is to calculate the nth value of the
     * Fibonacci sequence.
     * https://en.wikipedia.org/wiki/Fibonacci_number
     * Store the value in the nThFibonacci variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    if (!isNaN(n)) {
        for (let i=0; i<n; i++) {
            next = f+prev;
            prev= f;
            f=next;
        } 
        return nThFibonacci=f;
    // ...AND THIS COMMENT LINE!
    }
    return nThFibonacci;
}
module.exports = fibonacci;