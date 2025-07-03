public class pattern3 {
    public static void main(String[] args) {
        int n = 5;
        int num = 1;


        // Pattern 1: Print numbers in a triangle pattern
        /*
            1                  1 
            2 3
            4 5 6
            7 8 9 10
            11 12 13 14 15
         */

        // for (int i = 1; i <= n; i++) {  // // outer loop for rows               
        //     for (int j = 1; j <= i; j++) {
        //         System.out.print(num + " ");
        //         num++;
        //     }
        //     System.err.println();
        // }

        // Pattern 2: Print in pattern in a reverse triangle pattern
        /*
            1 2 3 4 5
            6 7 8 9
            10 11 12
            13 14
            15
         */

         for (int i = n; i >= 1; i--){
            for (int j = 1; j<= i; j++){
                System.out.print(num + " ");
                num++;
            }
            System.out.println();
         }
    }
}
