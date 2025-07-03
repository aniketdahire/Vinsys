// Java program to calculate combination: C(n, r) = n! / (r! * (n - r)!)
public class Combination {
    public static void main(String[] args) {
        int n = 5; // Total number of items
        int r = 3; // Number of items to choose

        int factN = 1;     // To store n!
        int factR = 1;     // To store r!
        int factNR = 1;    // To store (n - r)!
        int c = n - r;     // (n - r)

        // Calculate n!
        for (int i = 1; i <= n; i++) {
            factN *= i;
        }
        System.out.println("Factorial of n (" + n + ") = " + factN);

        // Calculate r!
        for (int i = 1; i <= r; i++) {
            factR *= i;
        }
        System.out.println("Factorial of r (" + r + ") = " + factR);

        // Calculate (n - r)!
        for (int i = 1; i <= c; i++) {
            factNR *= i;
        }
        System.out.println("Factorial of (n - r) (" + c + ") = " + factNR);

        // Calculate combination using: nCr = n! / (r! * (n - r)!)
        int combinationOfncr = factN / (factR * factNR);

        // Output the result
        System.out.println("Combination C (" + n + "," + r + ") = " + combinationOfncr);
    }
}
