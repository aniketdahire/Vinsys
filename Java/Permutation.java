// Java program to calculate permutation: P(n, r) = n! / (n - r)!
public class Permutation {
    public static void main(String[] args) {
        int n = 5; // Total number of items
        int r = 3; // Number of items to arrange

        int fact = 1;      // To store factorial of n (n!)
        int factOfr = 1;   // To store factorial of (n - r) i.e. (n - r)!

        // Calculate factorial of n (n!)
        for (int i = 1; i <= n; i++) {
            fact = fact * i;
        }
        System.out.println("Factorial of n (" + n + ") = " + fact);

        // Calculate factorial of (n - r)
        for (int j = 1; j <= n - r; j++) {
            factOfr = factOfr * j;
        }
        System.out.println("Factorial of (n - r) (" + (n - r) + ") = " + factOfr);

        // Calculate permutation using the formula: n! / (n - r)!
        int permutation = fact / factOfr;

        // Display the result
        System.out.println("Permutation P(" + n + "," + r + ") = " + permutation);
    }
}
