import java.util.Scanner;

public class mirrorStar {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of star");
        // int number = sc.nextInt();

        // int nst = 1;
        // int nsp = number - 1;

        // for (int i = 0; i < number; i++) {
        //     for (int j = 0; j < nsp; j++) {
        //         System.out.print(" ");
        //     }
        //     for (int k = 0; k < nst; k++) {
        //         System.out.print("*");
        //     }

        //     if (i <= nsp) {
        //         nst += 2;
        //         nsp -= 1;
        //     } else {
        //         nst -= 2;
        //         nsp += 1;
        //     }
        //     System.out.println();

        // }

        // for (int i = 0; i < number -1; i++) {
        //     for (int j = 0; j < nsp; j++) {
        //         System.out.print(" ");
        //     }
        //     for (int k = 0; k < nst; k--) {
        //         System.out.print("*");
        //     }

        //     if (i <= nsp) {
        //         nst -= 2;
        //         nsp += 1;
        //     } else {
        //         nst += 2;
        //         nsp -= 1;
        //     }
            // System.out.println();
            int number=sc.nextInt();
            int nst=1;
            int nsp=number-1;
            for (int i = 1; i<=number+number-1;i++){
                for (int j =1; j<=nsp; j++){
                    System.out.print(" ");
                }
                for (int k= 1;k<=nst;k++){
                    System.out.print("*");
                }

                if(i<number){
                    nst+=2;
                    nsp-=1;
                } else{
                    nst-=2;
                    nsp+=1;
                }
                System.out.println();
            }
        }

    }

