
/*
 *  int [] arr = {1,3,4,5,6};
 * 
 *  int [] arr = new int [6];
 * 
 * 
 *  int [] [] arr = new int [r] [c];
 * 
 * 
 */
import java.util.*;

public class Array {

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        // int row = 4;
        // int col=4;

        // int [][] arr = new int [row][col];

        // //loop for input
        // for (int i = 0; i<row; i++){
        // for (int j= 0; j<col; j++){
        // arr[i][j]=sc.nextInt();
        // }
        // }

        // loop for output
        // for (int i=0;i<row;i++){
        // for (int j=0; j<col; j++){
        // System.out.print(arr[i][j]+ " ");
        // }
        // System.out.println();
        // }

        // take input as dimention
        System.out.println("Enter the row");
        int row = sc.nextInt();
        System.out.println("Enter the col");
        int col = sc.nextInt();

        int num = 1;

        int[][] sprial = new int[row][col];

        int top = 0, bottom = row - 1;
        int left = 0, right = col - 1;

        while (top <= bottom && left <= right) {
            // top to right
            for (int i = left; i <= right; i++) {
                sprial[top][i] = num++;
            }
            top++;

            // top to bottom
            for (int j = top; j<=bottom;j++){
                sprial[j][right]=num++;
            }
            right--;

            // right to left
            if (top <= bottom){
                for (int i = right; i>=left; i--){
                    sprial[bottom][i]=num++;
                }
                bottom--;
            }

            //bottom to top 
            if(left<=right){
                for(int j= bottom;j>=top; j--){
                    sprial[j][left]=num++;
                }
                left++;
            }
        }


        //print sprial 
        for (int i=0;i<row;i++){
            for (int j = 0;j<col;j++){
                System.out.print(sprial[i][j]+" ");
            }
            System.out.println();
        }
    }

}