public class Pattern2 {
    public static void main(String[] args) {
        int n = 5;
        int nst = 1;
        // int nsp = (n - 1);
        int num = 1;
        
        for (int i = 1; i <=n; i++){
            for (int j = 1; j <= nst; j++){
                System.out.print(num + " ");
                num++;
            }

            if (i <= (n-1)){
                nst +=1;
                // nsp -=1;
            }

            System.out.println();
        }
    }
}
