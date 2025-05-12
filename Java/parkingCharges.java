import java.util.Scanner;

public class parkingCharges {
    public static int calculateCharges(int hours, int entrytime) {
        int ratePerHour;

        // time based rate
        if (entrytime >= 0 && entrytime < 12) {
            ratePerHour = 10; // Morning rate
        } else {
            ratePerHour = 20; // Afternoon or Evening rate
        }

        return ratePerHour * hours;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number of hours to park: ");
        int hours = sc.nextInt();

        System.out.print("Enter the entry time (0 to 23): ");
        int entrytime = sc.nextInt();

        if (entrytime < 0 || entrytime > 23 || hours <= 0) {
            System.out.println("Invalid input! Please enter the time (0 to 23) and Positive Hours only: ");
        } else {
            int totalNumberOfCharges = calculateCharges(hours, entrytime);
            System.out.println("Total charges for " + hours + " hours: " + totalNumberOfCharges + " Rupees");
        }
        sc.close();

    }

}
