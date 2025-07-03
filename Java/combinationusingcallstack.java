/*
 * 📚 Call Stack Theory for Combination Program (nCr)
 * --------------------------------------------------
 * - This program calculates nCr = n! / (r! * (n - r)!) using a call stack.
 * - Each method call (main → nCr → factorial) is pushed onto the call stack.
 * - When factorial() completes, it's popped off and returns control.
 *
 * ▶ Call Stack Flow:
 *    1. main() starts and pushes nCr(n, r) to the stack.
 *    2. nCr() calls factorial(n), factorial(r), factorial(n - r).
 *    3. Each factorial() call is pushed and popped once it returns a value.
 *    4. Once nCr() finishes, it's popped, and the result is printed in main().
 *
 * 🧠 Example (n = 5, r = 3):
 *    - factorial(5) → returns 120
 *    - factorial(3) → returns 6
 *    - factorial(2) → returns 2
 *    - nCr = 120 / (6 * 2) = 10
 *
 * ✅ Output: 10
 */

public class combinationusingcallstack {

    // Method to calculate factorial of a number
    public static int factorial(int n) {
        int fact = 1;
        for (int i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;  // returns factorial to caller
    }

    // Method to calculate combination using nCr formula
    public static int nCr(int n, int r) {
        int ncr = factorial(n) / (factorial(r) * factorial(n - r));
        return ncr;  // returns combination value
    }

    public static void main(String[] args) {
        int n = 5;
        int r = 3;
        System.out.println(nCr(n, r));  // Calls nCr and prints the result
    }
}
