public class Breakandcontinue {
    public static void main(String[] args) {

        for (int i = 1; i <= 5; i++) {
            if (i == 3) {
                continue; // skip the current iteration when i is 3
            }
            System.out.println(i); // this will print 1, 2, 4, 5
        }

        System.out.println();

        for (int j = 1; j <= 5; j++) {
            System.out.println(j);
            if (j == 3) {
                continue;
            }
        }

        System.out.println();

        for (int k = 1; k <= 5; k++) {
            System.out.println(k);
            if (k == 3) {
                break; // exit the loop when i is 3
            }
        }
        System.out.println();

        for (int l = 1; l <= 5; l++) {
            if (l == 3) {
                break; // exit the loop when i is 3
            }
            System.out.println(l); // this will print 1, 2
        }

    }
}
