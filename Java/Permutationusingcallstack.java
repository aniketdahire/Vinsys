public class Permutationusingcallstack {
    public static int factorial(int n){
        int fact = 1;
        for (int i = 1; i <= n;i++){
            fact *= i;
        }
        return fact ;
    }

    public static int nPr(int n, int r){
        int nPr = factorial(n) / (factorial(n-r));
        return nPr;
    }
    public static void main(String[] args) {
        int n = 5;
        int r = 2;
        System.out.println(nPr(n,r));
    }
}
