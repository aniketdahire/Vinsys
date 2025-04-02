import java.util.Scanner;

public class pyramid {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of star");
        int number = sc.nextInt();

        int nst = 1;
        int nsp = number - 1; // to print the no of space (eg. 5 (5-1=4 space ) 

        for (int i = 1; i <= number; i++) {
            for (int j = 1; j <=nsp; j++) { // for space print 
                System.out.print(" ");
            }

            for (int k = 1; k <=nst; k++) { // for star print 
                System.out.print("*");
            }

            //important
            nst += 2;
            nsp -= 1;

            System.out.println();
        }
    }
}
