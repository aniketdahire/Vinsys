public class Pattern {
    public static void main(String[] args) {
        int n = 5; // Number of rows

        int nst = (n / 2) + 1;
        int nsp = 1; // to print the no of space (eg. 5 (5-1=4 space )

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= nst; j++) { // for star print
                System.out.print("*");
            }

            for (int k = 1; k <= nsp; k++) { // for space print
                System.out.print(" ");
            }

            for (int j = 1; j <= nst; j++) { // for star print
                System.out.print("*");
            }

            if (i <= n / 2) {
                nst -= 1;
                nsp += 2;
            } else {
                nst += 1;
                nsp -= 2;
            }

            // important
            // nst -= 1;
            // nsp += 2;

            System.out.println();

        }
    }
}