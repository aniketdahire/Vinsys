import java.util.Scanner;
public class StarPattern {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n =sc.nextInt();

        for (int i = 1; i <= 5; i++){
            System.out.print("*");
        }
        sc.close();
    }
}