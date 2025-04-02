import java.util.Scanner;

public class incrementStar {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of star");
        int number=sc.nextInt();

        for (int i=0; i<=number; i++){   //print the outer loop till number eg-5
            for (int j=1; j<=i; j++){ // print the row wise star with respect to i
                System.out.print("*");
            }

            System.out.println();
        }

        sc.close();


    }

}
