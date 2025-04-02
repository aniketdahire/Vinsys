import java.util.Scanner;

public class decrementStar {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the star no");
        int number = sc.nextInt();

        for (int i = 1; i <=number; i++) {
            for (int j = number; j >= i; j--) {
                System.out.print("*");
            }
            System.out.println();
        }
        sc.close();
    }
}